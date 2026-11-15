export default function ServicesIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 440 360"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			<circle cx="220" cy="180" r="145" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
			<circle cx="220" cy="180" r="105" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />

			{/* central gear */}
			<circle cx="220" cy="180" r="48" stroke="#F97316" strokeWidth="3.5" />
			<circle cx="220" cy="180" r="22" stroke="#F97316" strokeWidth="3" />
			{[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
				const rad = (deg * Math.PI) / 180;
				const x1 = 220 + Math.cos(rad) * 48;
				const y1 = 180 + Math.sin(rad) * 48;
				const x2 = 220 + Math.cos(rad) * 62;
				const y2 = 180 + Math.sin(rad) * 62;
				return (
					<path
						key={deg}
						d={`M${x1} ${y1}L${x2} ${y2}`}
						stroke="#F97316"
						strokeWidth="6"
						strokeLinecap="round"
					/>
				);
			})}

			{/* AC unit */}
			<g>
				<rect x="48" y="70" width="70" height="86" rx="6" stroke="currentColor" strokeWidth="3" />
				<path
					d="M60 92h46M60 108h46M60 124h28"
					stroke="currentColor"
					strokeWidth="2.5"
					strokeLinecap="round"
					opacity="0.8"
				/>
				<circle cx="96" cy="134" r="8" stroke="#F97316" strokeWidth="2.5" />
			</g>

			{/* washing machine */}
			<g>
				<rect x="330" y="60" width="70" height="90" rx="6" stroke="currentColor" strokeWidth="3" />
				<circle cx="365" cy="115" r="24" stroke="#F97316" strokeWidth="3" />
				<circle cx="365" cy="115" r="10" stroke="#F97316" strokeWidth="2" />
				<circle cx="345" cy="78" r="3" fill="#F97316" />
				<circle cx="356" cy="78" r="3" fill="#F97316" />
			</g>

			{/* geyser */}
			<g>
				<rect x="50" y="220" width="52" height="80" rx="8" stroke="currentColor" strokeWidth="3" />
				<circle cx="76" cy="250" r="14" stroke="#F97316" strokeWidth="2.5" />
				<path d="M76 242v16M68 250h16" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
				<path d="M64 300v10M88 300v10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
			</g>

			{/* electrical bolt panel */}
			<g>
				<rect x="330" y="220" width="70" height="80" rx="6" stroke="currentColor" strokeWidth="3" />
				<path
					d="M365 238 L350 262 H362 L348 290"
					stroke="#F97316"
					strokeWidth="3.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* wrench */}
			<g transform="translate(180 290) rotate(-20)">
				<path
					d="M8 8a14 14 0 0018 18L48 46l8-8L34 18A14 14 0 008 8z"
					stroke="#F97316"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
}
