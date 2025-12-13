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
        primary: "white",
        outline: "grey",
        button: "#dc2b45",
        border_Color:"#C5CDDD"
      },
    },
  },
  plugins: [],
};
