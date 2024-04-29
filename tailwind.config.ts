import type { Config } from "tailwindcss";
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        max: "1224px",
      },
    },
    extend: {
      colors: {
        primary: "#cecece",
        secondary: "#ABC1E1",
        tertiary: "#313E51",
        card: "#3B4D66",
        switch: "#A729F5",
      },
      fontFamily: {
        primary: ["var(--rubik-font)", "sans-serif"],
      },
      borderRadius: {
        lg: "24px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
