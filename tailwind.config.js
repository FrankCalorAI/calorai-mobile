/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],  
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        coralRed: "#F95341",
        melonMist: "#FDAA8C",
        mangoYellow: "#FFA726",
        mintGreen: "#4BD883",
        malachiteGreen: "#0AC655",
        deepTeal: "#00221B",
        blackCherry: "#49061A",
        blueViolet: "#7843FF",
      },
      fontFamily: {
        inter: ["Inter"],
        interBold: ["InterBold"],
      }      
    },
  },
  plugins: [],
}
