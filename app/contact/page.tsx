"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
	Phone,
	Mail,
	Instagram,
	MapPin,
	Clock,
	ArrowUpRight,
	MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { business, telLink, whatsappLink } from "@/constants/business";
import ContactIllustration from "@/components/vectors/ContactIllustration";

export default function Contact() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const channels = [
		{
			label: "Call now",
			value: business.phone,
			href: telLink(),
			icon: Phone,
			external: false,
			accent: "border-primary/40 hover:border-primary",
		},
		{
			label: "Email",
			value: business.email,
			href: `mailto:${business.email}`,
			icon: Mail,
			external: false,
			accent: "border-border hover:border-primary/50",
		},
		{
			label: "Instagram",
			value: business.instagramHandle,
			href: business.instagram,
			icon: Instagram,
			external: true,
			accent: "border-border hover:border-primary/50",
		},
	];

	return (
		<div className="relative w-full overflow-hidden">
			{/* Hero */}
			<section className="relative w-full overflow-hidden bg-navy text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.1]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(249,115,22,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.4) 1px, transparent 1px)",
						backgroundSize: "44px 44px",
					}}
				/>
				<div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

				<div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-10 lg:py-20">
					<div>
						<p
							className={cn(
								"text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700",
								mounted ? "opacity-100" : "opacity-0",
							)}
						>
							24/7 · Faridabad &amp; Ballabgarh
						</p>
						<h1
							className={cn(
								"font-display mt-3 text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl xl:text-7xl transition-all duration-700",
								mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
							)}
						>
							Book a visit
							<br />
							<span className="text-primary">in one tap</span>
						</h1>
						<p
							className={cn(
								"mt-5 max-w-lg text-base text-white/75 md:text-lg transition-all duration-700",
								mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
							)}
							style={{ transitionDelay: "100ms" }}
						>
							Message your appliance, area, and preferred time.{" "}
							{business.owner} replies on WhatsApp and schedules — often the
							same day.
						</p>
						<div
							className={cn(
								"mt-8 flex flex-wrap gap-3 transition-all duration-700",
								mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
							)}
							style={{ transitionDelay: "180ms" }}
						>
							<Button
								asChild
								size="lg"
								className="h-12 gap-2 bg-[#25D366] px-6 text-base hover:bg-[#1ebe57]"
							>
								<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
									<MessageCircle className="h-5 w-5" />
									WhatsApp {business.phone}
								</a>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="h-12 gap-2 border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
							>
								<a href={telLink()}>
									<Phone className="h-5 w-5" />
									Call now
								</a>
							</Button>
						</div>
					</div>

					<div
						className={cn(
							"mx-auto w-full max-w-md text-white/85 transition-all duration-1000 lg:max-w-lg",
							mounted ? "opacity-100" : "opacity-0",
						)}
					>
						<ContactIllustration className="h-auto w-full" />
					</div>
				</div>
			</section>

			{/* Quick channels */}
			<section className="w-full border-b border-border bg-background">
				<div className="mx-auto grid w-full max-w-[1400px] md:grid-cols-3">
					{channels.map((item, i) => {
						const Icon = item.icon;
						const Comp = item.external ? Link : "a";
						return (
							<Comp
								key={item.label}
								href={item.href}
								{...(item.external
									? { target: "_blank", rel: "noopener noreferrer" }
									: {})}
								className={cn(
									"group flex items-start justify-between gap-4 border-b border-border px-5 py-8 transition-all duration-300 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-8 lg:px-10",
									"hover:bg-muted/50",
									mounted ? "opacity-100" : "opacity-0",
								)}
								style={{ transitionDelay: `${120 + i * 60}ms` }}
							>
								<div className="flex gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
										<Icon className="h-5 w-5" />
									</div>
									<div>
										<p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
											{item.label}
										</p>
										<p className="mt-1 font-display text-xl uppercase tracking-wide text-navy dark:text-foreground md:text-2xl">
											{item.value}
										</p>
									</div>
								</div>
								<ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</Comp>
						);
					})}
				</div>
			</section>

			{/* Location + hours */}
			<section className="w-full px-4 py-14 sm:px-6 md:py-18 lg:px-10 lg:py-20">
				<div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-2">
					<div
						className={cn(
							"border-l-4 border-primary bg-muted/40 p-6 md:p-8 transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
						)}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
							<MapPin className="h-5 w-5" />
						</div>
						<h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
							Visit the shop
						</h2>
						<p className="mt-3 text-base font-medium text-foreground md:text-lg">
							{business.address}
						</p>
						<p className="mt-1 text-muted-foreground">{business.serviceArea}</p>
						<a
							href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}`}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
						>
							Open in Google Maps
							<ArrowUpRight className="h-4 w-4" />
						</a>
					</div>

					<div
						className={cn(
							"border-l-4 border-primary bg-navy p-6 text-white md:p-8 transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
						)}
						style={{ transitionDelay: "100ms" }}
					>
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-primary">
							<Clock className="h-5 w-5" />
						</div>
						<h2 className="font-display text-2xl font-extrabold uppercase md:text-3xl">
							Always on call
						</h2>
						<p className="mt-3 text-base text-white/80 md:text-lg">
							{business.hours}
						</p>
						<p className="mt-2 text-sm text-white/60">
							Peak summer AC rush, night electrical faults, same-day appliance
							repairs — WhatsApp first for the fastest response.
						</p>
						<Button
							asChild
							size="lg"
							className="mt-6 gap-2 bg-[#25D366] hover:bg-[#1ebe57]"
						>
							<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
								<MessageCircle className="h-5 w-5" />
								Start WhatsApp chat
							</a>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
