module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				grotesk: ["'Space Grotesk'", 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			},
			colors: {
				'spotify-green': '#1ed760',
				blurple: '#5865f2',
				apple: '#57f287',
				bee: '#fee75c',
				fuchsia: '#eb459e',
				carnelian: '#ed4245',
				dema: '#d8ff43',
				'dema-dark': '#99c100',
				'dema-blue': '#1C58FD',
				black: '#23272a',
				'twitter-blue': 'rgb(29 155 240)',
				'twitter-dark-bg': 'rgb(0 0 0 )',
				'twitter-dark-text': 'rgb(231 233 234)',
				'twitter-white-bg': 'rgb(255 255 255)',
				'twitter-white-text': 'rgb(15 20 25)',
				'twitter-white-text-grayed': 'rgb(83 100 113)',
				'twitter-olive': '#00ba7c',
				'twitter-candy-pink': '#f91880',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				jmail: {
					surface: 'var(--color-jmail-surface)',
					'surface-alt': 'var(--color-jmail-surface-alt)',
					'surface-hover': 'var(--color-jmail-surface-hover)',
					'surface-selected': 'var(--color-jmail-surface-selected)',
					'surface-selected-soft': 'var(--color-jmail-surface-selected-soft)',
					text: 'var(--color-jmail-text)',
					'text-secondary': 'var(--color-jmail-text-secondary)',
					'text-muted': 'var(--color-jmail-text-muted)',
					'text-dim': 'var(--color-jmail-text-dim)',
					'text-dimmer': 'var(--color-jmail-text-dimmer)',
					border: 'var(--color-jmail-border)',
					'border-light': 'var(--color-jmail-border-light)',
					'border-lighter': 'var(--color-jmail-border-lighter)',
					primary: 'var(--color-jmail-primary)',
					'primary-hover': 'var(--color-jmail-primary-hover)',
					'button-border': 'var(--color-jmail-button-border)',
					notable: 'var(--color-jmail-notable)',
					'secondary-container': 'var(--color-jmail-secondary-container)',
					'on-secondary-container': 'var(--color-jmail-on-secondary-container)',
					flight: 'var(--color-jmail-flight)',
					email: 'var(--color-jmail-email)',
					document: 'var(--color-jmail-document)',
					imessage: 'var(--color-jmail-imessage)',
					appointment: 'var(--color-jmail-appointment)',
				}
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			keyframes: {
				'spinner-spin': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0.15' }
				}
			},
			animation: {
				'spinner-spin': 'spinner-spin 1.2s linear infinite'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
