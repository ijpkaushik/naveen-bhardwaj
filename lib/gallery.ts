import { list, put, del } from "@vercel/blob";
import { seedGalleryItems } from "@/constants/seedGallery";

export const GALLERY_PREFIX = "gallery/";

export type GalleryItem = {
	url: string;
	pathname: string;
	contentType: string;
	uploadedAt: string;
	size: number;
	kind: "image" | "video" | "other";
};

function contentTypeFromPath(pathname: string): string {
	const lower = pathname.toLowerCase();
	if (/\.(jpe?g|png|gif|webp|avif|svg)$/.test(lower)) {
		if (lower.endsWith(".png")) return "image/png";
		if (lower.endsWith(".gif")) return "image/gif";
		if (lower.endsWith(".webp")) return "image/webp";
		if (lower.endsWith(".avif")) return "image/avif";
		if (lower.endsWith(".svg")) return "image/svg+xml";
		return "image/jpeg";
	}
	if (/\.(mp4|webm|mov|m4v|ogg)$/.test(lower)) {
		if (lower.endsWith(".webm")) return "video/webm";
		if (lower.endsWith(".mov")) return "video/quicktime";
		if (lower.endsWith(".ogg")) return "video/ogg";
		return "video/mp4";
	}
	return "application/octet-stream";
}

function kindFromContentType(contentType: string): GalleryItem["kind"] {
	if (contentType.startsWith("image/")) return "image";
	if (contentType.startsWith("video/")) return "video";
	return "other";
}

export async function listGalleryItems(): Promise<GalleryItem[]> {
	let remote: GalleryItem[] = [];
	try {
		if (process.env.BLOB_READ_WRITE_TOKEN) {
			const result = await list({ prefix: GALLERY_PREFIX });
			remote = result.blobs
				.map((blob) => {
					const contentType = contentTypeFromPath(blob.pathname);
					return {
						url: blob.url,
						pathname: blob.pathname,
						contentType,
						uploadedAt: blob.uploadedAt.toISOString(),
						size: blob.size,
						kind: kindFromContentType(contentType),
					};
				})
				.filter((item) => item.kind === "image" || item.kind === "video");
		}
	} catch (error) {
		console.error("blob list failed, using seed gallery", error);
	}

	const items = remote.length > 0 ? remote : seedGalleryItems;
	return items.sort(
		(a, b) =>
			new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime(),
	);
}

export async function uploadGalleryFile(file: File) {
	const type = file.type || "application/octet-stream";
	if (!type.startsWith("image/") && !type.startsWith("video/")) {
		throw new Error("Only image and video uploads are allowed");
	}

	const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
	const pathname = `${GALLERY_PREFIX}${Date.now()}-${safeName}`;

	const blob = await put(pathname, file, {
		access: "public",
		contentType: type,
		addRandomSuffix: false,
	});

	return {
		url: blob.url,
		pathname: blob.pathname,
		contentType: type,
		uploadedAt: new Date().toISOString(),
		size: file.size,
		kind: kindFromContentType(type),
	} satisfies GalleryItem;
}

export async function deleteGalleryFile(url: string) {
	if (!url) throw new Error("Missing url");
	if (url.startsWith("/gallery/seed-")) {
		throw new Error("Seed demo photos cannot be deleted");
	}
	await del(url);
}
