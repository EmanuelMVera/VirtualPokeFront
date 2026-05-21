/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "type-flying": "#8367ff",
        "type-rock": "#ce8236",
        "type-grass": "#6dff24",
        "type-fire": "#ff7f00",
        "type-water": "#1dacff",
        "type-electric": "#ffd700",
        "type-psychic": "#ff7e9a",
        "type-ice": "#63d0f5",
        "type-dragon": "#7a50ce",
        "type-dark": "#313131",
        "type-fairy": "#fa7bfa",
        "type-normal": "#b8a172",
        "type-poison": "#bd4aa0",
        "type-bug": "#8bb92d",
        "type-ghost": "#5c6975",
        "type-steel": "#747373",
        "type-fighting": "#ff6a6a",
        "type-ground": "#d89844",
      },
    },
  },
  plugins: [],
};
