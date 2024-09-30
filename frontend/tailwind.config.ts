import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palatino: ['"Palatino Linotype"', '"Book Antiqua"', 'Palatino', 'serif'],
        handwriting: ['Brush Script MT', 'cursive'],
        lora: ['Lora', 'serif'],
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#4C5B6F",
        customPurple: "#7E60BF",
      },
    },
  },
  plugins: [],
};
export default config;
