"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { MenuIcon, Phone } from "lucide-react";
import { navItems } from "@/constants/navItems";
import { business, telLink, whatsappLink } from "@/constants/business";
import { cn } from "@/lib/utils";

const Navbar = () => {
	const pathname = usePathname();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className={cn(
				"sticky top-0 z-50 w-full border-b transition-all duration-300",
				scrolled
					? "border-border/70 bg-background/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-border/50 dark:bg-background/85 dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
					: "border-white/5 bg-navy text-white dark:border-white/10",
			)}
		>
			<div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
				<Link href="/" className="relative z-10 min-w-0 shrink">
					<span
						className={cn(
							"font-display text-xl font-extrabold uppercase tracking-wide md:text-2xl",
							scrolled ? "text-foreground" : "text-white",
						)}
					>
						<span className="text-primary">Bhardwaj</span> Aircon
					</span>
					<span
						className={cn(
							"mt-0.5 block truncate text-[11px] font-medium sm:text-xs",
							scrolled ? "text-muted-foreground" : "text-white/65",
						)}
					>
						{business.tagline}
					</span>
				</Link>

				<div className="hidden items-center gap-1 lg:flex">
					{navItems.map((item) => {
						const Icon = item.icon;
						const isActive = pathname === item.url;
						return (
							<Link key={item.url} href={item.url}>
								<Button
									size="sm"
									variant={isActive ? "default" : "ghost"}
									className={cn(
										"gap-2 font-medium",
										isActive
											? "bg-primary text-primary-foreground shadow-sm"
											: scrolled
												? "hover:bg-muted"
												: "text-white hover:bg-white/10 hover:text-white",
									)}
								>
									<Icon className="h-4 w-4" />
									{item.label}
								</Button>
							</Link>
						);
					})}
				</div>

				<div className="hidden items-center gap-2 md:flex">
					<Button
						asChild
						size="sm"
						variant={scrolled ? "secondary" : "outline"}
						className={cn(
							"gap-2",
							!scrolled &&
								"border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
						)}
					>
						<a href={telLink()}>
							<Phone className="h-4 w-4" />
							Call
						</a>
					</Button>
					<Button asChild size="sm" className="gap-2 bg-[#25D366] hover:bg-[#1ebe57]">
						<a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
							WhatsApp
						</a>
					</Button>
				</div>

				<Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className={cn(
								"h-10 w-10 shrink-0 lg:hidden",
								!scrolled && "text-white hover:bg-white/10 hover:text-white",
							)}
							aria-label="Open menu"
						>
							<MenuIcon className="h-6 w-6" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader>
							<SheetTitle className="font-display text-left text-2xl uppercase">
								{business.shortName}
							</SheetTitle>
						</SheetHeader>
						<nav className="flex flex-col gap-1 pt-6">
							{navItems.map((item) => {
								const Icon = item.icon;
								const isActive = pathname === item.url;
								return (
									<Link
										key={item.url}
										href={item.url}
										onClick={() => setIsMenuOpen(false)}
									>
										<Button
											size="lg"
											variant={isActive ? "default" : "ghost"}
											className={cn(
												"w-full justify-start gap-3 font-medium",
												isActive
													? "bg-primary text-primary-foreground"
													: "hover:bg-muted",
											)}
										>
											<Icon className="h-5 w-5" />
											{item.label}
										</Button>
									</Link>
								);
							})}
							<div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
								<Button asChild size="lg" variant="secondary" className="gap-2">
									<a href={telLink()}>
										<Phone className="h-5 w-5" />
										Call {business.phone}
									</a>
								</Button>
								<Button
									asChild
									size="lg"
									className="gap-2 bg-[#25D366] hover:bg-[#1ebe57]"
								>
									<a
										href={whatsappLink()}
										target="_blank"
										rel="noopener noreferrer"
									>
										WhatsApp Now
									</a>
								</Button>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
