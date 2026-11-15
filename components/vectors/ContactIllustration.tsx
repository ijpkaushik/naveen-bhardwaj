export default function ContactIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 420 340"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			<circle cx="210" cy="170" r="140" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
			<circle cx="210" cy="170" r="100" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />

			{/* phone body */}
			<rect x="150" y="60" width="120" height="220" rx="18" stroke="currentColor" strokeWidth="3.5" />
			<path d="M190 78h40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
			<circle cx="210" cy="250" r="10" stroke="currentColor" strokeWidth="3" />

			{/* chat bubble */}
			<path
				d="M290 100h90v58H320l-14 16v-16h-16V100z"
				stroke="#F97316"
				strokeWidth="3.5"
				strokeLinejoin="round"
			/>
			<path d="M310 122h50M310 138h34" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />

			{/* pin */}
			<path
				d="M80 120c0-22 18-40 40-40s40 18 40 40c0 28-40 70-40 70S80 148 80 120z"
				stroke="#F97316"
				strokeWidth="3.5"
			/>
			<circle cx="120" cy="120" r="12" stroke="#F97316" strokeWidth="3" />

			{/* signal arcs */}
			<path
				d="M300 210c16 8 16 32 0 40M320 198c28 14 28 56 0 70"
				stroke="#F97316"
				strokeWidth="3"
				strokeLinecap="round"
				opacity="0.75"
			/>
		</svg>
	);
}
