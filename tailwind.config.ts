import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        purple: {
          300: "#b794f6",
          400: "#9f7aea",
          500: "#805ad5",
          900: "#44337a",
        },
        blue: {
          300: "#63b3ed",
          400: "#4299e1",
          500: "#3182ce",
          900: "#2a4365",
        },
        green: {
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          900: "#22543d",
        },
        cyan: {
          300: "#76e4f7",
          400: "#0bc5ea",
          500: "#00b5d8",
          900: "#065666",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Menlo", "Monaco", "Consolas", "monospace", ...fontFamily.sans],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    // Generate safelist for dynamic color classes
    ...["blue", "green", "purple", "cyan"].flatMap((color) => [
      `bg-${color}-500`,
      `bg-${color}-900`,
      `bg-${color}-900/10`,
      `bg-${color}-900/30`,
      `border-${color}-500`,
      `border-${color}-500/30`,
      `border-${color}-500/50`,
      `text-${color}-300`,
      `text-${color}-400`,
      `text-${color}-500`,
    ]),
  ],
}

export default config
