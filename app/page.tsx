"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import home_image from "@/assets/home_image.jpg";
import { cn } from "@/lib/utils";

export default function Home() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative flex flex-col-reverse md:flex-row h-full justify-between pt-10 md:pt-32 pb-10 md:pb-20 px-5 md:px-20 gap-10 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
			<div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

			{/* Content Section */}
			<div className="flex flex-col w-full md:w-2/3 relative z-10">
				{/* Subtitle with fade-in */}
				<span
					className={cn(
						"text-lg text-zinc-700 dark:text-zinc-300 font-medium mb-2 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
					style={{ transitionDelay: "100ms" }}
				>
					<span className="inline-flex items-center gap-2">
						<Sparkles className="h-4 w-4 text-primary animate-pulse" />
						Software Developer
					</span>
				</span>

				{/* Main heading with gradient and animation */}
				<h1
					className={cn(
						"text-3xl md:text-5xl lg:text-6xl uppercase font-bold pt-2 pb-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
					style={{ transitionDelay: "200ms" }}
				>
					<span className="relative inline-block">
						Naveen Bhardwaj
						{/* Animated underline */}
						<span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 animate-underline" />
					</span>
				</h1>

				{/* Description with fade-in */}
				<p
					className={cn(
						"text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "400ms" }}
				>
					I&apos;m a software developer specializing in full-stack web development. My
					expertise lies in crafting scalable, secure, and dependable web
					applications using a range of frameworks and technologies. I thrive on
					tackling intricate challenges, constantly expanding my skill set, and
					delivering top-notch code that adheres to the highest standards and
					best practices in the industry.
				</p>

				{/* Buttons with enhanced hover effects */}
				<div
					className={cn(
						"flex flex-wrap gap-4 py-8 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "600ms" }}
				>
					<Link href={"/projects"} className="group">
						<Button
							size={"lg"}
							variant={"default"}
							className="relative overflow-hidden group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
						>
							<span className="relative z-10 flex items-center gap-2">
								My Projects
								<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</span>
							{/* Ripple effect */}
							<span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-md" />
						</Button>
					</Link>
					<Link href={"/about"} className="group">
						<Button
							size={"lg"}
							variant={"outline"}
							className="relative overflow-hidden group-hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 hover:bg-primary/5"
						>
							<span className="relative z-10 flex items-center gap-2">
								More About Me
								<ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</span>
							{/* Hover background effect */}
							<span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-md" />
						</Button>
					</Link>
				</div>

				{/* Stats or additional info section */}
				<div
					className={cn(
						"flex flex-wrap gap-6 mt-4 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "800ms" }}
				>
					<div className="flex flex-col">
						<span className="text-2xl font-bold text-primary">3+</span>
						<span className="text-sm text-muted-foreground">Years Experience</span>
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-bold text-primary">10+</span>
						<span className="text-sm text-muted-foreground">Projects Completed</span>
					</div>
					<div className="flex flex-col">
						<span className="text-2xl font-bold text-primary">Full-Stack</span>
						<span className="text-sm text-muted-foreground">Developer</span>
					</div>
				</div>
			</div>

			{/* Image Section with floating animation */}
			<div
				className={cn(
					"relative w-full md:w-1/3 flex items-center justify-center transition-all duration-700",
					mounted
						? "opacity-100 translate-x-0 scale-100"
						: "opacity-0 translate-x-8 scale-95"
				)}
				style={{ transitionDelay: "300ms" }}
			>
				{/* Glow effect behind image */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" />
				
				{/* Image container with hover effects */}
				<div className="relative group">
					<div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
					
					<Image
						src={home_image}
						className={cn(
							"h-80 md:h-[500px] w-80 md:w-[400px] shadow-2xl aspect-square object-cover rounded-full md:rounded-2xl m-auto bg-orange-300 relative z-10 transition-all duration-500",
							"group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-primary/20",
						)}
						alt="Naveen Bhardwaj - Software Developer"
						priority
					/>
					
					{/* Decorative border on hover */}
					<div className="absolute inset-0 rounded-full md:rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-all duration-500 -z-10" />
				</div>
			</div>

		</div>
	);
}
