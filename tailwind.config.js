module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				grotesk: ["'Space Grotesk'", 'sans-serif']
			},
			colors: {
				blurple: '#5865f2',
				apple: '#57f287',
				bee: '#fee75c',
				fuchsia: '#eb459e',
				carnelian: '#ed4245',
				black: '#23272a',
				'twitter-blue': 'rgb(29 155 240)',
				'twitter-dark-bg': 'rgb(0 0 0 )',
				'twitter-dark-text': 'rgb(231 233 234)',
				'twitter-white-bg': 'rgb(255 255 255)',
				'twitter-white-text': 'rgb(15 20 25)',
				'twitter-white-text-grayed': 'rgb(83 100 113)',
				'twitter-olive': '#00ba7c',
				'twitter-candy-pink': '#f91880'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
