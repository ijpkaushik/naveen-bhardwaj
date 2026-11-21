import { business } from "@/constants/business";
import { siteUrl } from "@/constants/site";

export default function JsonLd() {
	const data = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		name: business.name,
		alternateName: business.shortName,
		description: business.tagline,
		url: siteUrl,
		telephone: business.phone,
		email: business.email,
		image: `${siteUrl}/gallery/seed-workshop.jpg`,
		address: {
			"@type": "PostalAddress",
			streetAddress: "Shop No. 116-117, Sector 65, HUDA Market",
			addressLocality: "Faridabad",
			addressRegion: "Haryana",
			addressCountry: "IN",
		},
		areaServed: {
			"@type": "City",
			name: "Faridabad",
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday",
			],
			opens: "00:00",
			closes: "23:59",
		},
		sameAs: [business.instagram],
		founder: {
			"@type": "Person",
			name: business.owner,
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	);
}
