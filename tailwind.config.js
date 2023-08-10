/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7ed957",
				secondary: "#f9f9f9",
			},
		},
	},
	plugins: [],
};
