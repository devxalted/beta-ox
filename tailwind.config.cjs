const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: false
	},
	theme: {
		fontFamily: {
			sans: ['Lato']
		},
		extend: {
			screens: {
				'3xl':'3000px'
			},
			fontFamily: {
				name: ['Covered By Your Grace']
			},
			colors: {
				primary: {
					'main': '#f6ce6c',
					'secondary-light': '#f8d889',
					// 'secondary-light': '#f8d889',
					// 'secondary-dark': '#ddb961'
					'secondary-dark': '#c5a556'
				}
			}
		}
	},

	plugins: [
		require("daisyui")
	]
};

module.exports = config;
