import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Terms of Service",
	description: `Terms of Service for ${business.name} website and service information.`,
	robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
	return (
		<LegalPage
			title="Terms of Service"
			updated="21 November 2026"
			intro={`By using the ${business.name} website, you agree to these terms. If you do not agree, please do not use the site.`}
			sections={[
				{
					title: "About this website",
					body: (
						<p>
							This website provides information about AC, electrical, and
							appliance services offered by {business.owner} in Faridabad. Content
							is for general information and marketing. Booking and pricing for a
							specific job are confirmed when you contact us.
						</p>
					),
				},
				{
					title: "Service enquiries",
					body: (
						<p>
							Phone, WhatsApp, email, and other contact channels are provided so
							you can request service. Message and call rates from your carrier
							may apply. We aim to respond promptly but response times can vary,
							especially during peak summer or emergency load.
						</p>
					),
				},
				{
					title: "Accuracy of information",
					body: (
						<p>
							We try to keep service descriptions, hours, and contact details
							accurate. Details such as availability, parts, and quotes may
							change. Gallery photos and videos show example work and may not
							represent every job.
						</p>
					),
				},
				{
					title: "Intellectual property",
					body: (
						<p>
							Text, branding, layout, and media on this site belong to{" "}
							{business.owner} / {business.shortName} unless otherwise noted. You
							may not copy or reuse site content for commercial purposes without
							permission.
						</p>
					),
				},
				{
					title: "Acceptable use",
					body: (
						<p>
							Do not misuse this site (for example attempting unauthorized access
							to admin areas, uploading malware, scraping at abusive rates, or
							using contact channels for spam or harassment).
						</p>
					),
				},
				{
					title: "Third-party links and ads",
					body: (
						<p>
							The site may include links to WhatsApp, Instagram, maps, or
							advertising served by Google or other partners. We are not
							responsible for third-party sites, ads, or their content. See our
							Privacy Policy for how advertising cookies work.
						</p>
					),
				},
				{
					title: "Limitation of liability",
					body: (
						<p>
							To the fullest extent allowed by law, we are not liable for
							indirect or consequential loss arising from use of this website.
							Service work performed at your premises is subject to the terms
							agreed at the time of the job.
						</p>
					),
				},
				{
					title: "Governing law",
					body: (
						<p>
							These terms are governed by the laws of India. Disputes relating to
							this website will be subject to the courts of Faridabad / Haryana,
							unless applicable law requires otherwise.
						</p>
					),
				},
				{
					title: "Contact",
					body: (
						<p>
							For questions about these terms: {business.email} · {business.phone}{" "}
							· {business.address}.
						</p>
					),
				},
			]}
		/>
	);
}
