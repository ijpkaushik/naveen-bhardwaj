import { StaticImageData } from "next/image";

import kvs from "@/assets/kvs.png";
import msit from "@/assets/msit.png";

export const education: {
	institute: string;
	logo: StaticImageData;
	degree: string;
	major: string;
	duration: string;
	grade: string;
}[] = [
	{
		institute: "Maharaja Surajmal Institute Of Technology",
		logo: msit,
		degree: "Bachelor of Technology",
		major: "Computer Science and Engineering",
		duration: "2019 - 2023",
		grade: "8.879 CGPA",
	},
	{
		institute: "Kendriya Vidyalaya No. 2, Delhi Cantt",
		logo: kvs,
		degree: "High School",
		major: "Non-Medical",
		duration: "2019",
		grade: "89%",
	},
];
