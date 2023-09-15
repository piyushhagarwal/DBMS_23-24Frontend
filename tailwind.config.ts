import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const colors = require("tailwindcss/colors");

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            ...colors,
            // navy: "#27005D",
            // poppurple: "#8F43EE",
            // skyblue: "#AED2FF",
            // lightblue: "#E4F1FF",
            customyellow: "#FFE06A",
            maroon: "#A9333A",
            // pink: "#E1578A"
            cyan: "#A6D0DD",
            customred: "#FF6969",
            skin: "#FFD3B0",
            sand: "#FFF9DE",
            lightersand: "#FFFCE1"
        },
        extend: {
            fontFamily: {
                sfmedium: ["var(--font-sfmedium)"],
                sfheavy: ["var(--font-sfheavy)"],
                sfbold: ["var(--font-sfbold)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                light: {
                    // ...
                    colors: {
                        secondary: "#FF6969",
                        primary: "#A9333A",
                    },
                },
                dark: {
                    // ...
                    colors: {},
                },
                // ... custom themes
            },
        }),
    ],
};
export default config;
