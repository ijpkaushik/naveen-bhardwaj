import { NextResponse } from "next/server";
import {
	SESSION_COOKIE,
	createSessionToken,
	verifyPassword,
} from "@/lib/auth";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const password = String(body.password || "");

		if (!verifyPassword(password)) {
			return NextResponse.json({ error: "Invalid password" }, { status: 401 });
		}

		const token = await createSessionToken();
		const response = NextResponse.json({ ok: true });
		response.cookies.set(SESSION_COOKIE, token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			path: "/",
			maxAge: 60 * 60 * 24 * 7,
		});
		return response;
	} catch {
		return NextResponse.json({ error: "Login failed" }, { status: 500 });
	}
}
