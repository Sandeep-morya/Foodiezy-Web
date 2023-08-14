export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7ed957",
				secondary: "#f9f9f9",
				lightblack: "rgba(0,0,0,0.7)",
			},
			animation: {
				splash: "splash-12 0.6s ease forwards",
			},
			keyframes: {
				splash: {
					"0, 40%": {
						background: "#7ed957",
						boxShadow: `0 -18px 0 -8px #7ed957, 16px -8px 0 -8px #7ed957,
            16px 8px 0 -8px #7ed957, 0 18px 0 -8px #7ed957, -16px 8px 0 -8px #7ed957,
            -16px -8px 0 -8px #7ed957`,
					},
					"100%": {
						background: "#7ed957",
						boxShadow: `0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent,
            32px 16px 0 -10px transparent, 0 36px 0 -10px transparent,
            -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent`,
					},
				},
			},
		},
	},
	plugins: [],
};
