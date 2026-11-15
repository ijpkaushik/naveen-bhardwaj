"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RotateCwIcon, AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col justify-center items-center w-full py-20 md:py-40 px-10 min-h-[60vh]">
			<div className="max-w-2xl w-full text-center space-y-8">
				{/* Error Icon */}
				<div className="relative">
					<div className="absolute inset-0 bg-destructive/20 blur-3xl rounded-full animate-pulse" />
					<div className="relative bg-destructive/10 p-6 rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto flex items-center justify-center">
						<AlertTriangle className="h-12 w-12 md:h-16 md:w-16 text-destructive" />
					</div>
				</div>

				{/* Error Code */}
				<div className="space-y-4">
					<h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-destructive to-destructive/60 bg-clip-text text-transparent">
						500
					</h1>
					<h2 className="text-2xl md:text-4xl font-bold text-foreground">
						Oops! Something went wrong
					</h2>
					<p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
						We encountered an unexpected error. Don&apos;t worry, our team has been notified and is working on it.
					</p>
				</div>

				{/* Error Details (only in development) */}
				{process.env.NODE_ENV === "development" && error.message && (
					<div className="bg-muted/50 border border-border rounded-lg p-4 text-left">
						<p className="text-sm font-mono text-destructive break-all">
							{error.message}
						</p>
					</div>
				)}

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
					<Button
						variant="default"
						size="lg"
						onClick={reset}
						className="gap-2 min-w-[140px] hover:scale-105 transition-transform"
					>
						<RotateCwIcon className="h-4 w-4" />
						Try Again
					</Button>
					<Link href="/">
						<Button
							variant="outline"
							size="lg"
							className="gap-2 min-w-[140px] hover:scale-105 transition-transform"
						>
							<Home className="h-4 w-4" />
							Go Home
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
