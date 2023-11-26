import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
      screens: {
        sm: "100%",
        md: "800px",
        lg: "950px",
        xl: "1100px",
        xxl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-eczar)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#00203F",
        secondary: "#ADEFD1",
        thegray: "#50586C",
        thegray1: "#DCE2F0",
      },
    },
  },
  variants: {
    extend: {
      margin: ["direction", "hover", "active", "group-hover"],
      padding: ["direction", "group-hover"],
      translate: ["direction", "active", "group-hover"],
      inset: ["direction", "focus"],
      borderWidth: ["direction", "active", "group-focus"],
      width: ["hover", "group-hover"],
      height: ["hover"],
      space: ["direction"],
      textAlign: ["direction"],
      borderRadius: ["direction"],
      transformOrigin: ["direction"],
      transitionDelay: ["group-hover"],
      divideWidth: ["direction"],
      visibility: ["group-hover"],
      backgroundImage: ["group-hover", "hover", "focus-within"],
      display: ["group-hover"],
      rotate: ["group-hover"],
      scale: ["group-hover", "direction"],
      flexDirection: ["direction"],
      overflow: ["hover"],
      textColor: ["focus-within"],
    },
    fontFamily: ["responsive", "direction"],
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
    ],
    lineClamp: ["responsive", "hover"],
  },
  plugins: [],
};
export default config;
