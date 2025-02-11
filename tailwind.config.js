/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				modam: ["Modam"],
			},
			fontWeight: {
				extralight: 200,
				light: 300,
				regular: 400,
        medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				black: 900,
			},

			colors: {
				primary: "#417F56",

				tint1: "#B7D9D6",
				tint2: "#9FCDC9",
				tint3: "#87C1BB",
				tint4: "#6FB4AD",
				tint5: "#57A7A0",
				tint6: "#3F9B92",
				tint7: "#278F85",

				shade1: "#396F4B",
				shade2: "#315F41",
				shade3: "#294F36",
				shade4: "#21402B",
				shade5: "#183020",
				shade6: "#102016",

				neutral1: "#FAFAFA",
				neutral2: "#F6F6F6",
				neutral3: "#EFEFEF",
				neutral4: "#E1E1E1",
				neutral5: "#D9D9D9",
				neutral6: "#CBCBCB",
				neutral7: "#ADADAD",
				neutral8: "#909090",
				neutral9: "#717171",
				neutral10: "#505050",
				neutral11: "#353535",
				neutral12: "#212121",
				neutral13: "#121212",
				black: "#121212",

				error: "#ED2E2E",
				bgError: "#FFF2F2",
			},

			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					md: "3.5rem",
				},
			},

			screens: {
				xs: "470px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				xxl: "1928px",
			},
		},
	},
	plugins: [],
};

