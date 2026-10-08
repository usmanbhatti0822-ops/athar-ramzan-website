import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#B9CDFF",
          300: "#8DAEFF",
          400: "#6B8CF0",
          500: "#4169E1", // royal blue
          600: "#3157CC",
          700: "#2747A8",
          800: "#1D3680",
          900: "#14275C",
          950: "#0A1636",
        },
        surface: "#070C1D", // page background
        mist: "#0B1330",    // alternate section background
        card: "#0F1838",    // cards, inputs, nav
        ink: "#E6ECFF",     // main text
        sub: "#9DAAD0",     // muted text
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 60px -24px rgba(0, 0, 0, 0.55)",
        card: "0 12px 44px -14px rgba(0, 0, 0, 0.4)",
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        pulseDot: { "0%": { boxShadow: "0 0 0 0 rgba(65,105,225,.55)" }, "100%": { boxShadow: "0 0 0 10px rgba(65,105,225,0)" } },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 38s linear infinite",
        pulseDot: "pulseDot 1.8s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
