const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				black: colors.black,
				white: colors.white,
				gray: colors.gray,
				emerald: colors.emerald,
				indigo: colors.indigo,
				yellow: colors.yellow,

				primary: {
					purple: "#36008D",
					green: "#00c9B8",
					yellow: "#fcd200",
					pink: "#ff83c1",
					red: "#fe5e54",
					gray: "#e2e0e5",
				},
			},
		},
	},
	plugins: [],
};
