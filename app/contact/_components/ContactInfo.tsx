"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Instagram, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactInfo = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const socialLinks = [
		{ icon: Github, href: "https://github.com", label: "Follow on Github", color: "hover:text-gray-900 dark:hover:text-gray-100" },
		{ icon: Linkedin, href: "https://www.linkedin.com", label: "Follow on Linkedin", color: "hover:text-blue-600" },
		{ icon: Twitter, href: "https://x.com", label: "Follow on Twitter", color: "hover:text-blue-400" },
		{ icon: Instagram, href: "https://www.instagram.com", label: "Follow on Instagram", color: "hover:text-pink-600" },
	];

	return (
		<Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800">
			<CardContent className="p-6 md:p-8">
				<div className="flex flex-col gap-y-8 h-full">
					{/* Introduction */}
					<div className="flex flex-col gap-4">
						<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
							Let&apos;s Connect
						</h2>
						<p
							className={cn(
								"text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed transition-all duration-700",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							)}
						>
							Thank you for your interest in getting in touch with me. I welcome your
							feedback, questions, and suggestions. If you have a specific question or
							comment, please feel free to email me directly or use the contact form.
						</p>
						<p
							className={cn(
								"text-sm text-muted-foreground transition-all duration-700",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							)}
							style={{ transitionDelay: "100ms" }}
						>
							I make an effort to respond to all messages within 24 hours, although it
							may take me longer during busy periods.
						</p>
					</div>

					{/* Social Links */}
					<div className="flex flex-col gap-4">
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
							Connect on Social Media
						</h3>
						<div
							className={cn(
								"grid grid-cols-1 gap-3 transition-all duration-700",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							)}
							style={{ transitionDelay: "200ms" }}
						>
							{socialLinks.map((social, index) => {
								const Icon = social.icon;
								return (
									<Link
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group"
										style={{
											transitionDelay: mounted ? `${300 + index * 50}ms` : "0ms",
										}}
									>
										<Button
											variant={"ghost"}
											size={"lg"}
											className={cn(
												"w-full justify-start gap-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:bg-primary/5",
												social.color
											)}
										>
											<Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
											<span className="font-medium">{social.label}</span>
											<ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										</Button>
									</Link>
								);
							})}
						</div>
					</div>

					<Separator className="my-2" />

					{/* Direct Email */}
					<div className="flex flex-col gap-3">
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
							Direct Email
						</h3>
						<Link
							href={`mailto:hello@naveenbhardwaj.dev`}
							className={cn(
								"group transition-all duration-700",
								mounted
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							)}
							style={{ transitionDelay: "500ms" }}
						>
							<Button
								variant={"secondary"}
								size={"lg"}
								className="w-full gap-3 group-hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:bg-primary/10 group-hover:border-primary/30"
							>
								<Mail className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" />
								<span className="font-medium">hello@naveenbhardwaj.dev</span>
								<ExternalLink className="h-4 w-4 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
							</Button>
						</Link>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ContactInfo;
