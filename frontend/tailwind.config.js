/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#4CAF50",
        primary1Dark: "#2E7D32",
        primary1Light1: "#81C784",
        primary1Light2: "#A5D6A7",
        primary1Light3: "#C8E6C9",
        primary1Light4: "#E8F5E9",
        primaryBg1: "#D3D3D3",
        primaryBg1Light1: "#F5F5F5",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
