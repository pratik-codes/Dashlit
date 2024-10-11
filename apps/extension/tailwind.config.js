const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
  	container: {
  		center: 'true',
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			grey1: '#282828',
  			grey2: '#181818',
  			light_grey: '#86868B',
  			purple: '#5b21b6',
  			purpledark: '#3730a3',
  			black: 'black',
  			transparent: 'transparent',
  			current: 'currentColor',
  			white: '#ffffff',
  			'charcol-gray': '#36454F',
  			midnight: '#121063',
  			metal: '#565584',
  			tahiti: '#3ab7bf',
  			silver: '#ecebff',
  			'bubble-gum': '#ff77e9',
  			bermuda: '#78dcca',
  			'off-white': '#f7f8f8',
  			'transparent-white': 'rgba(255, 255, 255, 0.08)',
  			background: 'hsl(var(--background))',
  			grey: '#858699',
  			'grey-dark': '#222326',
  			'primary-text': '#b4bcd0',
  			indigo: '#663FD6',
  			green: '#22c55e',
  			red: '#be123c',
  			'orange-card': '#E5B976',
  			'red-card': '#CB9DA3',
  			darkorange: '#66461B',
  			darkred: '#5C2429',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
  			common: '23px',
  			default: '0.25rem',
  			xl: '0.75rem',
  			'2xl': '1rem',
  			full: '9999px'
  		},
  		fontFamily: {
  			sans: ["var(--font-sans)", ...fontFamily.sans]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

