/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./bulid/*.html"],
  darkMode:'class',
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
