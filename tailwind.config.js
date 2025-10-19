/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f6610',
        secondary: '#1e3a8a', // Dark bluish
        accent: '#6b7280',    // Gray
      },
    },
  },
  plugins: [],
}