"use client";

import { cn } from "@/lib/utils";

export default function HeroIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 640 520"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("h-full w-full", className)}
			aria-hidden
		>
			<defs>
				<linearGradient id="heroGlow" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
					<stop offset="100%" stopOpacity="0" />
				</linearGradient>
			</defs>

			{/* ambient rings */}
			<circle cx="340" cy="260" r="210" stroke="currentColor" strokeWidth="1" opacity="0.08" />
			<circle cx="340" cy="260" r="160" stroke="currentColor" strokeWidth="1" opacity="0.12" />
			<ellipse cx="320" cy="470" rx="210" ry="22" fill="currentColor" opacity="0.07" />

			{/* city skyline silhouette */}
			<path
				d="M40 300h36v100H40zM86 260h44v140H86zM140 280h50v120H140zM200 240h40v160H200zM250 270h56v130H250z"
				stroke="currentColor"
				strokeWidth="2"
				opacity="0.22"
			/>
			<path
				d="M520 290h40v110H520zM570 250h36v150H570z"
				stroke="currentColor"
				strokeWidth="2"
				opacity="0.22"
			/>

			{/* modern home */}
			<path
				d="M160 250 L320 110 L480 250 V410 H160 Z"
				stroke="currentColor"
				strokeWidth="3.5"
				strokeLinejoin="round"
			/>
			<path d="M160 250 L320 110 L480 250" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
			{/* roof accent */}
			<path d="M300 128 L420 230" stroke="#F97316" strokeWidth="3" strokeLinecap="round" opacity="0.85" />

			{/* door */}
			<rect x="286" y="300" width="68" height="110" rx="6" stroke="currentColor" strokeWidth="3" />
			<circle cx="338" cy="358" r="4" fill="#F97316" />

			{/* windows with orange glow */}
			<rect x="190" y="270" width="58" height="48" rx="3" stroke="currentColor" strokeWidth="2.5" fill="url(#heroGlow)" />
			<path d="M219 270v48M190 294h58" stroke="currentColor" strokeWidth="2" opacity="0.55" />
			<rect x="392" y="270" width="58" height="48" rx="3" stroke="currentColor" strokeWidth="2.5" fill="url(#heroGlow)" />
			<path d="M421 270v48M392 294h58" stroke="currentColor" strokeWidth="2" opacity="0.55" />

			{/* outdoor AC — floating */}
			<g className="animate-float" style={{ transformOrigin: "120px 360px" }}>
				<rect x="78" y="318" width="78" height="96" rx="8" stroke="#F97316" strokeWidth="3.5" />
				<path
					d="M92 340h50M92 356h50M92 372h50M92 388h34"
					stroke="#F97316"
					strokeWidth="2.5"
					strokeLinecap="round"
					opacity="0.9"
				/>
				<circle cx="132" cy="392" r="10" stroke="#F97316" strokeWidth="2.5" />
				<path d="M117 392h30" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
				{/* airflow */}
				<path
					d="M55 340c-8 6-8 16 0 22M48 330c-12 10-12 28 0 38"
					stroke="#F97316"
					strokeWidth="2"
					strokeLinecap="round"
					opacity="0.55"
				/>
			</g>

			{/* indoor split AC */}
			<g>
				<rect x="360" y="208" width="112" height="32" rx="8" stroke="#F97316" strokeWidth="3.5" />
				<path d="M378 224h76" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
				<path
					d="M378 248c8 12 16 12 24 0M410 248c8 12 16 12 24 0M442 248c8 12 16 12 24 0"
					stroke="#F97316"
					strokeWidth="2.5"
					strokeLinecap="round"
					opacity="0.75"
				/>
			</g>

			{/* electrical panel */}
			<g transform="translate(490 300)">
				<rect x="0" y="0" width="70" height="90" rx="6" stroke="#F97316" strokeWidth="3" />
				<path d="M14 22h42M14 38h42M14 54h28" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" />
				<circle cx="52" cy="68" r="6" stroke="#F97316" strokeWidth="2" />
			</g>

			{/* large bolt */}
			<path
				d="M560 70 L522 150 H558 L512 250"
				stroke="#F97316"
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			{/* wrench + screwdriver crossed */}
			<g transform="translate(470 400) rotate(-25)">
				<path
					d="M8 8a14 14 0 0018 18L48 44l8-8L34 18A14 14 0 008 8z"
					stroke="#F97316"
					strokeWidth="3"
					strokeLinejoin="round"
				/>
			</g>
			<g transform="translate(500 390) rotate(35)">
				<path d="M10 10v48M4 16h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.85" />
				<path d="M10 58l-6 10h12l-6-10z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" opacity="0.85" />
			</g>

			{/* accent dots */}
			{[
				[48, 90],
				[70, 120],
				[40, 150],
				[600, 280],
				[620, 320],
				[590, 360],
			].map(([x, y]) => (
				<circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" fill="#F97316" opacity="0.5" />
			))}
		</svg>
	);
}
