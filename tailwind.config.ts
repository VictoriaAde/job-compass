import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_blue: "#2CCCFC",
        dark_custom_blue: "#298dac",
        ivory: "#fffcf0",
        custom_yellow: "#FFCE2E",
        custom_green: "#BDC161",
        light_green: "#ACE1AF",
        light_yellow: "#F4EF95",
        yellowish_green: "#73A83E",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
