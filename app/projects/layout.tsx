import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Explore my portfolio of projects including Silver Dine, Weather App, and more. Built with modern technologies like Next.js, React, TypeScript, and Node.js.",
	openGraph: {
		title: "Projects | Naveen Bhardwaj",
		description:
			"Explore my portfolio of projects built with modern web technologies including Next.js, React, TypeScript, and more.",
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}

