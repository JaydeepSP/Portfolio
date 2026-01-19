/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F5F5F5',
          dark: '#0a0a0a'
        },
        'text-primary': {
          light: '#000000',
          dark: '#FFFFFF'
        },
        'text-secondary': {
           light: '#666666',
           dark: '#A3A3A3'
        },
        'card-bg': {
           light: '#FFFFFF',
           dark: '#171717'
        },
      },
      fontFamily: {
         sans: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
         medium: 500,
      }
    },
  },
  plugins: [],
}
