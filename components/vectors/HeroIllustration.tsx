"use client";

import { cn } from "@/lib/utils";

export default function HeroIllustration({ className }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 640 560"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("h-full w-full", className)}
			aria-hidden
		>
			{/* backdrop disc */}
			<circle cx="330" cy="290" r="230" fill="rgba(255,255,255,0.04)" />
			<circle cx="330" cy="290" r="180" fill="rgba(249,115,22,0.08)" />

			{/* ground */}
			<ellipse cx="320" cy="500" rx="240" ry="28" fill="rgba(255,255,255,0.08)" />

			{/* house block */}
			<path d="M140 250 L320 100 L500 250 V460 H140 Z" fill="rgba(255,255,255,0.08)" />
			<path
				d="M140 250 L320 100 L500 250 V460 H140 Z"
				stroke="rgba(255,255,255,0.55)"
				strokeWidth="3"
				strokeLinejoin="round"
			/>
			{/* roof fill */}
			<path d="M140 250 L320 100 L500 250 H140 Z" fill="rgba(249,115,22,0.18)" />
			<path
				d="M140 250 L320 100 L500 250"
				stroke="#F97316"
				strokeWidth="4"
				strokeLinejoin="round"
			/>

			{/* door */}
			<rect x="282" y="340" width="76" height="120" rx="6" fill="rgba(11,31,58,0.45)" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" />
			<circle cx="340" cy="404" r="5" fill="#F97316" />

			{/* windows */}
			<rect x="180" y="290" width="70" height="58" rx="4" fill="rgba(249,115,22,0.25)" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
			<path d="M215 290v58M180 319h70" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
			<rect x="390" y="290" width="70" height="58" rx="4" fill="rgba(249,115,22,0.25)" stroke="rgba(255,255,255,0.55)" strokeWidth="2.5" />
			<path d="M425 290v58M390 319h70" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />

			{/* indoor split AC */}
			<g>
				<rect x="360" y="220" width="120" height="36" rx="10" fill="#F97316" />
				<rect x="372" y="232" width="96" height="8" rx="4" fill="rgba(255,255,255,0.35)" />
				{/* cool air */}
				<path
					d="M380 268c10 14 20 14 30 0M420 268c10 14 20 14 30 0M460 268c8 12 16 12 24 0"
					stroke="#F97316"
					strokeWidth="3"
					strokeLinecap="round"
					opacity="0.7"
				/>
			</g>

			{/* outdoor condenser — floating */}
			<g className="animate-float" style={{ transformOrigin: "110px 380px" }}>
				<rect x="58" y="330" width="100" height="120" rx="12" fill="rgba(249,115,22,0.95)" />
				<rect x="72" y="348" width="72" height="12" rx="3" fill="rgba(255,255,255,0.3)" />
				<rect x="72" y="370" width="72" height="12" rx="3" fill="rgba(255,255,255,0.25)" />
				<rect x="72" y="392" width="72" height="12" rx="3" fill="rgba(255,255,255,0.2)" />
				<circle cx="108" cy="430" r="14" fill="rgba(11,31,58,0.35)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
				<path d="M96 430h24" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" />
				{/* airflow left */}
				<path
					d="M40 360c-10 8-10 22 0 30M30 348c-16 12-16 40 0 52"
					stroke="#F97316"
					strokeWidth="3"
					strokeLinecap="round"
					opacity="0.55"
				/>
			</g>

			{/* technician silhouette at work */}
			<g>
				{/* body */}
				<circle cx="250" cy="380" r="22" fill="rgba(255,255,255,0.9)" />
				{/* hard hat */}
				<path d="M228 372c0-18 10-30 22-30s22 12 22 30" fill="#F97316" />
				<path d="M222 372h56" stroke="#F97316" strokeWidth="5" strokeLinecap="round" />
				{/* torso */}
				<path d="M218 410c8-28 56-28 64 0v50H218v-50z" fill="rgba(255,255,255,0.85)" />
				{/* overall accent */}
				<path d="M236 420v30M264 420v30" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
				{/* arm to AC */}
				<path d="M218 430c-24 6-40 24-44 44" stroke="rgba(255,255,255,0.85)" strokeWidth="10" strokeLinecap="round" />
				{/* tool */}
				<path d="M160 470l28-18" stroke="#F97316" strokeWidth="5" strokeLinecap="round" />
			</g>

			{/* bolt badge */}
			<g transform="translate(500 120)">
				<circle cx="40" cy="40" r="42" fill="rgba(249,115,22,0.2)" />
				<circle cx="40" cy="40" r="32" fill="#F97316" />
				<path
					d="M46 18 L30 42 H44 L34 66"
					stroke="white"
					strokeWidth="5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>

			{/* floating gauge */}
			<g transform="translate(500 320)">
				<circle cx="36" cy="36" r="36" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
				<circle cx="36" cy="36" r="24" stroke="#F97316" strokeWidth="3" />
				<path d="M36 36 L52 24" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
			</g>
		</svg>
	);
}
