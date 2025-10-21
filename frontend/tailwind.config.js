export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFC107",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
