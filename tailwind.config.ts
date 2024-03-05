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
        "2xl": "1400px",
      },
    },
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
          DEFAULT: "var(--main-purple, #635FC7)", // Default purple color
          hover: "var(--main-purple-hover, #A8A4FF)", // Hover color for purple
        },
        gray: {
          'very-dark': "var(--very-dark-grey, #20212C)", // Very dark gray
          'dark': "var(--dark-grey, #2B2C37)", // Dark gray
          'medium': "var(--medium-grey, #828FA3)", // Medium gray
          'light': "var(--light-grey, #F4F7FD)", // Light gray
        },
        black: "var(--black, #000112)",
        linesDark: "var(--lines-dark, #3E3F4E)",
        linesLight: "var(--lines-light, #E4EBFA)",

        white: "var(--white, #FFFFFF)",
        destructive: {
          DEFAULT: "var(--destructive, #EA5555)", // Default destructive color
          hover: "var(--destructive-hover, #FF9898)", // Hover state color for destructive
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  
} satisfies Config;

export default config;
