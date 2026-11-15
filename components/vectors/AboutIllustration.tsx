import { business } from "@/constants/business";

export default function AboutIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 520 480"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			aria-hidden
		>
			<circle cx="260" cy="250" r="200" fill="rgba(255,255,255,0.04)" />
			<circle cx="260" cy="250" r="150" fill="rgba(249,115,22,0.08)" />
			<ellipse cx="260" cy="430" rx="160" ry="22" fill="rgba(255,255,255,0.08)" />

			{/* outdoor AC */}
			<rect x="70" y="250" width="110" height="140" rx="14" fill="#F97316" />
			<rect x="88" y="274" width="74" height="14" rx="3" fill="rgba(255,255,255,0.3)" />
			<rect x="88" y="300" width="74" height="14" rx="3" fill="rgba(255,255,255,0.25)" />
			<rect x="88" y="326" width="74" height="14" rx="3" fill="rgba(255,255,255,0.2)" />
			<circle cx="125" cy="368" r="16" fill="rgba(11,31,58,0.35)" stroke="rgba(255,255,255,0.45)" strokeWidth="2" />

			{/* hard hat */}
			<path d="M208 148c0-36 24-58 52-58s52 22 52 58" fill="#F97316" />
			<path d="M196 148h128" stroke="#EA580C" strokeWidth="8" strokeLinecap="round" />

			{/* head + body */}
			<circle cx="260" cy="176" r="36" fill="rgba(255,255,255,0.92)" />
			<path d="M246 208h28v16h-28z" fill="rgba(255,255,255,0.75)" />
			<path d="M190 300c14-58 126-58 140 0v90H190v-90z" fill="rgba(255,255,255,0.9)" />
			<path d="M224 240v50M296 240v50" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
			<path d="M224 278h72" stroke="#F97316" strokeWidth="6" strokeLinecap="round" />
			<rect x="238" y="310" width="44" height="28" rx="4" fill="rgba(249,115,22,0.2)" stroke="#F97316" strokeWidth="2" />

			{/* arms */}
			<path d="M200 270c-30 8-48 36-44 70" stroke="rgba(255,255,255,0.9)" strokeWidth="16" strokeLinecap="round" />
			<path d="M320 270c30 8 48 36 44 70" stroke="rgba(255,255,255,0.9)" strokeWidth="16" strokeLinecap="round" />

			{/* wrench */}
			<g transform="translate(350 320) rotate(35)">
				<circle cx="14" cy="14" r="14" fill="#F97316" />
				<circle cx="14" cy="14" r="6" fill="rgba(11,31,58,0.5)" />
				<path d="M24 24 L70 70" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
			</g>

			{/* toolbox */}
			<rect x="340" y="360" width="120" height="70" rx="10" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.35)" strokeWidth="2.5" />
			<path d="M368 360v-18h64v18" stroke="#F97316" strokeWidth="5" strokeLinejoin="round" />
			<path d="M360 390h80" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
			<circle cx="400" cy="390" r="5" fill="#F97316" />

			{/* verified */}
			<circle cx="380" cy="100" r="44" fill="rgba(249,115,22,0.2)" />
			<circle cx="380" cy="100" r="34" fill="#F97316" />
			<path d="M362 100l12 12 24-24" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

			{/* experience chip */}
			<rect x="48" y="96" width="118" height="56" rx="14" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
			<text
				x="107"
				y="132"
				textAnchor="middle"
				fill="#F97316"
				fontSize="22"
				fontWeight="700"
				fontFamily="ui-sans-serif, system-ui, sans-serif"
			>
				{business.yearsExperience}+ YRS
			</text>
		</svg>
	);
}
