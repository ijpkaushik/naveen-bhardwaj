import { cn } from "@/lib/utils";

type IconProps = {
	className?: string;
};

export function AcIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="6" y="18" width="52" height="28" rx="4" stroke="currentColor" strokeWidth="2.5" />
			<path d="M12 28h40M12 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<circle cx="46" cy="36" r="4" stroke="currentColor" strokeWidth="2" />
			<path d="M20 50c4 4 8 4 12 0M32 50c4 4 8 4 12 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<path d="M32 10v6M26 12l3 4M38 12l-3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

export function ElectricalIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<path
				d="M34 6L18 34h12l-4 24 20-32H34L38 6z"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinejoin="round"
			/>
			<path d="M12 52h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
		</svg>
	);
}

export function GeyserIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="18" y="8" width="28" height="44" rx="6" stroke="currentColor" strokeWidth="2.5" />
			<circle cx="32" cy="28" r="8" stroke="currentColor" strokeWidth="2" />
			<path d="M32 22v12M28 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<path d="M26 52v4M38 52v4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
			<path d="M24 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
		</svg>
	);
}

export function WashingMachineIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="12" y="6" width="40" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" />
			<circle cx="32" cy="34" r="14" stroke="currentColor" strokeWidth="2.5" />
			<circle cx="32" cy="34" r="7" stroke="currentColor" strokeWidth="2" />
			<circle cx="20" cy="14" r="2.5" fill="currentColor" />
			<circle cx="28" cy="14" r="2.5" fill="currentColor" />
			<path d="M36 14h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

export function FridgeIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="16" y="4" width="32" height="56" rx="3" stroke="currentColor" strokeWidth="2.5" />
			<path d="M16 28h32" stroke="currentColor" strokeWidth="2.5" />
			<path d="M42 14v8M42 36v12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
			<path d="M22 58v2M42 58v2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
		</svg>
	);
}

export function FreezerIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="8" y="16" width="48" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" />
			<path d="M8 28h48" stroke="currentColor" strokeWidth="2" />
			<path d="M20 10v6M32 8v8M44 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<path d="M24 38h16M28 34v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}

export function RoIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<path
				d="M32 8c-8 10-14 18-14 26a14 14 0 0028 0c0-8-6-16-14-26z"
				stroke="currentColor"
				strokeWidth="2.5"
				strokeLinejoin="round"
			/>
			<path d="M32 28v12M26 36h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
			<path d="M18 54h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.45" />
		</svg>
	);
}

export function AmcIcon({ className }: IconProps) {
	return (
		<svg viewBox="0 0 64 64" fill="none" className={cn("h-full w-full", className)} aria-hidden>
			<rect x="10" y="12" width="44" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" />
			<path d="M10 24h44" stroke="currentColor" strokeWidth="2.5" />
			<path d="M22 8v8M42 8v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
			<path d="M22 34l6 6 14-14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

export const serviceIconMap = {
	ac: AcIcon,
	electrical: ElectricalIcon,
	geyser: GeyserIcon,
	"washing-machine": WashingMachineIcon,
	refrigerator: FridgeIcon,
	"deep-freezer": FreezerIcon,
	ro: RoIcon,
	amc: AmcIcon,
} as const;

export type ServiceIconId = keyof typeof serviceIconMap;
