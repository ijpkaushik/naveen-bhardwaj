import HomePage from "@/components/HomePage";
import { listGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export default async function Home() {
	const items = await listGalleryItems();
	return <HomePage galleryItems={items.slice(0, 6)} />;
}
