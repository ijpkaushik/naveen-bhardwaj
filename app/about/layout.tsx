import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description:
		"Learn about Naveen Bhardwaj - Full-Stack Developer. Explore my education, professional experience, skills, and journey in software development.",
	openGraph: {
		title: "About Me | Naveen Bhardwaj",
		description:
			"Learn about Naveen Bhardwaj - Full-Stack Developer. Explore my education, professional experience, and skills.",
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

