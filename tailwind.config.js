/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary-blue': 'hsl(231, 69%, 60%)',
      'primary-red': 'hsl(0, 94%, 66%)',
      'neutral-blue': 'hsl(229, 31%, 21%)',
      'neutral-gray': 'hsl(0, 0%, 97%)',
    },
    },
  },
  plugins: [],
}