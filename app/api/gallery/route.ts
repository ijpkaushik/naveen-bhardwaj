import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import { deleteGalleryFile, uploadGalleryFile } from "@/lib/gallery";

export async function POST(request: Request) {
	if (!(await isAuthenticated())) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const form = await request.formData();
		const files = form.getAll("files").filter((f): f is File => f instanceof File);

		if (files.length === 0) {
			const single = form.get("file");
			if (single instanceof File) files.push(single);
		}

		if (files.length === 0) {
			return NextResponse.json({ error: "No files provided" }, { status: 400 });
		}

		const uploaded = [];
		for (const file of files) {
			uploaded.push(await uploadGalleryFile(file));
		}

		return NextResponse.json({ items: uploaded });
	} catch (error) {
		console.error("gallery upload error", error);
		const message =
			error instanceof Error ? error.message : "Failed to upload";
		return NextResponse.json({ error: message }, { status: 500 });
	}
}

export async function DELETE(request: Request) {
	if (!(await isAuthenticated())) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	try {
		const body = await request.json();
		const url = String(body.url || "");
		if (!url) {
			return NextResponse.json({ error: "Missing url" }, { status: 400 });
		}
		await deleteGalleryFile(url);
		return NextResponse.json({ ok: true });
	} catch (error) {
		console.error("gallery delete error", error);
		return NextResponse.json(
			{ error: "Failed to delete media" },
			{ status: 500 },
		);
	}
}
