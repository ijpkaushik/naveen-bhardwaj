"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
	return (
		<div className="flex flex-col items-center justify-center w-full py-20 md:py-40 px-10 min-h-[60vh]">
			<div className="relative">
				{/* Animated spinner */}
				<div className="relative w-20 h-20 md:w-24 md:h-24">
					<Loader2 className="h-full w-full animate-spin text-primary" />
					<div className="absolute inset-0 rounded-full border-4 border-primary/20" />
					<div className="absolute inset-2 rounded-full border-4 border-transparent border-t-primary/40 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
				</div>
			</div>
			
			{/* Loading text with animation */}
			<div className="mt-8 space-y-2 text-center">
				<h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-pulse">
					Loading...
				</h2>
				<p className="text-sm md:text-base text-muted-foreground">
					Please wait while we prepare everything
				</p>
			</div>

			{/* Animated dots */}
			<div className="flex gap-2 mt-6">
				<div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }} />
				<div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
				<div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
			</div>
		</div>
	);
}
