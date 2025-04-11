/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        orbitron: ['var(--font-orbitron)'],
        geist: ['var(--font-geist-sans)'],
        geistMono: ['var(--font-geist-mono)'],
        sacramento: ['var(--font-sacramento)'],
        sixtyfour: ['var(--font-sixtyfour-convergence)'],
      },
    },
  },
  plugins: [],
};
