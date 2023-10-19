/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foot-bg': "url('assets/footer-bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}

