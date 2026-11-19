import { cookies } from "next/headers";

export const SESSION_COOKIE = "ba_admin_session";
const SESSION_DAYS = 7;

function getSecret() {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error("JWT_SECRET is not set");
	}
	return secret;
}

export function getAdminPassword() {
	return process.env.ADMIN_PASSWORD || "Naveen@1998";
}

export function verifyPassword(password: string) {
	return password === getAdminPassword();
}

function toBase64Url(buffer: ArrayBuffer) {
	const bytes = new Uint8Array(buffer);
	let binary = "";
	for (let i = 0; i < bytes.length; i++) {
		binary += String.fromCharCode(bytes[i]);
	}
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hmacSign(payload: string) {
	const key = await crypto.subtle.importKey(
		"raw",
		new TextEncoder().encode(getSecret()),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"],
	);
	const sig = await crypto.subtle.sign(
		"HMAC",
		key,
		new TextEncoder().encode(payload),
	);
	return toBase64Url(sig);
}

export async function createSessionToken() {
	const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
	const payload = `admin.${exp}`;
	const sig = await hmacSign(payload);
	return `${payload}.${sig}`;
}

export async function verifySessionToken(token: string | undefined) {
	if (!token) return false;
	const parts = token.split(".");
	if (parts.length !== 3) return false;
	const [role, expStr, sig] = parts;
	if (role !== "admin") return false;
	const exp = Number(expStr);
	if (!Number.isFinite(exp) || Date.now() > exp) return false;
	try {
		const expected = await hmacSign(`${role}.${expStr}`);
		return expected === sig;
	} catch {
		return false;
	}
}

export async function isAuthenticated() {
	const jar = await cookies();
	return verifySessionToken(jar.get(SESSION_COOKIE)?.value);
}
