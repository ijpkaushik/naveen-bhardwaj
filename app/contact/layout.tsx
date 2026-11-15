import type { Metadata } from "next";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Contact",
	description: `Call or WhatsApp ${business.owner} at ${business.phone} for AC & electrical service in Faridabad.`,
	openGraph: {
		title: `Contact | ${business.shortName}`,
		description: `Book AC, electrical or appliance repair — WhatsApp ${business.phone}.`,
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
