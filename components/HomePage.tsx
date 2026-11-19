"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Phone,
	Clock,
	ShieldCheck,
	Wallet,
	ArrowRight,
	Star,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { business, telLink, whatsappLink } from "@/constants/business";
import { services } from "@/constants/services";
import { testimonials } from "@/constants/testimonials";
import { serviceIconMap } from "@/components/vectors/ServiceIcons";
import HomeGalleryTeaser from "@/components/HomeGalleryTeaser";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
	galleryItems: GalleryItem[];
};

export default function HomePage({ galleryItems }: Props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const featured = services.slice(0, 4);

	return (
		<div className="relative w-full overflow-hidden">
			<section className="relative w-full overflow-hidden bg-navy text-white">
				<div className="pointer-events-none absolute inset-0 circuit-grid opacity-40" />
				<div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
				<div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

				<div className="relative mx-auto flex min-h-[78vh] w-full max-w-[1400px] flex-col justify-center px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
					<p
						className={cn(
							"mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary transition-all duration-700 md:text-base",
							mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
						)}
					>
						Electrical · Aircon · Faridabad
					</p>
					<h1
						className={cn(
							"font-display max-w-4xl text-5xl font-extrabold uppercase leading-[0.92] tracking-tight transition-all duration-700 md:text-6xl xl:text-7xl",
							mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
						)}
						style={{ transitionDelay: "80ms" }}
					>
						<span className="text-primary">Bhardwaj</span>
						<br />
						Aircon &amp; Electrical
					</h1>
					<p
						className={cn(
							"mt-5 max-w-xl text-base text-white/80 transition-all duration-700 md:text-lg",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
						style={{ transitionDelay: "160ms" }}
					>
						Workshop portfolio &amp; same-day service by {business.owner} —
						AC, wiring, geyser, washing machine and more across Faridabad.
					</p>
					<div
						className={cn(
							"mt-8 flex flex-wrap gap-3 transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
						style={{ transitionDelay: "240ms" }}
					>
						<Button
							asChild
							size="lg"
							className="gap-2 bg-[#25D366] text-base hover:bg-[#1ebe57]"
						>
							<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
								WhatsApp to Book
							</a>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="gap-2 border-white/35 bg-transparent text-base text-white hover:bg-white/10 hover:text-white"
						>
							<a href={telLink()}>
								<Phone className="h-4 w-4" />
								{business.phone}
							</a>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="gap-2 border-primary/50 bg-primary/10 text-base text-primary hover:bg-primary/20 hover:text-primary"
						>
							<Link href="/gallery">
								View gallery
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className="w-full border-b border-border bg-card">
				<div className="mx-auto grid w-full max-w-[1400px] gap-0 md:grid-cols-3">
					{[
						{
							icon: Clock,
							title: "24/7 Emergency",
							text: "Night calls & peak-summer rush — we show up.",
						},
						{
							icon: ShieldCheck,
							title: `${business.yearsExperience}+ Years Experience`,
							text: `${business.jobsCompleted} homes & shops across Faridabad.`,
						},
						{
							icon: Wallet,
							title: "Affordable Pricing",
							text: "Clear quotes, genuine parts, AMC that saves money.",
						},
					].map((item, i) => (
						<div
							key={item.title}
							className={cn(
								"flex gap-4 border-border px-6 py-8 transition-all duration-700 md:border-r md:last:border-r-0 md:px-10",
								mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
							)}
							style={{ transitionDelay: `${350 + i * 80}ms` }}
						>
							<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
								<item.icon className="h-5 w-5" />
							</div>
							<div>
								<h2 className="font-display text-xl uppercase tracking-wide">
									{item.title}
								</h2>
								<p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="w-full bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10">
				<div className="mx-auto w-full max-w-[1400px]">
					<div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-widest text-primary">
								What we fix
							</p>
							<h2 className="font-display mt-1 text-3xl font-extrabold uppercase md:text-5xl">
								Complete comfort &amp; power
							</h2>
						</div>
						<Button asChild variant="outline" className="gap-2 self-start">
							<Link href="/services">
								All services
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>
					<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
						{featured.map((service, i) => {
							const Icon = serviceIconMap[service.id];
							return (
								<div
									key={service.id}
									className={cn(
										"group relative border-b-4 border-primary bg-muted/40 p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-muted/70",
										mounted ? "opacity-100" : "opacity-0",
									)}
									style={{ transitionDelay: `${180 + i * 70}ms` }}
								>
									<div className="mb-4 h-14 w-14 text-primary transition-transform duration-500 group-hover:scale-110">
										<Icon />
									</div>
									<h3 className="font-display text-2xl uppercase tracking-wide">
										{service.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-muted-foreground">
										{service.description}
									</p>
									<a
										href={whatsappLink(
											`Hi, I need ${service.title} in Faridabad. Please share availability.`,
										)}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
									>
										Book on WhatsApp
										<ArrowRight className="h-3.5 w-3.5" />
									</a>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<HomeGalleryTeaser items={galleryItems} />

			<section className="w-full bg-navy py-16 text-white md:py-20">
				<div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
					<p className="text-sm font-semibold uppercase tracking-widest text-primary">
						Built for every home
					</p>
					<h2 className="font-display mt-1 text-3xl font-extrabold uppercase md:text-5xl">
						One number. Every appliance.
					</h2>
					<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
						{services.map((service, i) => {
							const Icon = serviceIconMap[service.id];
							return (
								<div
									key={service.id}
									className={cn(
										"flex flex-col items-center gap-3 border border-white/10 bg-white/5 px-3 py-5 text-center transition-all duration-500 hover:border-primary/50 hover:bg-white/10",
										mounted ? "opacity-100" : "opacity-0",
									)}
									style={{ transitionDelay: `${100 + i * 40}ms` }}
								>
									<div className="h-12 w-12 text-primary">
										<Icon />
									</div>
									<span className="font-display text-xs uppercase leading-tight tracking-wide text-white/85">
										{service.title.split(" ")[0]}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			<section className="w-full px-4 py-16 sm:px-6 md:py-20 lg:px-10">
				<div className="mx-auto w-full max-w-[1400px]">
					<p className="text-sm font-semibold uppercase tracking-widest text-primary">
						Happy customers
					</p>
					<h2 className="font-display mt-1 text-3xl font-extrabold uppercase md:text-5xl">
						Trusted across Faridabad
					</h2>
					<div className="mt-10 grid gap-5 md:grid-cols-2">
						{testimonials.map((t) => (
							<blockquote
								key={t.name}
								className="border-l-4 border-primary bg-muted/45 p-6"
							>
								<div className="mb-2 flex gap-0.5 text-primary">
									{Array.from({ length: 5 }).map((_, i) => (
										<Star key={i} className="h-4 w-4 fill-primary" />
									))}
								</div>
								<p className="text-sm leading-relaxed text-foreground/90 md:text-base">
									&ldquo;{t.quote}&rdquo;
								</p>
								<footer className="mt-4 text-sm font-semibold">
									{t.name}
									<span className="font-normal text-muted-foreground">
										{" "}
										· {t.area} · {t.service}
									</span>
								</footer>
							</blockquote>
						))}
					</div>
				</div>
			</section>

			<section className="w-full bg-gradient-to-r from-navy via-[hsl(220_24%_16%)] to-navy px-4 py-14 text-center text-white sm:px-6 md:py-16 lg:px-10">
				<h2 className="font-display text-3xl font-extrabold uppercase md:text-5xl">
					Book your service today
				</h2>
				<p className="mx-auto mt-3 max-w-lg text-white/75">
					WhatsApp your appliance &amp; area — we reply fast and schedule a visit.
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<Button
						asChild
						size="lg"
						className="gap-2 bg-[#25D366] hover:bg-[#1ebe57]"
					>
						<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							WhatsApp {business.phone}
						</a>
					</Button>
					<Button
						asChild
						size="lg"
						variant="outline"
						className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
					>
						<Link href="/contact">Contact</Link>
					</Button>
				</div>
			</section>
		</div>
	);
}
