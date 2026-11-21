import type { ReactNode } from "react";
import Link from "next/link";
import { business } from "@/constants/business";
import { siteUrl } from "@/constants/site";

type Section = {
	title: string;
	body: ReactNode;
};

type Props = {
	title: string;
	updated: string;
	intro: string;
	sections: Section[];
};

export default function LegalPage({ title, updated, intro, sections }: Props) {
	return (
		<div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 md:py-16 lg:px-10">
			<p className="text-sm font-semibold uppercase tracking-widest text-primary">
				Legal
			</p>
			<h1 className="font-display mt-2 text-4xl font-extrabold uppercase md:text-5xl">
				{title}
			</h1>
			<p className="mt-2 text-sm text-muted-foreground">
				Last updated: {updated}
			</p>
			<p className="mt-6 text-base leading-relaxed text-foreground/90">{intro}</p>

			<div className="mt-10 space-y-8">
				{sections.map((section) => (
					<section key={section.title}>
						<h2 className="font-display text-2xl font-bold uppercase tracking-wide">
							{section.title}
						</h2>
						<div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
							{section.body}
						</div>
					</section>
				))}
			</div>

			<p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
				Questions? Email{" "}
				<a
					href={`mailto:${business.email}`}
					className="font-medium text-primary hover:underline"
				>
					{business.email}
				</a>{" "}
				or visit our{" "}
				<Link href="/contact" className="font-medium text-primary hover:underline">
					Contact
				</Link>{" "}
				page. Site:{" "}
				<a href={siteUrl} className="font-medium text-primary hover:underline">
					{siteUrl}
				</a>
				.
			</p>
		</div>
	);
}
