"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, AlertCircle, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative flex flex-col justify-center items-center w-full py-20 md:py-40 px-10 min-h-[60vh] overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
			<div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

			<div className="max-w-2xl w-full text-center space-y-8">
				{/* 404 Icon */}
				<div className="relative">
					<div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
					<div
						className={cn(
							"relative bg-primary/10 p-6 rounded-full w-24 h-24 md:w-32 md:h-32 mx-auto flex items-center justify-center transition-all duration-700",
							mounted
								? "opacity-100 scale-100"
								: "opacity-0 scale-0"
						)}
					>
						<Search className="h-12 w-12 md:h-16 md:w-16 text-primary" />
					</div>
				</div>

				{/* Error Code */}
				<div
					className={cn(
						"space-y-4 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "200ms" }}
				>
					<h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
						404
					</h1>
					<h2 className="text-2xl md:text-4xl font-bold text-foreground flex items-center justify-center gap-2">
						<AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-primary" />
						Page Not Found
					</h2>
					<p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto">
						The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
					</p>
				</div>

				{/* Action Buttons */}
				<div
					className={cn(
						"flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "400ms" }}
				>
					<Link href="/">
						<Button
							variant="default"
							size="lg"
							className="gap-2 min-w-[140px] hover:scale-105 transition-transform shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
						>
							<Home className="h-4 w-4" />
							Go Home
						</Button>
					</Link>
					<Button
						variant="outline"
						size="lg"
						onClick={() => window.history.back()}
						className="gap-2 min-w-[140px] hover:scale-105 transition-transform"
					>
						<ArrowLeft className="h-4 w-4" />
						Go Back
					</Button>
				</div>
			</div>
		</div>
	);
}
