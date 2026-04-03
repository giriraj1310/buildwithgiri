/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        display: ["'Playfair Display'", "serif"]
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
