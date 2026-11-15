"use client";

import { Badge } from "@/components/ui/badge";
import { frameworks, languages, tools } from "@/constants/skills";
import React, { useEffect, useState } from "react";
import { Code2, Layers, Wrench, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
	const [mounted, setMounted] = useState(false);
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	const skillCategories = [
		{
			title: "Programming Languages",
			icon: Code2,
			skills: languages,
			delay: "100ms",
		},
		{
			title: "Libraries & Frameworks",
			icon: Layers,
			skills: frameworks,
			delay: "200ms",
		},
		{
			title: "Tools & Platforms",
			icon: Wrench,
			skills: tools,
			delay: "300ms",
		},
	];

	return (
		<div className="flex flex-col gap-6 mt-6">
			{/* Skills Header */}
			<div className="flex items-center gap-2 mb-2">
				<Sparkles className="h-6 w-6 text-primary animate-pulse" />
				<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Skills & Technologies</h2>
			</div>
			
			{skillCategories.map((category) => {
				const Icon = category.icon;
				return (
					<div
						key={category.title}
						className={cn(
							"group relative flex flex-col gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-500",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: category.delay }}
					>
						{/* Decorative background on hover */}
						<div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-lg transition-all duration-500" />
						
						<div className="relative z-10 flex items-center gap-3">
							<div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
								<Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
							</div>
							<span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
								{category.title}
							</span>
							<Zap className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-auto" />
						</div>
						<div className="flex flex-wrap gap-2 relative z-10">
							{category.skills.map((name, index) => (
								<Badge
									key={index}
									variant="secondary"
									className={cn(
										"text-sm px-3 py-1.5 transition-all duration-300 cursor-default relative group/badge",
										"hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:border-primary",
										"hover:shadow-md hover:shadow-primary/20 hover:z-20",
										hoveredSkill === name && "scale-110 bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 z-20"
									)}
									onMouseEnter={() => setHoveredSkill(name)}
									onMouseLeave={() => setHoveredSkill(null)}
									style={{
										transitionDelay: mounted ? `${index * 20}ms` : "0ms",
									}}
								>
									<span className="relative z-10">{name}</span>
									{/* Glow effect on hover */}
									<span className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300 -z-10" />
								</Badge>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
