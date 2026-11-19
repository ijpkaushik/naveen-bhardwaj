import GalleryClient from "@/components/GalleryClient";
import { listGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
	const items = await listGalleryItems();
	return <GalleryClient items={items} />;
}
