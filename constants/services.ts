import type { ServiceIconId } from "@/components/vectors/ServiceIcons";

export type Service = {
	id: ServiceIconId;
	title: string;
	shortTitle: string;
	description: string;
	highlights: string[];
	categoryId: ServiceCategoryId;
};

export type ServiceCategoryId =
	| "cooling"
	| "geysers"
	| "laundry"
	| "refrigeration"
	| "kitchen"
	| "home-electronics"
	| "electrical"
	| "amc";

export type ServiceCategory = {
	id: ServiceCategoryId;
	title: string;
	blurb: string;
	iconId: ServiceIconId;
};

export const serviceCategories: ServiceCategory[] = [
	{
		id: "cooling",
		title: "Air Conditioning",
		blurb: "Split & window AC install, gas charging, deep clean and summer AMC.",
		iconId: "split-ac",
	},
	{
		id: "geysers",
		title: "Geysers",
		blurb: "Electric and gas geyser install, element, burner and leak repairs.",
		iconId: "electric-geyser",
	},
	{
		id: "laundry",
		title: "Washing Machines",
		blurb: "Front load, top load and semi-automatic washer service on site.",
		iconId: "wm-front",
	},
	{
		id: "refrigeration",
		title: "Refrigeration",
		blurb: "Fridge, deep freezer and water cooler cooling & compressor work.",
		iconId: "refrigerator",
	},
	{
		id: "kitchen",
		title: "Kitchen Appliances",
		blurb: "Microwave, induction, mixer grinder and chimney repair.",
		iconId: "microwave",
	},
	{
		id: "home-electronics",
		title: "Home Electronics",
		blurb: "LED TV, RO purifier, fans and air cooler fixes for daily use.",
		iconId: "tv",
	},
	{
		id: "electrical",
		title: "Electrical & Power",
		blurb: "House wiring, MCB panels, inverter/UPS and emergency faults.",
		iconId: "electrical",
	},
	{
		id: "amc",
		title: "AMC Plans",
		blurb: "Year-round maintenance with priority booking and scheduled visits.",
		iconId: "amc",
	},
];

