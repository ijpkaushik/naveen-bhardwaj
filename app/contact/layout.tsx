import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch with Naveen Bhardwaj. Send me a message for collaborations, opportunities, or just to say hello. I'll respond as soon as possible.",
	openGraph: {
		title: "Contact | Naveen Bhardwaj",
		description:
			"Get in touch with Naveen Bhardwaj. Send me a message for collaborations, opportunities, or just to say hello.",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

