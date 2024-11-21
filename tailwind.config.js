/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'chart-image' : "url('/src/assets/beforeFooter/chart.png')",
        'ellipse-image' : "url('/src/assets/beforeFooter/Ellipses.png')"
      }
    },
  },
  plugins: [],
}