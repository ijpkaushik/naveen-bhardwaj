import AdminGalleryClient from "@/components/AdminGalleryClient";
import { listGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
	const items = await listGalleryItems();
	return <AdminGalleryClient initialItems={items} />;
}
