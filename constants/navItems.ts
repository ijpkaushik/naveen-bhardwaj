import {
	HomeIcon,
	User2,
	NotepadText,
	MailIcon,
	LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
	home: HomeIcon,
	user: User2,
	projects: NotepadText,
	contact: MailIcon,
};

export const navItems: { label: string; icon: Icon; url: string }[] = [
	{ label: "Home", url: "/", icon: Icons.home },
	{ label: "About", url: "/about", icon: Icons.user },
	{ label: "Projects", url: "/projects", icon: Icons.projects },
	{ label: "Contact", url: "/contact", icon: Icons.contact },
];
