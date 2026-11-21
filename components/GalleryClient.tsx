"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Film, ImageIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/lib/gallery";
import { business } from "@/constants/business";

type Props = {
	items: GalleryItem[];
};

export default function GalleryClient({ items }: Props) {
	const [mounted, setMounted] = useState(false);
	const [active, setActive] = useState<GalleryItem | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div className="relative w-full overflow-hidden">
			<section className="relative w-full overflow-hidden bg-navy text-white">
				<div
					className="pointer-events-none absolute inset-0 opacity-[0.12]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(245,158,11,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.35) 1px, transparent 1px)",
						backgroundSize: "44px 44px",
					}}
				/>
				<div className="relative mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10 lg:py-20">
					<p
						className={cn(
							"text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-700",
							mounted ? "opacity-100" : "opacity-0",
						)}
					>
						Work portfolio · Faridabad
					</p>
					<h1
						className={cn(
							"font-display mt-3 max-w-3xl text-4xl font-extrabold uppercase leading-[0.95] md:text-6xl xl:text-7xl transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
					>
						On-site gallery
					</h1>
					<p
						className={cn(
							"mt-5 max-w-xl text-base text-white/75 md:text-lg transition-all duration-700",
							mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
						)}
						style={{ transitionDelay: "100ms" }}
					>
						Real AC, electrical and appliance jobs by {business.owner} — photos
						and videos from the field.
					</p>
				</div>
			</section>

			<section className="w-full px-4 py-12 sm:px-6 md:py-16 lg:px-10">
				<div className="mx-auto w-full max-w-[1400px]">
					{items.length === 0 ? (
						<p className="border border-dashed border-border py-24 text-center text-muted-foreground">
							No work photos yet. Check back soon.
						</p>
					) : (
						<div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
							{items.map((item, i) => (
								<button
									key={item.url}
									type="button"
									onClick={() => setActive(item)}
									className={cn(
										"mb-4 block w-full break-inside-avoid overflow-hidden border border-border bg-card text-left transition-all duration-500 hover:border-primary/50",
										mounted ? "opacity-100" : "opacity-0",
									)}
									style={{ transitionDelay: `${80 + i * 40}ms` }}
								>
									<div className="relative aspect-[4/3] bg-muted">
										{item.kind === "image" ? (
											<Image
												src={item.url}
												alt="Workshop job photo"
												fill
												className="object-cover"
												sizes="(max-width:768px) 100vw, 33vw"
												unoptimized
											/>
										) : (
											<video
												src={item.url}
												className="h-full w-full object-cover"
												muted
												playsInline
												preload="metadata"
											/>
										)}
										<span className="absolute left-2 top-2 inline-flex items-center gap-1 bg-navy/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
											{item.kind === "image" ? (
												<ImageIcon className="h-3 w-3 text-primary" />
											) : (
												<Film className="h-3 w-3 text-primary" />
											)}
											{item.kind}
										</span>
									</div>
								</button>
							))}
						</div>
					)}
				</div>
			</section>

			{active && (
				<div
					className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4"
					onClick={() => setActive(null)}
					role="dialog"
					aria-modal
				>
					<button
						type="button"
						className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
						onClick={() => setActive(null)}
						aria-label="Close"
					>
						<X className="h-5 w-5" />
					</button>
					<div
						className="relative max-h-[85vh] w-full max-w-5xl"
						onClick={(e) => e.stopPropagation()}
					>
						{active.kind === "image" ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={active.url}
								alt="Gallery item"
								className="max-h-[85vh] w-full object-contain"
							/>
						) : (
							<video
								src={active.url}
								className="max-h-[85vh] w-full"
								controls
								autoPlay
								muted
								playsInline
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
