import type { ServiceIconId } from "@/components/vectors/ServiceIcons";

export type Service = {
	id: ServiceIconId;
	title: string;
	description: string;
	highlights: string[];
};

export const services: Service[] = [
	{
		id: "ac",
		title: "AC Repair & AMC",
		description:
			"Split & window AC installation, gas charging, deep cleaning, and annual maintenance contracts that keep your home cool all summer — same-day visits across Faridabad.",
		highlights: ["Gas charging", "Deep clean", "AMC plans", "Same-day service"],
	},
	{
		id: "electrical",
		title: "Electrical Wiring & Maintenance",
		description:
			"Safe house wiring, MCB/fuse board upgrades, fault finding, and emergency power fixes by experienced technicians you can trust.",
		highlights: ["House wiring", "MCB panels", "Fault finding", "Emergency calls"],
	},
	{
		id: "geyser",
		title: "Geyser Repair & Installation",
		description:
			"Electric geyser installation, thermostat & heating-element repair, and leak fixes so hot water is ready whenever you need it.",
		highlights: ["New install", "Element repair", "Leak fixes", "Safety check"],
	},
	{
		id: "washing-machine",
		title: "Washing Machine Repair",
		description:
			"Automatic & semi-automatic washing machine service — spin issues, drainage, motor, and PCB repair with genuine spare parts.",
		highlights: ["Automatic", "Semi-automatic", "Motor & PCB", "Genuine parts"],
	},
	{
		id: "refrigerator",
		title: "Refrigerator Service",
		description:
			"Fridge not cooling? We handle gas filling, compressor checks, thermostat repair, and door-seal replacement for all major brands.",
		highlights: ["Cooling issues", "Gas filling", "Compressor", "All brands"],
	},
	{
		id: "deep-freezer",
		title: "Deep Freezer Repair",
		description:
			"Commercial & home deep freezer maintenance for shops and kitchens — keep stock frozen without surprise breakdowns.",
		highlights: ["Commercial", "Home units", "AMC ready", "Fast response"],
	},
	{
		id: "ro",
		title: "RO Water Purifier",
		description:
			"RO installation, filter changes, membrane replacement, and TDS tuning for clean drinking water at home and office.",
		highlights: ["Install", "Filter change", "Membrane", "TDS tuning"],
	},
	{
		id: "amc",
		title: "Annual Maintenance Plans",
		description:
			"Affordable AMC packages for AC and appliances — priority booking, scheduled visits, and peace of mind all year.",
		highlights: ["Priority booking", "Scheduled visits", "Discounted parts", "Year-round cover"],
	},
];
