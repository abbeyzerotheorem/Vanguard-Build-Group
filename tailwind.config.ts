import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Editorial sand + ink palette. Warm, premium, never generic.
        bone: {
          50: "#FBF7F1", // page background
          100: "#F4ECDF", // soft sand
          200: "#EADFC9",
          300: "#DAC9A8",
        },
        ink: {
          DEFAULT: "#0E1116", // deep ink — primary text on light
          900: "#0E1116",
          800: "#1A1F26",
          700: "#2A2F37",
          600: "#3B4049",
          500: "#5C616B",
          400: "#8A8F99",
        },
        paper: {
          DEFAULT: "#FFFFFF", // surface
          50: "#FDFBF7",
        },
        brass: {
          50: "#FBF3E4",
          100: "#F2DDA8",
          200: "#E8C66B",
          300: "#D9A93A",
          400: "#B9872A",
          500: "#956820",
          600: "#6F4D17", // hover/press
        },
        rust: {
          500: "#9B3F26", // emergency / accent contrast
          600: "#7E2F1B",
        },
        forest: {
          500: "#2F4F3A", // success / certification
          600: "#243E2C",
        },
        // Backward-compatible aliases so legacy class names don't break during refactor.
        background: "#FBF7F1",
        foreground: "#0E1116",
        accent: {
          DEFAULT: "#B9872A",
          light: "#D9A93A",
          dark: "#6F4D17",
        },
        structural: {
          blue: "#0E1116",
          slate: "#2A2F37",
          gray: "#5C616B",
        },
        border: "#E7DFCF",
        "border-dark": "#9C8F76",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      // Fluid type scale — no more 4 separate breakpoint sizes
      fontSize: {
        "display-2xl": [
          "clamp(2.75rem, 6vw + 1rem, 5.25rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em" },
        ],
        "display-xl": [
          "clamp(2.5rem, 5vw + 1rem, 4.5rem)",
          { lineHeight: "1.04", letterSpacing: "-0.022em" },
        ],
        "display-lg": [
          "clamp(2.15rem, 3.5vw + 1rem, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        "display-md": [
          "clamp(1.85rem, 2.5vw + 1rem, 3rem)",
          { lineHeight: "1.1", letterSpacing: "-0.015em" },
        ],
        "display-sm": [
          "clamp(1.5rem, 1.5vw + 1rem, 2.25rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        "display-xs": [
          "clamp(1.25rem, 1vw + 0.85rem, 1.875rem)",
          { lineHeight: "1.25" },
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "112": "28rem",
        "128": "32rem",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9",
        "5/4": "5 / 4",
      },
      minHeight: {
        "48": "12rem",
      },
      minWidth: {
        "48": "12rem",
      },
      maxWidth: {
        "prose": "68ch",
        "container": "1240px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        // Premium shadows — soft, layered, never harsh.
        xs: "0 1px 2px 0 rgb(14 17 22 / 0.04)",
        soft: "0 1px 2px 0 rgb(14 17 22 / 0.04), 0 2px 6px -2px rgb(14 17 22 / 0.06)",
        structural:
          "0 1px 3px 0 rgb(14 17 22 / 0.06), 0 4px 10px -3px rgb(14 17 22 / 0.08)",
        "structural-lg":
          "0 4px 8px -2px rgb(14 17 22 / 0.05), 0 16px 30px -6px rgb(14 17 22 / 0.12)",
        "structural-xl":
          "0 20px 40px -10px rgb(14 17 22 / 0.18), 0 8px 16px -4px rgb(14 17 22 / 0.08)",
        brass: "0 12px 30px -10px rgb(185 135 42 / 0.55)",
        inset: "inset 0 0 0 1px rgb(231 223 207)",
      },
      // Per-component entrance animations are delegated to Framer Motion
      // so we keep these as fallbacks for non-interactive elements.
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "marquee": "marquee 38s linear infinite",
        "shimmer": "shimmer 2.4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
        "in-out-quart": "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      backgroundImage: {
        "grain":
          "radial-gradient(circle at 1px 1px, rgba(14,17,22,0.06) 1px, transparent 0)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
      },
    },
  },
  plugins: [],
};

export default config;
