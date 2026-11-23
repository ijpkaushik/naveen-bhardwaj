export const siteUrl =
	process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
	"https://bhardwajaircon.com";

/** AdSense client ID */
export const adsenseClientId =
	process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim() ||
	"ca-pub-2340376071122590";

/** Publisher ID for ads.txt */
export const adsensePubId =
	process.env.NEXT_PUBLIC_ADSENSE_PUB_ID?.trim() ||
	adsenseClientId.replace(/^ca-/, "") ||
	"pub-2340376071122590";
