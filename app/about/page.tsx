"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { business, whatsappLink } from "@/constants/business";
import { serviceIconMap } from "@/components/vectors/ServiceIcons";
import { services } from "@/constants/services";

export default function AboutPage() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const stats = [
		{ icon: BadgeCheck, label: "Years on the job", value: `${business.yearsExperience}+` },
		{ icon: Users, label: "Jobs completed", value: business.jobsCompleted },
		{ icon: Clock, label: "Emergency cover", value: "24/7" },
		{ icon: MapPin, label: "Service area", value: "Faridabad" },
	];

	return (
		<div className="relative w-full overflow-hidden">
			<section className="relative w-full overflow-hidden bg-navy text-white">
				<div className="pointer-events-none absolute inset-0 circuit-grid opacity-40" />
				<div className="relative mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
					<p
						className={cn(
							"text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700",
							mounted ? "opacity-100" : "opacity-0",
						)}
					>
						About the workshop
					</p>
					<h1
						className={cn(
							"font-display mt-2 max-w-3xl text-4xl font-extrabold uppercase leading-none md:text-6xl transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
					>
						{business.owner}
					</h1>
					<p className="mt-2 font-display text-xl uppercase tracking-wide text-primary">
						{business.shortName}
					</p>
					<p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
						For over a decade, {business.owner} has kept Faridabad homes and
						shops cool, powered, and running — AC gas charging in peak summer,
						midnight electrical faults, geyser installs before winter, and
						reliable AMC so breakdowns don&apos;t ruin your day.
					</p>
					<p className="mt-3 max-w-2xl text-base leading-relaxed text-white/75">
						Based at {business.address}, we cover Ballabgarh and every major
						sector. Honest diagnosis, transparent pricing, technicians who
						respect your home.
					</p>
					<Button
						asChild
						size="lg"
						className="mt-8 gap-2 bg-[#25D366] hover:bg-[#1ebe57]"
					>
						<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							Talk on WhatsApp
						</a>
					</Button>
				</div>
			</section>

			<section className="w-full border-y border-border bg-muted/40">
				<div className="mx-auto grid w-full max-w-[1400px] gap-6 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-10">
					{stats.map((s) => (
						<div key={s.label}>
							<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
								<s.icon className="h-5 w-5" />
							</div>
							<p className="font-display text-3xl font-extrabold uppercase text-navy dark:text-foreground">
								{s.value}
							</p>
							<p className="text-sm text-muted-foreground">{s.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="w-full px-4 py-16 sm:px-6 md:py-20 lg:px-10">
				<div className="mx-auto grid w-full max-w-[1400px] items-start gap-12 lg:grid-cols-2">
					<div>
						<h2 className="font-display text-3xl font-extrabold uppercase md:text-5xl">
							Why choose us
						</h2>
						<ul className="mt-8 space-y-5 text-muted-foreground">
							<li className="border-l-4 border-primary pl-4">
								<strong className="block text-foreground">Same-day response</strong>
								Most AC and electrical calls in Faridabad get a visit the same day.
							</li>
							<li className="border-l-4 border-primary pl-4">
								<strong className="block text-foreground">All major appliances</strong>
								AC, geyser, washing machine, fridge, deep freezer, RO — one trusted number.
							</li>
							<li className="border-l-4 border-primary pl-4">
								<strong className="block text-foreground">AMC that actually helps</strong>
								Scheduled maintenance, priority booking, fewer summer surprises.
							</li>
						</ul>
					</div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
						{services.slice(0, 4).map((service) => {
							const Icon = serviceIconMap[service.id];
							return (
								<div
									key={service.id}
									className="flex flex-col items-center gap-3 bg-muted/50 px-3 py-6 text-center"
								>
									<div className="h-14 w-14 text-primary">
										<Icon />
									</div>
									<span className="font-display text-sm uppercase tracking-wide">
										{service.title}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</div>
	);
}
