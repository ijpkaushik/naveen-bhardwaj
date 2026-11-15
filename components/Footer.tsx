"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
	MonitorSmartphone,
	Moon,
	Sun,
	Instagram,
	Phone,
	MapPin,
	Mail,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { business, telLink, whatsappLink } from "@/constants/business";

export function Footer() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = mounted ? theme : "system";

	return (
		<footer className="relative w-full overflow-hidden bg-navy text-white">
			<div className="mx-auto grid w-full max-w-[1400px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 md:py-14 lg:px-10">
				<div>
					<p className="font-display text-2xl uppercase tracking-wide md:text-3xl">
						<span className="text-primary">Bhardwaj</span> Aircon
					</p>
					<p className="mt-2 max-w-sm text-sm text-white/70">{business.tagline}</p>
					<p className="mt-5 text-sm text-white/80">
						© {new Date().getFullYear()} {business.owner}. All rights reserved.
					</p>
				</div>

				<div className="space-y-3 text-sm">
					<a
						href={telLink()}
						className="flex items-start gap-2 text-white/90 transition-colors hover:text-primary"
					>
						<Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
						{business.phone}
					</a>
					<a
						href={`mailto:${business.email}`}
						className="flex items-start gap-2 text-white/90 transition-colors hover:text-primary"
					>
						<Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
						{business.email}
					</a>
					<p className="flex items-start gap-2 text-white/90">
						<MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
						<span>
							{business.address}
							<br />
							<span className="text-white/60">{business.serviceArea}</span>
						</span>
					</p>
				</div>

				<div className="flex flex-col items-start gap-4 md:items-end">
					<div className="flex items-center gap-2">
						<Button asChild size="sm" className="bg-[#25D366] hover:bg-[#1ebe57]">
							<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
								WhatsApp
							</a>
						</Button>
						<Link
							href={business.instagram}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<Button
								size="icon"
								variant="outline"
								className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
							>
								<Instagram className="h-4 w-4" />
							</Button>
						</Link>
					</div>

					<div className="flex items-center gap-1 rounded-xl border border-white/15 bg-white/5 p-1">
						{(
							[
								["light", Sun, "Light theme"],
								["dark", Moon, "Dark theme"],
								["system", MonitorSmartphone, "System theme"],
							] as const
						).map(([value, Icon, label]) => (
							<Button
								key={value}
								size="icon"
								variant={currentTheme === value ? "default" : "ghost"}
								onClick={() => setTheme(value)}
								className={cn(
									"h-8 w-8 text-white hover:bg-white/10 hover:text-white",
									currentTheme === value && "bg-primary text-primary-foreground",
								)}
								aria-label={label}
							>
								<Icon className="h-3.5 w-3.5" />
							</Button>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
