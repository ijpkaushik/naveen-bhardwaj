export type Testimonial = {
	name: string;
	area: string;
	quote: string;
	service: string;
};

export const testimonials: Testimonial[] = [
	{
		name: "Rajesh Kumar",
		area: "Sector 65, Faridabad",
		quote:
			"Naveen fixed our split AC the same evening. Gas was low and they cleaned the unit thoroughly. Fair price and very professional.",
		service: "AC Repair",
	},
	{
		name: "Priya Sharma",
		area: "Ballabgarh",
		quote:
			"Called for geyser and washing machine on the same day. Both were working perfectly again. Highly recommend Bhardwaj Aircon.",
		service: "Geyser & Washing Machine",
	},
	{
		name: "Amit Verma",
		area: "HUDA Market",
		quote:
			"We took their AC AMC for our shop. Regular service visits, no surprise bills, and emergency support when we needed it in peak summer.",
		service: "AC AMC",
	},
	{
		name: "Sunita Devi",
		area: "Parvatiya Colony",
		quote:
			"Electrical wiring in our new rooms was done neatly and safely. Explained everything clearly. Will call them for fridge service next.",
		service: "Electrical Wiring",
	},
];
