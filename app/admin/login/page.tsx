"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Loader2 } from "lucide-react";

export default function AdminLoginPage() {
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		setError("");
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password }),
			});
			if (!res.ok) {
				const data = await res.json().catch(() => ({}));
				setError(data.error || "Login failed");
				return;
			}
			router.replace("/admin");
			router.refresh();
		} catch {
			setError("Login failed");
		} finally {
			setLoading(false);
		}
	}

	return (
		<div className="mx-auto flex w-full max-w-md flex-col px-4 py-16 sm:px-6">
			<div className="mb-8 flex items-center gap-3">
				<div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
					<Lock className="h-5 w-5" />
				</div>
				<div>
					<h1 className="font-display text-3xl font-extrabold uppercase">
						Admin login
					</h1>
					<p className="text-sm text-muted-foreground">
						Enter the workshop password to manage the gallery.
					</p>
				</div>
			</div>

			<form onSubmit={onSubmit} className="space-y-4 border border-border bg-card p-6">
				<div className="space-y-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						type="password"
						autoComplete="current-password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="••••••••"
						required
					/>
				</div>
				{error && <p className="text-sm text-destructive">{error}</p>}
				<Button type="submit" className="w-full" disabled={loading}>
					{loading ? (
						<>
							<Loader2 className="mr-2 h-4 w-4 animate-spin" />
							Signing in…
						</>
					) : (
						"Sign in"
					)}
				</Button>
			</form>
		</div>
	);
}
