import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-navy": "var(--brand-navy)",
				"brand-navy-soft": "var(--brand-navy-soft)",
				"brand-navy-mid": "#314768",
				"brand-sky": "var(--brand-sky)",
				"brand-accent": "var(--brand-accent)",
				"brand-accent-hover": "var(--brand-accent-hover)",
				"copy-muted": "var(--copy-muted)",
				"border-soft": "var(--border-soft)",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Noto Serif", "serif"],
			},
			borderRadius: {
				card: "var(--radius-card)",
			},
			maxHeight: {
				112: "28rem",
			},
			minHeight: {
				90: "22.5rem",
				128: "32rem",
			},
			height: {
				128: "32rem",
			},
			keyframes: {
				"aircraft-slide-next": {
					from: { opacity: "0", transform: "translateX(26px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				"aircraft-slide-prev": {
					from: { opacity: "0", transform: "translateX(-26px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
			},
			animation: {
				"aircraft-slide-next": "aircraft-slide-next 450ms ease-out",
				"aircraft-slide-prev": "aircraft-slide-prev 450ms ease-out",
			},
		},
	},
}

export default config
