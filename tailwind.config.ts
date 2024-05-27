import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "futura-md-bt": "'Futura Md BT', sans-serif",
      },
      colors: { 
        dukiaBlue: "#1c254e",
        dukiaGold: "#d5b16a",
        dukiaGrey: "#2a303c",
      }
    },
  },
  plugins: [],
};
export default config;
