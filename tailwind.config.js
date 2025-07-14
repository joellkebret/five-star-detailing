/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#121212',
        'secondary-dark': '#1e1e1e',
        'accent-blue': '#008bff',
        'accent-blue-light': '#31c5f4',
        'toronto-blue': '#008bff',
        'toronto-blue-dark': '#0066cc',
        'toronto-blue-light': '#e6f3ff',
        'toronto-blue-text': '#b3d9ff',
        'toronto-dark': '#1f2937',
        'toronto-gray': '#6b7280',
        'toronto-light': '#f3f4f6',
        'accent-gold': '#f59e0b',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 