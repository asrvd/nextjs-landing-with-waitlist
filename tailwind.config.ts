import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
      },
      animation: {
        "rotate-gradient": "rotate-gradient 1s linear infinite",
      },
      keyframes: {
        "rotate-gradient": {
          "0%": {
            backgroundImage:
              "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          },
          "50%": {
            backgroundImage:
              "linear-gradient(to top left, var(--tw-gradient-stops))",
          },
          "100%": {
            backgroundImage:
              "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
