export const business = {
	name: "Bhardwaj Aircon & Electrical Services",
	shortName: "Bhardwaj Aircon",
	owner: "Naveen Bhardwaj",
	tagline: "Your reliable partner for complete comfort & power",
	phone: "+91 9560637939",
	phoneRaw: "919560637939",
	email: "bhardwajaircon29@gmail.com",
	instagram: "https://www.instagram.com/naveenbhardwaj9818/",
	instagramHandle: "@naveenbhardwaj9818",
	address:
		"House No-64, 60 Feet Road, Near Janhit Dharmasala, Parvatiya Colony Part-2, Sector 22, Faridabad, Haryana 121005",
	serviceArea: "Serving Ballabgarh & all of Faridabad",
	hours: "24/7 Emergency Service Available",
	yearsExperience: 7,
	jobsCompleted: "1,000+",
} as const;

export function whatsappLink(message?: string) {
	const text =
		message ??
		`Hi ${business.owner}, I need AC / electrical service in Faridabad. Please help.`;
	return `https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export function telLink() {
	return `tel:+${business.phoneRaw}`;
}
