import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'brand-red': '#ff0000',
        'brand-black': '#000000',
        'brand-white': '#ffffff',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['var(--font-playfair)'],
        display: ['var(--font-bebas)'],
        headliner: ['Awakening', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
