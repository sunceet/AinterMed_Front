/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        about1: "url('/assets/svg/AboutUsBlock1.svg')",
        about2: "url('/assets/svg/AboutUsBlock2.svg')",
      },
      fontFamily: {
        involve: ['"Involve"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
