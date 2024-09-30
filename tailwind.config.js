/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "forest",
    ],
    darkTheme: "forest",
  },
  plugins: [require('daisyui')],
}

