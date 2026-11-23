"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { categorizedServices } from "@/constants/services";
import { business, telLink, whatsappLink } from "@/constants/business";
import { serviceIconMap } from "@/components/vectors/ServiceIcons";

export default function ServicesPage() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<section className="relative w-full overflow-hidden bg-navy text-white">
				<div className="pointer-events-none absolute inset-0 circuit-grid opacity-40" />
				<div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

				<div className="relative mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
					<p
						className={cn(
							"text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700",
							mounted ? "opacity-100" : "opacity-0",
						)}
					>
						Faridabad · Ballabgarh · same-day
					</p>
					<h1
						className={cn(
							"font-display mt-3 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl xl:text-7xl transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
					>
						Services that
						<br />
						<span className="text-primary">keep you cool</span>
					</h1>
					<p
						className={cn(
							"mt-5 max-w-lg text-base text-white/75 md:text-lg transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
						style={{ transitionDelay: "100ms" }}
					>
						Browse by category — AC, geysers, laundry, kitchen, refrigeration,
						electronics and electrical — clear pricing from {business.owner}.
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
								WhatsApp to book
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
								{business.phone}
							</a>
						</Button>
					</div>
				</div>
			</section>

			<section className="sticky top-0 z-30 w-full border-b border-border bg-card/95 backdrop-blur">
				<div className="mx-auto flex w-full max-w-[1400px] gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:flex-wrap lg:justify-center lg:gap-3 lg:overflow-visible lg:px-10">
					{categorizedServices.map((category, i) => {
						const Icon = serviceIconMap[category.iconId];
						return (
							<a
								key={category.id}
								href={`#${category.id}`}
								className={cn(
									"flex min-w-[110px] items-center gap-2 border border-border bg-background px-3 py-2 text-left transition-all duration-500 hover:border-primary/50 hover:text-primary",
									mounted ? "opacity-100" : "opacity-0",
								)}
								style={{ transitionDelay: `${40 + i * 25}ms` }}
							>
								<span className="h-8 w-8 shrink-0 text-primary">
									<Icon />
								</span>
								<span>
									<span className="font-display block text-xs uppercase tracking-wide">
										{category.title}
									</span>
									<span className="text-[10px] text-muted-foreground">
										{category.items.length} types
									</span>
								</span>
							</a>
						);
					})}
				</div>
			</section>

			<section className="w-full px-4 py-14 sm:px-6 md:py-16 lg:px-10">
				<div className="mx-auto flex w-full max-w-[1400px] flex-col gap-16">
					{categorizedServices.map((category, catIndex) => {
						const CatIcon = serviceIconMap[category.iconId];
						return (
							<div
								key={category.id}
								id={category.id}
								className="scroll-mt-28"
							>
								<div
									className={cn(
										"mb-6 flex flex-col gap-3 border-b border-border pb-5 sm:flex-row sm:items-end sm:justify-between transition-all duration-500",
										mounted ? "opacity-100" : "opacity-0",
									)}
									style={{ transitionDelay: `${80 + catIndex * 40}ms` }}
								>
									<div className="flex items-start gap-4">
										<div className="h-12 w-12 shrink-0 text-primary">
											<CatIcon />
										</div>
										<div>
											<p className="text-xs font-semibold uppercase tracking-widest text-primary">
												Category
											</p>
											<h2 className="font-display text-3xl font-extrabold uppercase md:text-4xl">
												{category.title}
											</h2>
											<p className="mt-1 max-w-xl text-sm text-muted-foreground">
												{category.blurb}
											</p>
										</div>
									</div>
									<Button asChild size="sm" variant="outline" className="gap-2 self-start">
										<a
											href={whatsappLink(
												`Hi ${business.owner}, I need help with ${category.title}. My area is Faridabad.`,
											)}
											target="_blank"
											rel="noopener noreferrer"
										>
											Book category
											<ArrowRight className="h-3.5 w-3.5" />
										</a>
									</Button>
								</div>

								<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
									{category.items.map((service, i) => {
										const Icon = serviceIconMap[service.id];
										return (
											<article
												id={service.id}
												key={service.id}
												className={cn(
													"flex scroll-mt-36 flex-col border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md",
													mounted ? "opacity-100" : "opacity-0",
												)}
												style={{
													transitionDelay: `${120 + catIndex * 30 + i * 40}ms`,
												}}
											>
												<div className="mb-4 h-14 w-14 text-primary">
													<Icon />
												</div>
												<h3 className="font-display text-2xl uppercase tracking-wide">
													{service.title}
												</h3>
												<p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
													{service.description}
												</p>
												<ul className="mt-4 flex flex-wrap gap-2">
													{service.highlights.map((h) => (
														<li
															key={h}
															className="bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80"
														>
															{h}
														</li>
													))}
												</ul>
												<Button
													asChild
													className="mt-6 w-full gap-2 sm:w-auto"
													size="sm"
												>
													<a
														href={whatsappLink(
															`Hi ${business.owner}, I need help with: ${service.title}. My area is Faridabad.`,
														)}
														target="_blank"
														rel="noopener noreferrer"
													>
														Book on WhatsApp
														<ArrowRight className="h-4 w-4" />
													</a>
												</Button>
											</article>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
