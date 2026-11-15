"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Project from "./_components/Project";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";
import { Github, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MyProjects() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative flex flex-col px-5 md:px-20 py-10 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
			<div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

			{/* Header Section */}
			<div className="mb-8">
				<h1
					className={cn(
						"text-4xl md:text-5xl lg:text-6xl uppercase font-bold pt-2 pb-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent transition-all duration-700 flex items-center gap-3",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
				>
					<Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
					My Projects
				</h1>
				<p
					className={cn(
						"text-lg text-muted-foreground max-w-2xl mt-2 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "200ms" }}
				>
					Explore my collection of projects showcasing my skills in full-stack
					development, modern frameworks, and innovative solutions.
				</p>
			</div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
				{projects.map((project, index) => (
					<Project key={index} project={project} index={index} />
				))}
			</div>

			{/* GitHub CTA */}
			<div
				className={cn(
					"flex justify-center mt-8 transition-all duration-700",
					mounted
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-4"
				)}
				style={{ transitionDelay: `${projects.length * 100 + 200}ms` }}
			>
				<Link
					href={"https://github.com"}
					target="_blank"
					rel="noopener noreferrer"
					className="group"
				>
					<Button
						size={"lg"}
						variant="outline"
						className="gap-2 group-hover:scale-105 transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 shadow-md hover:shadow-lg"
					>
						<Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
						See more on Github
						<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
