export default function ServicesIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 480 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			<circle cx="240" cy="200" r="170" fill="rgba(255,255,255,0.04)" />
			<circle cx="240" cy="200" r="120" fill="rgba(249,115,22,0.08)" />

			{/* center badge */}
			<circle cx="240" cy="200" r="56" fill="#F97316" />
			{/* wrench in center */}
			<path
				d="M222 178a18 18 0 0124 24l28 28 12-12-28-28a18 18 0 01-24-24l8 8-8 8z"
				fill="white"
			/>
			<path d="M248 204l28 28" stroke="white" strokeWidth="8" strokeLinecap="round" />

			{/* AC tile — top left */}
			<g>
				<rect x="48" y="48" width="112" height="112" rx="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
				<rect x="68" y="72" width="72" height="22" rx="6" fill="#F97316" />
				<path
					d="M78 108c8 10 16 10 24 0M102 108c8 10 16 10 24 0"
					stroke="#F97316"
					strokeWidth="3"
					strokeLinecap="round"
					opacity="0.85"
				/>
			</g>

			{/* electrical tile — top right */}
			<g>
				<rect x="320" y="48" width="112" height="112" rx="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
				<path
					d="M386 72 L360 112 H382 L356 152"
					stroke="#F97316"
					strokeWidth="6"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* washing machine — bottom left */}
			<g>
				<rect x="48" y="240" width="112" height="112" rx="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
				<rect x="68" y="258" width="72" height="78" rx="8" fill="rgba(11,31,58,0.35)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
				<circle cx="104" cy="304" r="22" stroke="#F97316" strokeWidth="4" />
				<circle cx="104" cy="304" r="8" fill="#F97316" />
				<circle cx="80" cy="270" r="4" fill="#F97316" />
				<circle cx="92" cy="270" r="4" fill="rgba(255,255,255,0.5)" />
			</g>

			{/* geyser — bottom right */}
			<g>
				<rect x="320" y="240" width="112" height="112" rx="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
				<rect x="350" y="258" width="52" height="78" rx="12" fill="rgba(11,31,58,0.35)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
				<circle cx="376" cy="290" r="16" stroke="#F97316" strokeWidth="4" />
				<path d="M376 280v20M366 290h20" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
				<path d="M362 336v8M390 336v8" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
			</g>

			{/* connector dots */}
			{[
				[180, 104],
				[300, 104],
				[180, 296],
				[300, 296],
			].map(([x, y]) => (
				<circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#F97316" opacity="0.7" />
			))}
		</svg>
	);
}
