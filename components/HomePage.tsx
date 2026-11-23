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
import { categorizedServices } from "@/constants/services";
import { testimonials } from "@/constants/testimonials";
import { serviceIconMap } from "@/components/vectors/ServiceIcons";
import HomeGalleryTeaser from "@/components/HomeGalleryTeaser";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
	galleryItems: GalleryItem[];
};

export default function HomePage({ galleryItems }: Props) {
	const [mounted, setMounted] = useState(false);
	const [activeCategoryId, setActiveCategoryId] = useState(
		categorizedServices[0]?.id ?? "cooling",
	);

	useEffect(() => {
		setMounted(true);
	}, []);

	const activeCategory =
		categorizedServices.find((c) => c.id === activeCategoryId) ??
		categorizedServices[0];

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
						split &amp; window AC, geysers, washers, kitchen &amp; more across
						Faridabad.
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

			{/* What we fix — interactive category explorer */}
			<section className="w-full bg-background px-4 py-16 sm:px-6 md:py-20 lg:px-10">
				<div className="mx-auto w-full max-w-[1400px]">
					<div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-sm font-semibold uppercase tracking-widest text-primary">
								What we fix
							</p>
							<h2 className="font-display mt-1 text-3xl font-extrabold uppercase md:text-5xl">
								Pick a category
							</h2>
							<p className="mt-3 max-w-lg text-sm text-muted-foreground md:text-base">
								Tap a group, then book the exact appliance — split AC to
								microwave, all under one workshop.
							</p>
						</div>
						<Button asChild variant="outline" className="gap-2 self-start">
							<Link href="/services">
								Full services list
								<ArrowRight className="h-4 w-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-12">
						<div
							className={cn(
								"flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0 transition-all duration-500",
								mounted ? "opacity-100" : "opacity-0",
							)}
							role="tablist"
							aria-label="Service categories"
						>
							{categorizedServices.map((category) => {
								const Icon = serviceIconMap[category.iconId];
								const active = category.id === activeCategoryId;
								return (
									<button
										key={category.id}
										type="button"
										role="tab"
										aria-selected={active}
										onClick={() => setActiveCategoryId(category.id)}
										className={cn(
											"flex min-w-[148px] items-center gap-3 border-l-4 px-3 py-3 text-left transition-all duration-300 lg:min-w-0",
											active
												? "border-primary bg-primary/10 text-foreground"
												: "border-transparent text-muted-foreground hover:border-primary/40 hover:bg-muted/50 hover:text-foreground",
										)}
									>
										<span
											className={cn(
												"h-9 w-9 shrink-0 transition-colors",
												active ? "text-primary" : "text-muted-foreground",
											)}
										>
											<Icon />
										</span>
										<span>
											<span className="font-display block text-sm uppercase tracking-wide">
												{category.title}
											</span>
											<span className="text-[11px] text-muted-foreground">
												{category.items.length} items
											</span>
										</span>
									</button>
								);
							})}
						</div>

						<div
							key={activeCategory.id}
							className="animate-in fade-in-0 slide-in-from-bottom-2 duration-400"
						>
							<div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
								<div>
									<h3 className="font-display text-3xl font-extrabold uppercase md:text-4xl">
										{activeCategory.title}
									</h3>
									<p className="mt-1 max-w-xl text-sm text-muted-foreground">
										{activeCategory.blurb}
									</p>
								</div>
								<a
									href={whatsappLink(
										`Hi, I need help with ${activeCategory.title} in Faridabad.`,
									)}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
								>
									Book this category
									<ArrowRight className="h-3.5 w-3.5" />
								</a>
							</div>

							<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
								{activeCategory.items.map((item, i) => {
									const Icon = serviceIconMap[item.id];
									return (
										<a
											key={item.id}
											href={whatsappLink(
												`Hi, I need ${item.title} in Faridabad.`,
											)}
											target="_blank"
											rel="noopener noreferrer"
											className={cn(
												"group relative flex min-h-[140px] flex-col justify-between overflow-hidden bg-navy p-4 text-white transition-transform duration-300 hover:-translate-y-1 sm:min-h-[160px] sm:p-5",
												i === 0 && activeCategory.items.length > 1
													? "sm:col-span-2 sm:min-h-[180px]"
													: "",
											)}
										>
											<span className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-primary/20 transition-transform duration-500 group-hover:scale-125 group-hover:text-primary/35">
												<Icon />
											</span>
											<span className="relative h-10 w-10 text-primary sm:h-12 sm:w-12">
												<Icon />
											</span>
											<span className="relative mt-6">
												<span className="font-display block text-lg uppercase leading-tight tracking-wide sm:text-xl">
													{item.shortTitle}
												</span>
												<span className="mt-1 block text-xs text-white/55 line-clamp-2">
													{item.highlights.slice(0, 2).join(" · ")}
												</span>
											</span>
										</a>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			<HomeGalleryTeaser items={galleryItems} />

			{/* One number — service board of every item */}
			<section className="relative w-full overflow-hidden bg-navy py-16 text-white md:py-20">
				<div className="pointer-events-none absolute inset-0 circuit-grid opacity-25" />
				<div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
					<div className="mb-12 max-w-2xl">
						<p className="text-sm font-semibold uppercase tracking-widest text-primary">
							Built for every home
						</p>
						<h2 className="font-display mt-2 text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl">
							One number.
							<br />
							<span className="text-primary">Every appliance.</span>
						</h2>
						<a
							href={telLink()}
							className="font-display mt-6 inline-block text-2xl font-extrabold tracking-tight transition-colors hover:text-primary md:text-3xl"
						>
							{business.phone}
						</a>
					</div>

					<div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
						{categorizedServices.map((category, i) => (
							<div
								key={category.id}
								className={cn(
									"transition-all duration-500",
									mounted ? "opacity-100" : "opacity-0",
								)}
								style={{ transitionDelay: `${80 + i * 40}ms` }}
							>
								<div className="mb-4 flex items-baseline gap-3 border-b border-primary/40 pb-2">
									<span className="font-display text-xs text-primary">
										{String(i + 1).padStart(2, "0")}
									</span>
									<h3 className="font-display text-lg uppercase tracking-wide">
										{category.title}
									</h3>
								</div>
								<ul className="space-y-1">
									{category.items.map((item, itemIndex) => {
										const Icon = serviceIconMap[item.id];
										return (
											<li key={item.id}>
												<a
													href={whatsappLink(
														`Hi, I need ${item.title} in Faridabad.`,
													)}
													target="_blank"
													rel="noopener noreferrer"
													className="group flex items-center gap-3 py-2.5 text-white/75 transition-colors hover:text-primary"
													style={{
														transitionDelay: `${itemIndex * 20}ms`,
													}}
												>
													<span className="flex h-8 w-8 items-center justify-center bg-white/5 text-primary transition-colors group-hover:bg-primary/20">
														<span className="h-5 w-5">
															<Icon />
														</span>
													</span>
													<span className="font-display text-sm uppercase tracking-wide">
														{item.shortTitle}
													</span>
													<ArrowRight className="ml-auto h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						))}
					</div>

					<div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
						<Button asChild className="gap-2 bg-[#25D366] hover:bg-[#1ebe57]">
							<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
								WhatsApp to book
							</a>
						</Button>
						<Button
							asChild
							variant="outline"
							className="gap-2 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
						>
							<a href={telLink()}>
								<Phone className="h-4 w-4" />
								Call {business.phone}
							</a>
						</Button>
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
