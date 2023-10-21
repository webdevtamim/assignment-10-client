/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head-bg': "url('assets/header-bg.jpg')",
        'foot-bg': "url('assets/footer-bg.png')",
        'food-section': "url('assets/foodSection.jpg')",
      },
      fontFamily: {
        lobster: "'Lobster Two', sans-serif",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black"],
  },
}

