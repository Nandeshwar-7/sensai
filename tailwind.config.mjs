/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#FFFFFF", // White
          foreground: "#000000", // Black
          card: {
            DEFAULT: "#F8F9FA", // Light gray
            foreground: "#212529" // Dark gray
          },
          popover: {
            DEFAULT: "#F8F9FA",
            foreground: "#212529"
          },
          primary: {
            DEFAULT: "#1E90FF", // Dodger Blue
            foreground: "#FFFFFF" // White
          },
          secondary: {
            DEFAULT: "#6C757D", // Gray
            foreground: "#FFFFFF"
          },
          muted: {
            DEFAULT: "#E9ECEF",
            foreground: "#495057"
          },
          accent: {
            DEFAULT: "#17A2B8", // Cyan Blue
            foreground: "#FFFFFF"
          },
          destructive: {
            DEFAULT: "#DC3545", // Red
            foreground: "#FFFFFF"
          },
          border: "#DEE2E6", // Light gray
          input: "#CED4DA", // Light gray
          ring: "#1E90FF", // Dodger Blue
          chart: {
            1: "#FF6384",
            2: "#36A2EB",
            3: "#FFCE56",
            4: "#4BC0C0",
            5: "#9966FF"
          }
        },
        borderRadius: {
          lg: "12px",
          md: "10px",
          sm: "8px"
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" }
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out"
        }
      }
    },
    experimental: {
      disableColorOpacityUtilitiesByDefault: true, // Helps avoid oklch() opacity issues
    },
    plugins: [require("tailwindcss-animate")],
  };
  