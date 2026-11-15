import type { Metadata } from "next";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "About",
	description: `Meet ${business.owner} — proprietor of ${business.name}. Trusted AC & electrical service across Faridabad.`,
	openGraph: {
		title: `About | ${business.shortName}`,
		description: `Experienced AC, electrical and appliance technicians serving Faridabad & Ballabgarh.`,
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
