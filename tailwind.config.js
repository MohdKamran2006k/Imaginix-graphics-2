/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        Secondry: ['"Source Sans 3"', "sans-serif"],
      },
      colors: {
        primary: "#51af74",
        outline: "grey",
        button: "#dc2b45",
      },
    },
  },
  plugins: [],
};
