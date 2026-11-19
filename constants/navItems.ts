import {
	HomeIcon,
	User2,
	Wrench,
	MailIcon,
	Images,
	LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	home: HomeIcon,
	user: User2,
	services: Wrench,
	gallery: Images,
	contact: MailIcon,
};

export const navItems: { label: string; icon: Icon; url: string }[] = [
	{ label: "Home", url: "/", icon: Icons.home },
	{ label: "Services", url: "/services", icon: Icons.services },
	{ label: "Gallery", url: "/gallery", icon: Icons.gallery },
	{ label: "About", url: "/about", icon: Icons.user },
	{ label: "Contact", url: "/contact", icon: Icons.contact },
];
