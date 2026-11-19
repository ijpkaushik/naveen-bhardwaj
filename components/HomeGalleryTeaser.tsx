import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
	items: GalleryItem[];
};

export default function HomeGalleryTeaser({ items }: Props) {
	if (items.length === 0) return null;

	return (
		<section className="w-full border-t border-border bg-muted/30 px-4 py-14 sm:px-6 md:py-16 lg:px-10">
			<div className="mx-auto w-full max-w-[1400px]">
				<div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-sm font-semibold uppercase tracking-widest text-primary">
							From the field
						</p>
						<h2 className="font-display mt-1 text-3xl font-extrabold uppercase md:text-5xl">
							Recent work
						</h2>
					</div>
					<Button asChild variant="outline" className="gap-2 self-start">
						<Link href="/gallery">
							Full gallery
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
				<div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
					{items.map((item) => (
						<Link
							key={item.url}
							href="/gallery"
							className="relative aspect-square overflow-hidden border border-border bg-card"
						>
							{item.kind === "image" ? (
								<Image
									src={item.url}
									alt="Job photo"
									fill
									className="object-cover transition-transform duration-500 hover:scale-105"
									sizes="16vw"
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
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
