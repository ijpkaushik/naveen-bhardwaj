import Script from "next/script";
import { adsenseClientId } from "@/constants/site";

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
