"use client";

import { useEffect, useState } from "react";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import Skills from "./_components/Skills";
import { User, Target, Rocket, Code } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutMe() {
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
			<div className="mb-10">
				<h1
					className={cn(
						"text-4xl md:text-5xl lg:text-6xl uppercase font-bold pt-2 pb-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent transition-all duration-700 flex items-center gap-3",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
				>
					<User className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
					About me
				</h1>
				<p
					className={cn(
						"text-lg text-muted-foreground max-w-3xl mt-2 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "200ms" }}
				>
					Learn more about my journey, skills, and professional experience.
				</p>
			</div>

			{/* About Content Section */}
			<div className="flex flex-col w-full gap-8 py-5 mb-10">
				<div
					className={cn(
						"flex flex-col w-full transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "300ms" }}
				>
					{/* Intro Card with Icons */}
					<div className="group relative bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 rounded-lg border-2 border-border p-6 md:p-8 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden">
						{/* Decorative icons */}
						<div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
							<Code className="h-16 w-16 text-primary animate-pulse" />
						</div>
						<div className="absolute bottom-4 left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
							<Rocket className="h-12 w-12 text-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
						</div>
						
						<div className="relative z-10">
							<div className="flex items-center gap-2 mb-4">
								<Target className="h-5 w-5 text-primary animate-pulse" />
								<h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">About Me</h2>
							</div>
							<p className="text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
								{`I am Naveen Bhardwaj, a full-stack developer with a B.Tech in
								Computer Science and Engineering from Maharaja Surajmal Institute of
								Technology, graduating with a GPA of 8.879. Currently, I work at
								Webmuch Software, contributing to a cricket fantasy app and a
								conference platform called Stagebud using web sockets, Payload CMS,
								and Next.js. I have interned at Night Lab and Mastork Technologies,
								working on projects like FanFolium and Spotlet. My goal is to
								enhance my expertise in real-time applications, backend
								architecture, and cloud infrastructure, eventually leading
								large-scale projects.`}
							</p>
						</div>
					</div>
					
					{/* Skills Section */}
					<Skills />
				</div>
			</div>

			{/* Experience and Education Section */}
			<div
				className={cn(
					"flex flex-col md:flex-row w-full gap-6 transition-all duration-700",
					mounted
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-4"
				)}
				style={{ transitionDelay: "500ms" }}
			>
				<Experience />
				<Education />
			</div>
		</div>
	);
}
