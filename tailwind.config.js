/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-700': '#633BBC',
        'purple-300': '#8257E5'
      },
      fontFamily: {
        'mono': ['Roboto Mono', 'monospace'],
        'tlou': ['AC Compacta', 'sans serif']
      },
      keyframes: {
        'blink': {
          '0%, 100%': { color: 'transparent' },
          '50%': { color: 'var(--blink-color)' },
        },
      },
      animation: {
        'blink': 'blink .75s step-end infinite'
      }
    },
  },
  plugins: [],
}

