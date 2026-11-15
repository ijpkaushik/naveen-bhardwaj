import {
	HomeIcon,
	User2,
	Wrench,
	MailIcon,
	LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	home: HomeIcon,
	user: User2,
	services: Wrench,
	contact: MailIcon,
};

export const navItems: { label: string; icon: Icon; url: string }[] = [
	{ label: "Home", url: "/", icon: Icons.home },
	{ label: "Services", url: "/services", icon: Icons.services },
	{ label: "About", url: "/about", icon: Icons.user },
	{ label: "Contact", url: "/contact", icon: Icons.contact },
];
