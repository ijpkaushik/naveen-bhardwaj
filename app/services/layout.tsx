import type { Metadata } from "next";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Services",
	description:
		"AC repair & AMC, electrical wiring, geyser, washing machine, refrigerator, deep freezer and RO service in Faridabad by Bhardwaj Aircon.",
	openGraph: {
		title: `Services | ${business.shortName}`,
		description:
			"Complete AC, electrical & appliance repair services across Faridabad and Ballabgarh.",
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
