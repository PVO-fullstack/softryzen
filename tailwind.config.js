/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  screens: {
    mobile: "320px",
    mobile2: "480px",
    tablet: "768px",
    desktop: "1280px",
  },
  extend: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      katarina: ["var(--font-katarina)"],
    },
  },
};
export const plugins = [];
