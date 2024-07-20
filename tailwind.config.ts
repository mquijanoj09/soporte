import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-xl": "0 20px 40px rgba(0, 0, 0, 0.4)",
      },
      colors: {
        main: "#aa0000",
        secondary: "#2b122b",
        lighterMain: "#c44d4d",
        lighterSecondary: "#4a5568",
        darkerMain: "#770000",
        darkerSecondary: "#1a202c",
        gray: "#a3a3a3",
        lighterGray: "#edf3f4",
      },
    },
  },
};
export default config;
