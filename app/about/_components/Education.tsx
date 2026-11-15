"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Landmark, GraduationCap, Calendar, Award, BookOpen, Sparkles, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/constants/education";
import { cn } from "@/lib/utils";

const Education = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<Card className="w-full md:w-1/2 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group/card bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800">
			<CardHeader className="border-b relative overflow-hidden">
				{/* Decorative background */}
				<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
				<CardTitle className="flex gap-x-2 items-center text-xl font-bold relative z-10">
					<div className="p-2 rounded-lg bg-primary/10 group-hover/card:bg-primary/20 transition-all duration-300 group-hover/card:scale-110 group-hover/card:rotate-6">
						<Landmark className="h-6 w-6 text-primary transition-transform duration-300" />
					</div>
					<span className="group-hover/card:text-primary transition-colors duration-300">Education</span>
					<TrendingUp className="h-5 w-5 text-primary opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ml-auto" />
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col w-full gap-6 py-6">
				{education.map((ed, index) => (
					<div
						key={index}
						className={cn(
							"group relative flex flex-col gap-4 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300",
							mounted
								? "opacity-100 translate-x-0"
								: "opacity-0 translate-x-4"
						)}
						style={{
							transitionDelay: mounted ? `${index * 100}ms` : "0ms",
						}}
					>
						{/* Timeline connector */}
						{index < education.length - 1 && (
							<div className="absolute left-8 top-16 w-0.5 h-full bg-border group-hover:bg-primary/30 transition-colors duration-300" />
						)}

						<div className="flex gap-4">
							{/* Logo */}
							<div className="relative flex-shrink-0">
								<div className="absolute inset-0 bg-primary/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
								<div className="absolute -inset-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
								<Image
									src={ed.logo}
									alt={ed.institute}
									className="h-16 w-16 rounded-full bg-primary-foreground object-contain p-2 border-2 border-border group-hover:border-primary/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10 shadow-md group-hover:shadow-primary/20"
									width={64}
									height={64}
								/>
								<GraduationCap className="absolute -bottom-1 -right-1 h-5 w-5 text-primary bg-background rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-md" />
							</div>

							{/* Content */}
							<div className="flex flex-col w-full gap-2">
								<div className="flex flex-col gap-1">
									<div className="flex items-center gap-2">
										<span className="font-bold text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-primary transition-colors duration-300">
											{ed.institute}
										</span>
										<Sparkles className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									</div>
									<div className="flex items-center gap-2">
										<GraduationCap className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
										<span className="font-medium text-base text-zinc-700 dark:text-zinc-300 group-hover:text-foreground transition-colors duration-300">
											{ed.degree}
										</span>
									</div>
								</div>

								<div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
									<div className="flex items-center gap-1.5 group-hover:text-foreground transition-colors duration-300">
										<BookOpen className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
										<span>{ed.major}</span>
									</div>
									<div className="flex items-center gap-1.5 group-hover:text-foreground transition-colors duration-300">
										<Calendar className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
										<span>{ed.duration}</span>
									</div>
								</div>

								<div className="flex gap-2 pt-1">
									<Badge
										variant="secondary"
										className="text-xs group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-105 transition-all duration-300 group-hover:shadow-md"
									>
										<Award className="h-3 w-3 mr-1 group-hover:rotate-12 transition-transform duration-300" />
										{ed.grade}
									</Badge>
								</div>
							</div>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	);
};

export default Education;
