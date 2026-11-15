export default function ContactIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 440 380"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			<circle cx="220" cy="200" r="165" fill="rgba(255,255,255,0.04)" />
			<circle cx="220" cy="200" r="120" fill="rgba(249,115,22,0.08)" />

			{/* smartphone */}
			<rect
				x="150"
				y="50"
				width="140"
				height="280"
				rx="28"
				fill="rgba(255,255,255,0.12)"
				stroke="rgba(255,255,255,0.4)"
				strokeWidth="3"
			/>
			<rect x="164" y="78" width="112" height="196" rx="12" fill="rgba(11,31,58,0.55)" />
			<path
				d="M196 64h48"
				stroke="rgba(255,255,255,0.45)"
				strokeWidth="5"
				strokeLinecap="round"
			/>
			<circle cx="220" cy="298" r="12" stroke="rgba(255,255,255,0.45)" strokeWidth="3" />

			{/* chat bubbles */}
			<rect x="176" y="100" width="80" height="28" rx="10" fill="rgba(255,255,255,0.15)" />
			<rect x="196" y="140" width="64" height="28" rx="10" fill="#25D366" />
			<rect x="176" y="180" width="72" height="28" rx="10" fill="rgba(255,255,255,0.15)" />
			<circle cx="196" cy="230" r="4" fill="#F97316" />
			<circle cx="210" cy="230" r="4" fill="#F97316" opacity="0.7" />
			<circle cx="224" cy="230" r="4" fill="#F97316" opacity="0.4" />

			{/* WhatsApp popup */}
			<path d="M300 90h100v64H336l-16 18v-18H300V90z" fill="#25D366" />
			<path
				d="M318 112h64M318 130h40"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
			/>

			{/* map pin */}
			<path
				d="M70 140c0-28 22-50 50-50s50 22 50 50c0 36-50 90-50 90S70 176 70 140z"
				fill="#F97316"
			/>
			<circle cx="120" cy="138" r="16" fill="rgba(11,31,58,0.55)" />
			<ellipse cx="120" cy="250" rx="28" ry="8" fill="rgba(255,255,255,0.08)" />

			{/* signal arcs */}
			<path
				d="M308 228c16 8 16 36 0 44"
				stroke="#F97316"
				strokeWidth="4"
				strokeLinecap="round"
				opacity="0.55"
			/>
			<path
				d="M324 216c28 14 28 60 0 74"
				stroke="#F97316"
				strokeWidth="4"
				strokeLinecap="round"
				opacity="0.3"
			/>
		</svg>
	);
}
