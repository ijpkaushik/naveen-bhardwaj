"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Loader2,
	LogOut,
	Trash2,
	Upload,
	ImageIcon,
	Film,
} from "lucide-react";
import type { GalleryItem } from "@/lib/gallery";

type Props = {
	initialItems: GalleryItem[];
};

export default function AdminGalleryClient({ initialItems }: Props) {
	const router = useRouter();
	const [items, setItems] = useState(initialItems);
	const [uploading, setUploading] = useState(false);
	const [deleting, setDeleting] = useState(false);
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	const [pendingDelete, setPendingDelete] = useState<GalleryItem | null>(null);

	useEffect(() => {
		setItems(initialItems);
	}, [initialItems]);

	async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
		const files = e.target.files;
		if (!files?.length) return;
		setUploading(true);
		setError("");
		setMessage("");
		try {
			const form = new FormData();
			Array.from(files).forEach((file) => form.append("files", file));
			const res = await fetch("/api/gallery", { method: "POST", body: form });
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Upload failed");
			setMessage(`Uploaded ${data.items?.length || 0} file(s)`);
			if (Array.isArray(data.items) && data.items.length) {
				setItems((prev) => [...data.items, ...prev]);
			}
			router.refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Upload failed");
		} finally {
			setUploading(false);
			e.target.value = "";
		}
	}

	async function confirmDelete() {
		if (!pendingDelete) return;
		const url = pendingDelete.url;
		setDeleting(true);
		setError("");
		try {
			const res = await fetch("/api/gallery", {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ url }),
			});
			const data = await res.json();
			if (!res.ok) throw new Error(data.error || "Delete failed");
			setItems((prev) => prev.filter((item) => item.url !== url));
			setMessage("Deleted");
			setPendingDelete(null);
			router.refresh();
		} catch (err) {
			setError(err instanceof Error ? err.message : "Delete failed");
		} finally {
			setDeleting(false);
		}
	}

	async function onLogout() {
		await fetch("/api/auth/logout", { method: "POST" });
		router.replace("/admin/login");
		router.refresh();
	}

	const pendingName = pendingDelete?.pathname.split("/").pop() ?? "this file";

	return (
		<div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-10">
			<div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-semibold uppercase tracking-widest text-primary">
						Workshop admin
					</p>
					<h1 className="font-display text-3xl font-extrabold uppercase md:text-4xl">
						Gallery media
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						Upload photos &amp; videos. They appear on the public Gallery page.
					</p>
				</div>
				<div className="flex flex-wrap gap-2">
					<label className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50">
						<input
							type="file"
							accept="image/*,video/*"
							multiple
							className="hidden"
							onChange={onUpload}
							disabled={uploading}
						/>
						{uploading ? (
							<Loader2 className="h-4 w-4 animate-spin" />
						) : (
							<Upload className="h-4 w-4" />
						)}
						{uploading ? "Uploading…" : "Upload media"}
					</label>
					<Button variant="outline" className="gap-2" onClick={onLogout}>
						<LogOut className="h-4 w-4" />
						Logout
					</Button>
				</div>
			</div>

			{error && (
				<p className="mb-4 border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">
					{error}
				</p>
			)}
			{message && (
				<p className="mb-4 border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">
					{message}
				</p>
			)}

			{items.length === 0 ? (
				<div className="border border-dashed border-border py-20 text-center text-muted-foreground">
					No media yet. Upload photos or videos to get started.
				</div>
			) : (
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{items.map((item) => (
						<article
							key={item.url}
							className="overflow-hidden border border-border bg-card"
						>
							<div className="relative aspect-video bg-muted">
								{item.kind === "image" ? (
									<Image
										src={item.url}
										alt={item.pathname}
										fill
										className="object-cover"
										sizes="(max-width:768px) 100vw, 25vw"
										unoptimized
									/>
								) : (
									<video
										src={item.url}
										className="h-full w-full object-cover"
										controls
										muted
										playsInline
										preload="metadata"
									/>
								)}
							</div>
							<div className="flex items-start justify-between gap-2 p-3">
								<div className="min-w-0">
									<p className="flex items-center gap-1.5 truncate text-xs font-medium">
										{item.kind === "image" ? (
											<ImageIcon className="h-3.5 w-3.5 text-primary" />
										) : (
											<Film className="h-3.5 w-3.5 text-primary" />
										)}
										<span className="truncate">
											{item.pathname.split("/").pop()}
										</span>
									</p>
									<p className="mt-1 text-[11px] text-muted-foreground">
										{new Date(item.uploadedAt).toLocaleString()}
									</p>
								</div>
								{!item.url.startsWith("/gallery/seed-") ? (
									<Button
										size="icon"
										variant="ghost"
										className="shrink-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
										onClick={() => setPendingDelete(item)}
										aria-label="Delete"
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								) : (
									<span className="shrink-0 rounded bg-muted px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
										Seed
									</span>
								)}
							</div>
						</article>
					))}
				</div>
			)}

			<Dialog
				open={!!pendingDelete}
				onOpenChange={(open) => {
					if (!open && !deleting) setPendingDelete(null);
				}}
			>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>Delete media?</DialogTitle>
						<DialogDescription>
							This permanently removes{" "}
							<span className="font-medium text-foreground">{pendingName}</span>{" "}
							from the gallery. This action cannot be undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							variant="outline"
							onClick={() => setPendingDelete(null)}
							disabled={deleting}
						>
							Cancel
						</Button>
						<Button
							variant="destructive"
							onClick={confirmDelete}
							disabled={deleting}
							className="gap-2"
						>
							{deleting ? (
								<Loader2 className="h-4 w-4 animate-spin" />
							) : (
								<Trash2 className="h-4 w-4" />
							)}
							{deleting ? "Deleting…" : "Delete"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
