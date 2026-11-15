export default function AboutIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 520 460"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			{/* framing rings */}
			<circle cx="260" cy="230" r="190" stroke="currentColor" strokeWidth="1.5" opacity="0.12" />
			<circle cx="260" cy="230" r="145" stroke="currentColor" strokeWidth="1.5" opacity="0.18" />
			<circle cx="260" cy="230" r="100" stroke="#F97316" strokeWidth="1.5" opacity="0.25" />

			{/* technician hard hat */}
			<path
				d="M210 118c0-28 22-50 50-50s50 22 50 50"
				stroke="currentColor"
				strokeWidth="3.5"
				strokeLinecap="round"
			/>
			<path d="M200 118h120" stroke="#F97316" strokeWidth="3.5" strokeLinecap="round" />
			{/* head */}
			<circle cx="260" cy="148" r="32" stroke="currentColor" strokeWidth="3.5" />

			{/* torso / overalls */}
			<path
				d="M188 290c16-56 128-56 144 0v48H188v-48z"
				stroke="currentColor"
				strokeWidth="3.5"
				strokeLinejoin="round"
			/>
			{/* overall straps */}
			<path d="M220 210v55M300 210v55" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
			<path d="M220 250h80" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />

			{/* arms */}
			<path
				d="M200 230c-28 10-42 40-36 70"
				stroke="currentColor"
				strokeWidth="3.5"
				strokeLinecap="round"
			/>
			<path
				d="M320 230c28 10 42 40 36 70"
				stroke="currentColor"
				strokeWidth="3.5"
				strokeLinecap="round"
			/>

			{/* outdoor AC unit (left) */}
			<g>
				<rect x="56" y="250" width="88" height="110" rx="8" stroke="#F97316" strokeWidth="3.5" />
				<path
					d="M72 278h56M72 298h56M72 318h56M72 338h36"
					stroke="#F97316"
					strokeWidth="2.5"
					strokeLinecap="round"
					opacity="0.9"
				/>
				<circle cx="116" cy="340" r="10" stroke="#F97316" strokeWidth="2.5" />
			</g>

			{/* toolbox (right) */}
			<g>
				<rect x="360" y="300" width="100" height="62" rx="6" stroke="#F97316" strokeWidth="3.5" />
				<path d="M382 300v-16h56v16" stroke="#F97316" strokeWidth="3.5" strokeLinejoin="round" />
				<path d="M378 326h64" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
				<circle cx="410" cy="326" r="3" fill="#F97316" />
			</g>

			{/* wrench in hand area */}
			<g transform="translate(330 330) rotate(40)">
				<path
					d="M6 6a12 12 0 0016 16L40 40l7-7L29 15A12 12 0 006 6z"
					stroke="currentColor"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
			</g>

			{/* verified badge */}
			<g>
				<circle cx="360" cy="96" r="38" stroke="#F97316" strokeWidth="3.5" />
				<circle cx="360" cy="96" r="28" stroke="#F97316" strokeWidth="2" opacity="0.45" />
				<path
					d="M342 96l12 12 24-24"
					stroke="#F97316"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* gauge / meter accent */}
			<g transform="translate(70 120)">
				<circle cx="28" cy="28" r="26" stroke="#F97316" strokeWidth="3" />
				<path d="M28 28 L42 16" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
				<path d="M28 10v6M28 40v6M10 28h6M40 28h6" stroke="#F97316" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
			</g>

			{/* bolt accent top-left */}
			<path
				d="M120 50 L98 90 H118 L90 140"
				stroke="#F97316"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
				opacity="0.85"
			/>
		</svg>
	);
}
