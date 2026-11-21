import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import CookieConsent from "@/components/CookieConsent";
import AdSenseScript from "@/components/AdSenseScript";
import JsonLd from "@/components/JsonLd";
import { business } from "@/constants/business";
import { siteUrl } from "@/constants/site";

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
	metadataBase: new URL(siteUrl),
	title: {
		default: `${business.shortName} | Electrical & Aircon Portfolio Faridabad`,
		template: `%s | ${business.shortName}`,
	},
	description:
		"Naveen Bhardwaj — electrical mechanic & AC specialist portfolio. Work gallery, AC AMC, wiring, geyser and appliance service across Faridabad. 24/7 support.",
	keywords: [
		"Bhardwaj Aircon",
		"Naveen Bhardwaj",
		"electrical mechanic Faridabad",
		"AC repair Faridabad",
		"AC AMC Faridabad",
		"Electrical services Faridabad",
		"work gallery",
		"Ballabgarh",
		"Sector 65 HUDA Market",
	],
	authors: [{ name: business.owner }],
	creator: business.owner,
	publisher: business.name,
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_IN",
		url: siteUrl,
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
	category: "business",
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
				<JsonLd />
				<AdSenseScript />
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
					<CookieConsent />
				</ThemeProvider>
			</body>
		</html>
	);
}
