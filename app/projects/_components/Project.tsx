"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Globe, ExternalLink, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Project = ({
	project,
	index,
}: {
	project: {
		title: string;
		description: string;
		github: string;
		link: string;
		tags: string[];
	};
	index: number;
}) => {
	const [mounted, setMounted] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Card
			className={cn(
				"group relative overflow-hidden border-2 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10",
				"bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800",
				mounted
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-8"
			)}
			style={{
				transitionDelay: mounted ? `${index * 100}ms` : "0ms",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Decorative gradient overlay on hover */}
			<div
				className={cn(
					"absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500",
					isHovered && "opacity-100"
				)}
			/>

			{/* Animated border effect */}
			<div
				className={cn(
					"absolute inset-0 rounded-lg border-2 border-primary/0 transition-all duration-500",
					isHovered && "border-primary/20"
				)}
			/>

			<CardHeader className="relative z-10 pb-3">
				<CardTitle className="flex items-center justify-between text-lg font-bold group-hover:text-primary transition-colors duration-300">
					<div className="flex items-center gap-2">
						<Code2 className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
						<span>{project.title}</span>
					</div>
					<div className="flex gap-2">
						<Link
							href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="group/link"
						>
							<Button
								size={"icon"}
								variant={"ghost"}
								className="h-9 w-9 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:text-primary"
							>
								<Github className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" />
							</Button>
						</Link>
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							onClick={(e) => e.stopPropagation()}
							className="group/link"
						>
							<Button
								size={"icon"}
								variant={"ghost"}
								className="h-9 w-9 transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:text-primary"
							>
								<Globe className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-12" />
							</Button>
						</Link>
					</div>
				</CardTitle>
			</CardHeader>

			<CardContent className="relative z-10 flex flex-col gap-4">
				<p className="font-normal text-zinc-700 dark:text-zinc-300 leading-relaxed line-clamp-4 group-hover:text-foreground transition-colors duration-300">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 pt-2">
					{project.tags.map((tag, idx) => (
						<Badge
							key={idx}
							variant="secondary"
							className={cn(
								"transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/20",
								"hover:scale-105 cursor-default"
							)}
							style={{
								transitionDelay: isHovered ? `${idx * 50}ms` : "0ms",
							}}
						>
							{tag}
						</Badge>
					))}
				</div>

				{/* Action buttons */}
				<div className="flex gap-2 pt-2 border-t border-border/50">
					<Link
						href={project.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 group/btn"
					>
						<Button
							variant="outline"
							size="sm"
							className="w-full gap-2 transition-all duration-300 group-hover/btn:border-primary group-hover/btn:text-primary group-hover/btn:bg-primary/5"
						>
							<Github className="h-4 w-4" />
							Code
							<ExternalLink className="h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
						</Button>
					</Link>
					<Link
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 group/btn"
					>
						<Button
							variant="default"
							size="sm"
							className="w-full gap-2 transition-all duration-300 group-hover/btn:scale-105 shadow-md shadow-primary/20"
						>
							<Globe className="h-4 w-4" />
							Live Demo
							<ExternalLink className="h-3 w-3" />
						</Button>
					</Link>
				</div>
			</CardContent>

			{/* Shine effect on hover */}
			<div
				className={cn(
					"absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent",
					isHovered && "translate-x-full"
				)}
			/>
		</Card>
	);
};

export default Project;