export const services: Service[] = [
	{
		id: "split-ac",
		categoryId: "cooling",
		title: "Split AC Repair & Service",
		shortTitle: "Split AC",
		description:
			"Indoor & outdoor split AC installation, gas charging, deep cleaning, PCB repair, and AMC — same-day cooling fixes across Faridabad.",
		highlights: ["Install & uninstall", "Gas charging", "Deep clean", "PCB & remote"],
	},
	{
		id: "window-ac",
		categoryId: "cooling",
		title: "Window AC Repair & Service",
		shortTitle: "Window AC",
		description:
			"Window AC fitting, gas top-up, cooling coil cleaning, thermostat and fan motor repair for every major brand.",
		highlights: ["Fitting", "Gas top-up", "Coil clean", "Motor repair"],
	},
	{
		id: "air-cooler",
		categoryId: "cooling",
		title: "Air Cooler Repair",
		shortTitle: "Air Cooler",
		description:
			"Desert and personal air cooler service — pump, fan motor, cooling pads, and swing issues before peak summer.",
		highlights: ["Pump", "Fan motor", "Cooling pads", "Swing"],
	},
	{
		id: "electric-geyser",
		categoryId: "geysers",
		title: "Electric Geyser Repair",
		shortTitle: "Electric",
		description:
			"Storage & instant electric geyser installation, heating element, thermostat, and leak repair so hot water is always ready.",
		highlights: ["Storage & instant", "Element repair", "Thermostat", "Leak fixes"],
	},
	{
		id: "gas-geyser",
		categoryId: "geysers",
		title: "Gas Geyser Repair",
		shortTitle: "Gas",
		description:
			"LPG/PNG gas geyser install, burner cleaning, pilot & thermostat issues, and safety checks for kitchen and bathroom units.",
		highlights: ["LPG & PNG", "Burner clean", "Pilot repair", "Safety check"],
	},
	{
		id: "wm-front",
		categoryId: "laundry",
		title: "Front Load Washing Machine",
		shortTitle: "Front Load",
		description:
			"Front-load washer service — door lock, drain pump, drum bearing, heater, and error-code diagnosis with genuine parts.",
		highlights: ["Door lock", "Drain pump", "Bearing", "Error codes"],
	},
	{
		id: "wm-top",
		categoryId: "laundry",
		title: "Top Load Washing Machine",
		shortTitle: "Top Load",
		description:
			"Top-load automatic machine repair for spin, wash motor, pulsator, lid switch, and PCB faults.",
		highlights: ["Spin issues", "Motor", "Pulsator", "PCB"],
	},
	{
		id: "wm-semi",
		categoryId: "laundry",
		title: "Semi-Automatic Washing Machine",
		shortTitle: "Semi Auto",
		description:
			"Twin-tub semi-automatic washer service — wash timer, spin dryer, drain, and belt or gear issues fixed on site.",
		highlights: ["Twin tub", "Timer", "Spin dryer", "On-site fix"],
	},
	{
		id: "refrigerator",
		categoryId: "refrigeration",
		title: "Refrigerator Service",
		shortTitle: "Fridge",
		description:
			"Single, double-door and side-by-side fridge repair — gas filling, compressor, thermostat, and door-seal replacement.",
		highlights: ["All door types", "Gas filling", "Compressor", "Door seal"],
	},
	{
		id: "deep-freezer",
		categoryId: "refrigeration",
		title: "Deep Freezer Repair",
		shortTitle: "Deep Freezer",
		description:
			"Home and commercial deep freezer maintenance for shops and kitchens — keep stock frozen without surprise breakdowns.",
		highlights: ["Commercial", "Home units", "Gas & compressor", "Fast response"],
	},
	{
		id: "water-cooler",
		categoryId: "refrigeration",
		title: "Water Cooler Repair",
		shortTitle: "Water Cooler",
		description:
			"Office and home water cooler / dispenser repair — cooling, compressor, thermostat, and tap leaks.",
		highlights: ["Cooling", "Compressor", "Thermostat", "Tap leaks"],
	},
	{
		id: "microwave",
		categoryId: "kitchen",
		title: "Microwave Oven Repair",
		shortTitle: "Microwave",
		description:
			"Solo, grill and convection microwave repair — magnetron, turntable, door switch, and control panel faults.",
		highlights: ["Solo & grill", "Convection", "Magnetron", "Door switch"],
	},
	{
		id: "induction",
		categoryId: "kitchen",
		title: "Induction Cooktop Repair",
		shortTitle: "Induction",
		description:
			"Induction stove and cooktop PCB, coil, and touch-panel repair for all popular kitchen brands.",
		highlights: ["Coil & PCB", "Touch panel", "Error codes", "All brands"],
	},
	{
		id: "mixer",
		categoryId: "kitchen",
		title: "Mixer Grinder Repair",
		shortTitle: "Mixer",
		description:
			"Mixer grinder motor rewind, jar coupling, overload switch, and blade service for daily kitchen use.",
		highlights: ["Motor", "Jar coupling", "Overload", "Blades"],
	},
	{
		id: "chimney",
		categoryId: "kitchen",
		title: "Kitchen Chimney Repair",
		shortTitle: "Chimney",
		description:
			"Auto-clean and filter chimney installation, motor noise, suction loss, and oil-collector servicing.",
		highlights: ["Install", "Suction", "Motor noise", "Auto-clean"],
	},
	{
		id: "tv",
		categoryId: "home-electronics",
		title: "LED / LCD TV Repair",
		shortTitle: "LED TV",
		description:
			"Smart and LED/LCD TV service — no display, backlight, sound, motherboard, and wall-mount support.",
		highlights: ["No display", "Backlight", "Sound", "Smart TV"],
	},
	{
		id: "ro",
		categoryId: "home-electronics",
		title: "RO Water Purifier",
		shortTitle: "RO",
		description:
			"RO / UV / UF installation, filter changes, membrane replacement, and TDS tuning for clean drinking water.",
		highlights: ["Install", "Filter change", "Membrane", "TDS tuning"],
	},
	{
		id: "fan",
		categoryId: "home-electronics",
		title: "Ceiling & Exhaust Fans",
		shortTitle: "Fans",
		description:
			"Ceiling fan installation, capacitor and regulator repair, exhaust and fresh-air fan fitting for kitchen and bath.",
		highlights: ["Ceiling fan", "Capacitor", "Regulator", "Exhaust"],
	},
	{
		id: "electrical",
		categoryId: "electrical",
		title: "Electrical Wiring & Maintenance",
		shortTitle: "Wiring",
		description:
			"Safe house wiring, MCB/fuse board upgrades, short-circuit finding, and 24/7 emergency power repairs.",
		highlights: ["House wiring", "MCB panels", "Fault finding", "Emergency calls"],
	},
	{
		id: "inverter",
		categoryId: "electrical",
		title: "Inverter & UPS Repair",
		shortTitle: "Inverter",
		description:
			"Home inverter and UPS diagnosis, battery health check, charging faults, and wiring for power backup.",
		highlights: ["Home inverter", "UPS", "Battery check", "Charging"],
	},
	{
		id: "amc",
		categoryId: "amc",
		title: "Annual Maintenance Plans",
		shortTitle: "AMC",
		description:
			"Affordable AMC for AC and home appliances — priority booking, scheduled visits, and year-round peace of mind.",
		highlights: ["Priority booking", "Scheduled visits", "Discounted parts", "Year-round"],
	},
];

export function getServicesByCategory(categoryId: ServiceCategoryId) {
	return services.filter((s) => s.categoryId === categoryId);
}

export const categorizedServices = serviceCategories.map((category) => ({
	...category,
	items: getServicesByCategory(category.id),
}));

export const featuredCategories = categorizedServices.filter((c) =>
	(["cooling", "geysers", "laundry", "electrical"] as ServiceCategoryId[]).includes(
		c.id,
	),
);
