/** @type {import('tailwindcss').Config} */
export default {
  content: [
       "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
      'custom': '0 3px 5px steelblue',
    },
    textShadow: {
      'custom': '2px 2px steelblue',
    },
    },
  },
  plugins: [],
}

