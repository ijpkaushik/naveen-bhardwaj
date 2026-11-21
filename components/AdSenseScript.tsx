import Script from "next/script";
import { adsenseClientId } from "@/constants/site";

/** Loads AdSense only when NEXT_PUBLIC_ADSENSE_CLIENT_ID is set (e.g. ca-pub-xxxx). */
export default function AdSenseScript() {
	if (!adsenseClientId) return null;

	return (
		<Script
			id="adsense-init"
			async
			strategy="afterInteractive"
			src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
			crossOrigin="anonymous"
		/>
	);
}
