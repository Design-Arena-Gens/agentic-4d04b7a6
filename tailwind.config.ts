import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "deep-space": {
          900: "#04020A",
          800: "#0A051A",
          700: "#12073A"
        },
        aurora: {
          500: "#7FFFD4",
          600: "#4CE8B9"
        },
        sunset: {
          500: "#FF6F61",
          600: "#FF3D54"
        }
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(124, 252, 0, 0.35)",
        "glow-md": "0 0 35px rgba(255, 111, 97, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
