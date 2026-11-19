import type { Metadata } from "next";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Gallery",
	description: `Work gallery — AC, electrical and appliance jobs by ${business.owner} across Faridabad.`,
	openGraph: {
		title: `Gallery | ${business.shortName}`,
		description: "Photos and videos from real service jobs in Faridabad.",
	},
};

export default function GalleryLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
