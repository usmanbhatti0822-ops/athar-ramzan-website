import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
<<<<<<< HEAD
          50: "#EEF9F7",
          100: "#D6F1ED",
          200: "#AEE3DC",
          300: "#7DD1C8",
          400: "#4FC2B8",
          500: "#35AFA3",
          600: "#22968B",
          700: "#176B63",
          800: "#0F5853",
          900: "#0A3F3B",
          950: "#062B28",
        },
        surface: "#FFFFFF",
        mist: "#F4F9F8",
        card: "#FFFFFF",
        ink: "#0B1B1A",
        sub: "#5C6F6D",
=======
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
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
<<<<<<< HEAD
        soft: "0 24px 60px -24px rgba(12, 62, 56, 0.22)",
        card: "0 12px 44px -14px rgba(12, 62, 56, 0.14)",
=======
        soft: "0 24px 60px -24px rgba(0, 0, 0, 0.55)",
        card: "0 12px 44px -14px rgba(0, 0, 0, 0.4)",
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
      },
      keyframes: {
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
<<<<<<< HEAD
        pulseDot: { "0%": { boxShadow: "0 0 0 0 rgba(53,175,163,.55)" }, "100%": { boxShadow: "0 0 0 10px rgba(53,175,163,0)" } },
=======
        pulseDot: { "0%": { boxShadow: "0 0 0 0 rgba(65,105,225,.55)" }, "100%": { boxShadow: "0 0 0 10px rgba(65,105,225,0)" } },
>>>>>>> 801b4d79c37d6d0bc384fe628275771cfd8fce03
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
