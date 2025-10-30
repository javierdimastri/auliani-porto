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
        background: "var(--background)",
        foreground: "var(--foreground)",
        pink: {
          primary: "var(--pink-primary)",
          light: "var(--pink-light)",
          dark: "var(--pink-dark)",
        },
        purple: "var(--purple)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        accent: "var(--accent)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
