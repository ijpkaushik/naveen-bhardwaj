import { StaticImageData } from "next/image";

import mastork from "@/assets/mastork_technologies_logo.jpeg";
import nightlab from "@/assets/night_lab_tech_logo.jpeg";
import webmuch from "@/assets/webmuch-logo.png";
import dehaat from "@/assets/dehaat-logo.png";

export const experience: {
	company: string;
	logo: StaticImageData;
	position: string;
	duration: string;
	type: string;
	mode: string;
}[] = [
	{
		company: "DeHaat",
		logo: dehaat,
		position: "Software Development Engineer-I",
		duration: "Jul 2025 - Present",
		type: "Fulltime",
		mode: "Onsite",
	},
	{
		company: "Webmuch Software Private Limited",
		logo: webmuch,
		position: "Software Developer",
		duration: "Aug 2023 - Jun 2025",
		type: "Fulltime",
		mode: "Hybrid",
	},
	{
		company: "Night Lab Tech",
		logo: nightlab,
		position: "Full Stack Intern",
		duration: "Feb 2023 - Aug 2023",
		type: "Internship",
		mode: "Remote",
	},
	{
		company: "Mastork Technologies",
		logo: mastork,
		position: "Full Stack Intern",
		duration: "Oct 2022 - Dec 2022",
		type: "Internship",
		mode: "Remote",
	},
];
