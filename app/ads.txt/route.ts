import { adsensePubId } from "@/constants/site";

export const dynamic = "force-dynamic";

/**
 * Serves /ads.txt for Google AdSense Authorized Sellers.
 * Set NEXT_PUBLIC_ADSENSE_PUB_ID=pub-xxxxxxxxxxxxxxxx after you get your publisher ID.
 */
export function GET() {
	const lines: string[] = [
		"# ads.txt for Bhardwaj Aircon & Electrical Services",
	];

	if (adsensePubId) {
		lines.push(`google.com, ${adsensePubId}, DIRECT, f08c47fec0942fa0`);
	} else {
		lines.push(
			"# Add NEXT_PUBLIC_ADSENSE_PUB_ID=pub-xxxxxxxxxxxxxxxx in env after AdSense approval",
		);
	}

	return new Response(`${lines.join("\n")}\n`, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
}
