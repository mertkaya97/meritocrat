/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			"base-color": "#ffffff",
			"main-color": "#9cbede",
			"color-1": "#222222",
			"color-2": "#181924",
			"color-3": "#fcf4ea",
			"color-4": "rgba(255, 255, 255, 0.12)",
			"color-5": "#313131",
			"color-6": "#DEDEDE",
		},
		fontFamily: {
			ledger: "Ledger",
			nunito: "Nunito Sans",
			cairo: "Cairo",
		},
		container: {
			center: true,
			padding: "10px",
		},
	},
	plugins: [],
};
