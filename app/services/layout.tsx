import type { Metadata } from "next";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Services",
	description:
		"Split & window AC, gas & electric geyser, front/top/semi washing machines, microwave, TV, fridge, RO and more — repair in Faridabad by Bhardwaj Aircon.",
	openGraph: {
		title: `Services | ${business.shortName}`,
		description:
			"Complete AC, geyser, washing machine, microwave, TV & appliance repair across Faridabad and Ballabgarh.",
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
