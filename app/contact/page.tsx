"use client";

import { useEffect, useState } from "react";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative flex flex-col px-5 md:px-20 py-10 overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
			<div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: "0.5s" }} />

			{/* Header Section */}
			<div className="mb-12">
				<h1
					className={cn(
						"text-4xl md:text-5xl lg:text-6xl uppercase font-bold pt-2 pb-3 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-100 bg-clip-text text-transparent transition-all duration-700 flex items-center gap-3",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
				>
					<MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
					Get in Touch
				</h1>
				<p
					className={cn(
						"text-lg text-muted-foreground max-w-3xl mt-3 transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					)}
					style={{ transitionDelay: "200ms" }}
				>
					Have a project in mind or want to collaborate? I&apos;d love to hear from you.
					Send me a message and I&apos;ll respond as soon as possible.
				</p>
			</div>

			{/* Main Content - Side by side on large screens */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Contact Info Section */}
				<div
					className={cn(
						"transition-all duration-700",
						mounted
							? "opacity-100 translate-x-0"
							: "opacity-0 -translate-x-4"
					)}
					style={{ transitionDelay: "300ms" }}
				>
					<ContactInfo />
				</div>

				{/* Contact Form Section */}
				<div
					className={cn(
						"transition-all duration-700",
						mounted
							? "opacity-100 translate-x-0"
							: "opacity-0 translate-x-4"
					)}
					style={{ transitionDelay: "400ms" }}
				>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
