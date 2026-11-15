import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { business } from "@/constants/business";

const display = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["600", "700", "800"],
	variable: "--font-display",
});

const body = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
});

export const metadata: Metadata = {
	title: {
		default: `${business.shortName} | AC & Electrical Services Faridabad`,
		template: `%s | ${business.shortName}`,
	},
	description:
		"Bhardwaj Aircon & Electrical Services by Naveen Bhardwaj — AC repair & AMC, electrical wiring, geyser, washing machine, fridge & RO service across Faridabad. 24/7 emergency support.",
	keywords: [
		"Bhardwaj Aircon",
		"Naveen Bhardwaj",
		"AC repair Faridabad",
		"AC AMC Faridabad",
		"Electrical services Faridabad",
		"Geyser repair",
		"Washing machine repair",
		"Ballabgarh",
		"Sector 65 HUDA Market",
	],
	authors: [{ name: business.owner }],
	creator: business.owner,
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: "https://naveenbhardwaj.vercel.app",
		title: `${business.name} | Faridabad`,
		description:
			"24/7 AC, electrical & appliance repair in Faridabad. Call or WhatsApp Naveen Bhardwaj today.",
		siteName: business.shortName,
	},
	twitter: {
		card: "summary_large_image",
		title: `${business.name} | Faridabad`,
		description:
			"24/7 AC, electrical & appliance repair in Faridabad. Call or WhatsApp today.",
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${display.variable} ${body.variable} flex min-h-screen flex-col bg-background font-sans antialiased`}
				style={{ fontFamily: "var(--font-body), ui-sans-serif, system-ui, sans-serif" }}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
				>
					Skip to main content
				</a>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<div className="relative flex min-h-screen w-full flex-col">
						<Navbar />
						<main id="main-content" className="flex flex-1 flex-col">
							{children}
						</main>
						<Footer />
					</div>
					<WhatsAppFab />
				</ThemeProvider>
			</body>
		</html>
	);
}
