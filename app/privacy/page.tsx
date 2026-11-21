import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { business } from "@/constants/business";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: `Privacy Policy for ${business.name} — how we handle information, cookies, and Google AdSense advertising.`,
	robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
	return (
		<LegalPage
			title="Privacy Policy"
			updated="21 November 2026"
			intro={`${business.name} (“we”, “us”) operates this website to share information about our AC, electrical and appliance services in Faridabad. This policy explains what information we collect, how we use it, and how advertising partners such as Google may use cookies on our site.`}
			sections={[
				{
					title: "Who we are",
					body: (
						<>
							<p>
								This site is operated by {business.owner}, trading as{" "}
								{business.name}. Workshop address: {business.address}. Contact:{" "}
								{business.email} · {business.phone}.
							</p>
						</>
					),
				},
				{
					title: "Information we collect",
					body: (
						<>
							<p>We may collect:</p>
							<ul className="list-disc space-y-1 pl-5">
								<li>
									Information you send us by email, phone, WhatsApp, or contact
									links (name, phone number, message content).
								</li>
								<li>
									Basic technical data such as browser type, device, and pages
									visited, via analytics or hosting logs if enabled.
								</li>
								<li>
									Cookie and similar technology data used for site preferences
									(for example theme) and advertising, as described below.
								</li>
							</ul>
						</>
					),
				},
				{
					title: "How we use information",
					body: (
						<>
							<p>We use information to:</p>
							<ul className="list-disc space-y-1 pl-5">
								<li>Respond to service enquiries and bookings.</li>
								<li>Operate, secure, and improve this website.</li>
								<li>
									Show relevant advertising through partners such as Google
									AdSense (when ads are enabled).
								</li>
							</ul>
							<p>
								We do not sell your personal information. Service messages you
								send us are used only to provide the requested help.
							</p>
						</>
					),
				},
				{
					title: "Cookies and Google advertising",
					body: (
						<>
							<p>
								Third-party vendors, including Google, use cookies to serve ads
								based on a user&apos;s prior visits to your website or other
								websites.
							</p>
							<p>
								Google&apos;s use of advertising cookies enables it and its
								partners to serve ads to your users based on their visit to this
								site and/or other sites on the Internet.
							</p>
							<p>
								Users may opt out of personalized advertising by visiting{" "}
								<a
									href="https://www.google.com/settings/ads"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-primary hover:underline"
								>
									Google Ads Settings
								</a>
								. You can also visit{" "}
								<a
									href="https://www.aboutads.info"
									target="_blank"
									rel="noopener noreferrer"
									className="font-medium text-primary hover:underline"
								>
									www.aboutads.info
								</a>{" "}
								to opt out of personalized advertising from many third-party
								vendors.
							</p>
							<p>
								If we have not opted out of third-party ad serving, cookies of
								other third-party vendors or ad networks may also be used to
								serve ads on this site. Those vendors may set their own cookies;
								you can review their policies and opt-out tools via the links
								above.
							</p>
						</>
					),
				},
				{
					title: "Essential site cookies",
					body: (
						<p>
							We may store a small preference cookie or local storage value for
							theme (light/dark) and cookie-notice acknowledgement so the banner
							does not keep reappearing. These are not used for advertising.
						</p>
					),
				},
				{
					title: "Third-party services",
					body: (
						<p>
							This site may use hosting (for example Vercel), media storage,
							WhatsApp / phone links, and Google services (AdSense, Fonts, or
							Analytics if enabled). Those providers process data under their own
							privacy policies.
						</p>
					),
				},
				{
					title: "Your choices",
					body: (
						<p>
							You can clear cookies in your browser, use Ads Settings to limit
							personalized ads, or contact us to ask about information you have
							sent us directly. Email {business.email} for privacy questions.
						</p>
					),
				},
				{
					title: "Updates",
					body: (
						<p>
							We may update this policy as our site or advertising setup changes.
							The “Last updated” date at the top will change when we do.
						</p>
					),
				},
			]}
		/>
	);
}
