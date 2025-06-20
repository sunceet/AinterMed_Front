/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "2p": "0.02em",
      },
      fontFamily: {
        involve: ["Involve", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
};
