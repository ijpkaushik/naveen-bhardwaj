export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
	"https://naveenbhardwaj.vercel.app";

export const adsenseClientId =
	process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() || "";

export const adsensePubId =
	process.env.NEXT_PUBLIC_ADSENSE_PUB_ID?.trim() ||
	adsenseClientId.replace(/^ca-/, "") ||
	"";
