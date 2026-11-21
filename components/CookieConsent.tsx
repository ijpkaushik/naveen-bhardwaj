"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "ba_cookie_consent";

export default function CookieConsent() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		try {
			if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
		} catch {
			setVisible(true);
		}
	}, []);

	function accept() {
		try {
			localStorage.setItem(STORAGE_KEY, "accepted");
		} catch {
			/* ignore */
		}
		setVisible(false);
	}

	if (!visible) return null;

	return (
		<div
			role="dialog"
			aria-label="Cookie notice"
			className="fixed bottom-4 left-4 right-4 z-[80] mx-auto max-w-lg border border-border bg-card p-4 shadow-lg sm:left-6 sm:right-auto"
		>
			<p className="text-sm leading-relaxed text-foreground/90">
				We use cookies for site preferences and, when ads are enabled, Google
				may use cookies to serve and personalize ads. See our{" "}
				<Link href="/privacy" className="font-semibold text-primary hover:underline">
					Privacy Policy
				</Link>{" "}
				for details and opt-out links.
			</p>
			<div className="mt-3 flex justify-end">
				<Button size="sm" onClick={accept}>
					Got it
				</Button>
			</div>
		</div>
	);
}
