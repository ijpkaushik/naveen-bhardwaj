import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
	title: {
		default: "Naveen Bhardwaj | Full-Stack Developer",
		template: "%s | Naveen Bhardwaj",
	},
	description:
		"Naveen Bhardwaj - Full-Stack Developer with expertise in Next.js, Node.js, various databases, and real-time application development. Explore my portfolio, projects, and professional experience.",
	keywords: [
		"Naveen Bhardwaj",
		"Full-Stack Developer",
		"Next.js Developer",
		"React Developer",
		"Node.js Developer",
		"Web Developer",
		"Portfolio",
		"Software Developer",
		"TypeScript",
		"Real-time Applications",
	],
	authors: [{ name: "Naveen Bhardwaj" }],
	creator: "Naveen Bhardwaj",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://naveenbhardwaj.vercel.app",
		title: "Naveen Bhardwaj | Full-Stack Developer",
		description:
			"Full-Stack Developer with expertise in Next.js, Node.js, and real-time application development. Explore my portfolio and projects.",
		siteName: "NaveenFolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Naveen Bhardwaj | Full-Stack Developer",
		description:
			"Full-Stack Developer with expertise in Next.js, Node.js, and real-time application development.",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Add your verification codes here when available
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`flex flex-col min-h-screen relative max-w-7xl mx-auto bg-zinc-100 dark:bg-zinc-800 ${inter.className} py-5 px-2`}
			>
				{/* Skip to main content link for accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
				>
					Skip to main content
				</a>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main id="main-content" className="flex flex-col bg-white dark:bg-zinc-900">
						{children}
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
