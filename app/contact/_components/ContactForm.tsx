"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	subject?: string;
	message?: string;
}

const ContactForm = () => {
	const [mounted, setMounted] = useState(false);
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	useEffect(() => {
		setMounted(true);
	}, []);

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!validateEmail(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear error when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Create mailto link as fallback (you can replace this with an API call)
			const mailtoLink = `mailto:hello@naveenbhardwaj.dev?subject=${encodeURIComponent(
				formData.subject
			)}&body=${encodeURIComponent(
				`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
			)}`;
			
			// Simulate API call (replace with actual API endpoint)
			await new Promise((resolve) => setTimeout(resolve, 1500));
			
			// Open mailto as fallback
			window.location.href = mailtoLink;
			
			setSubmitStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "" });
			
			// Reset success message after 5 seconds
			setTimeout(() => {
				setSubmitStatus("idle");
			}, 5000);
		} catch {
			setSubmitStatus("error");
			setTimeout(() => {
				setSubmitStatus("idle");
			}, 5000);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-800">
			<CardHeader className="border-b pb-4">
				<CardTitle
					className={cn(
						"text-2xl font-bold transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
				>
					Send me a Message
				</CardTitle>
				<CardDescription
					className={cn(
						"transition-all duration-700",
						mounted
							? "opacity-100 translate-y-0"
							: "opacity-0 -translate-y-4"
					)}
					style={{ transitionDelay: "100ms" }}
				>
					Fill out the form below and I&apos;ll get back to you as soon as possible.
				</CardDescription>
			</CardHeader>
			<CardContent className="pt-6">
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Field */}
					<div
						className={cn(
							"space-y-2 transition-all duration-700",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: "200ms" }}
					>
						<Label htmlFor="name" className="text-sm font-medium">
							Name <span className="text-destructive">*</span>
						</Label>
						<Input
							id="name"
							name="name"
							type="text"
							placeholder="Your name"
							value={formData.name}
							onChange={handleChange}
							className={cn(
								"transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary",
								errors.name && "border-destructive focus:ring-destructive"
							)}
						/>
						{errors.name && (
							<p className="text-sm text-destructive flex items-center gap-1">
								<AlertCircle className="h-3 w-3" />
								{errors.name}
							</p>
						)}
					</div>

					{/* Email Field */}
					<div
						className={cn(
							"space-y-2 transition-all duration-700",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: "300ms" }}
					>
						<Label htmlFor="email" className="text-sm font-medium">
							Email <span className="text-destructive">*</span>
						</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="your.email@example.com"
							value={formData.email}
							onChange={handleChange}
							className={cn(
								"transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary",
								errors.email && "border-destructive focus:ring-destructive"
							)}
						/>
						{errors.email && (
							<p className="text-sm text-destructive flex items-center gap-1">
								<AlertCircle className="h-3 w-3" />
								{errors.email}
							</p>
						)}
					</div>

					{/* Subject Field */}
					<div
						className={cn(
							"space-y-2 transition-all duration-700",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: "400ms" }}
					>
						<Label htmlFor="subject" className="text-sm font-medium">
							Subject <span className="text-destructive">*</span>
						</Label>
						<Input
							id="subject"
							name="subject"
							type="text"
							placeholder="What's this about?"
							value={formData.subject}
							onChange={handleChange}
							className={cn(
								"transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary",
								errors.subject && "border-destructive focus:ring-destructive"
							)}
						/>
						{errors.subject && (
							<p className="text-sm text-destructive flex items-center gap-1">
								<AlertCircle className="h-3 w-3" />
								{errors.subject}
							</p>
						)}
					</div>

					{/* Message Field */}
					<div
						className={cn(
							"space-y-2 transition-all duration-700",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: "500ms" }}
					>
						<Label htmlFor="message" className="text-sm font-medium">
							Message <span className="text-destructive">*</span>
						</Label>
						<Textarea
							id="message"
							name="message"
							placeholder="Tell me about your project or question..."
							value={formData.message}
							onChange={handleChange}
							rows={6}
							className={cn(
								"transition-all duration-200 focus:ring-2 focus:ring-primary focus:border-primary",
								errors.message && "border-destructive focus:ring-destructive"
							)}
						/>
						{errors.message && (
							<p className="text-sm text-destructive flex items-center gap-1">
								<AlertCircle className="h-3 w-3" />
								{errors.message}
							</p>
						)}
					</div>

					{/* Submit Button */}
					<div
						className={cn(
							"transition-all duration-700",
							mounted
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						)}
						style={{ transitionDelay: "600ms" }}
					>
						<Button
							type="submit"
							size="lg"
							disabled={isSubmitting}
							className="w-full gap-2 group hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
						>
							{isSubmitting ? (
								<>
									<Loader2 className="h-5 w-5 animate-spin" />
									Sending...
								</>
							) : submitStatus === "success" ? (
								<>
									<CheckCircle2 className="h-5 w-5" />
									Message Sent!
								</>
							) : (
								<>
									<Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
									Send Message
								</>
							)}
						</Button>

						{submitStatus === "error" && (
							<p className="mt-3 text-sm text-destructive flex items-center justify-center gap-1">
								<AlertCircle className="h-4 w-4" />
								Something went wrong. Please try again.
							</p>
						)}
					</div>
				</form>
			</CardContent>
		</Card>
	);
};

export default ContactForm;

