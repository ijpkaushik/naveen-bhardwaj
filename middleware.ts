import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "ba_admin_session";

async function hmacVerify(payload: string, signature: string, secret: string) {
	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(secret),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);
	const sig = await crypto.subtle.sign(
		"HMAC",
		key,
		new TextEncoder().encode(payload),
	);
	const bytes = new Uint8Array(sig);
	let binary = "";
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	const expected = btoa(binary)
		.replace(/\+/g, "-")
		.replace(/\//g, "_")
		.replace(/=+$/, "");
	return expected === signature;
}

async function isAdmin(request: NextRequest) {
	const token = request.cookies.get(SESSION_COOKIE)?.value;
	const secret = process.env.JWT_SECRET;
	if (!token || !secret) return false;
	const parts = token.split(".");
	if (parts.length !== 3) return false;
	const [role, expStr, sig] = parts;
	if (role !== "admin") return false;
	const exp = Number(expStr);
	if (!Number.isFinite(exp) || Date.now() > exp) return false;
	try {
		return await hmacVerify(`${role}.${expStr}`, sig, secret);
	} catch {
		return false;
	}
}

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	if (pathname.startsWith("/admin/login")) {
		if (await isAdmin(request)) {
			return NextResponse.redirect(new URL("/admin", request.url));
		}
		return NextResponse.next();
	}

	if (pathname.startsWith("/admin")) {
		if (!(await isAdmin(request))) {
			return NextResponse.redirect(new URL("/admin/login", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/admin", "/admin/:path*"],
};
