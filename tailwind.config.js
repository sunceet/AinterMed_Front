/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        about1: "url('/assets/svg/AboutUsBlock1.svg')",
        about2: "url('/assets/svg/AboutUsBlock2.svg')",
      },
      fontFamily: {
        involve: ["Involve", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      keyframes: {
        fadeDownBlur: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
            filter: "blur(8px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
      },
      animation: {
        fadeDownBlur: "fadeDownBlur 1s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
