/** @type {import('tailwindcss').Config} */
import CornerSmoothing from 'tailwind-corner-smoothing'

const tailwind = {
  content: ['./src/**/*.{ts,html,css}', './dist/**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: setColors('primary'),
      },
      fontFamily: {
        custom: ['Poppins', 'Helvetica Neue', 'IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [CornerSmoothing],
  safelist: ['group/query'],
}

function setColors(color) {
  return {
    50: `rgb(var(--${color}-50))`,
    100: `rgb(var(--${color}-100))`,
    200: `rgb(var(--${color}-200))`,
    300: `rgb(var(--${color}-300))`,
    400: `rgb(var(--${color}-400))`,
    500: `rgb(var(--${color}-500))`,
    600: `rgb(var(--${color}-600))`,
    700: `rgb(var(--${color}-700))`,
    800: `rgb(var(--${color}-800))`,
    900: `rgb(var(--${color}-900))`,
    950: `rgb(var(--${color}-950))`,
  }
}

export default tailwind
