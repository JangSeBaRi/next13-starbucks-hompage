/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.8s forwards',
        'text-animation': 'text-animation 3s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'text-animation': {
          '0%': { width: 0 },
          '100%': { width: "calc(100% + 2px)" },
        }
      }
    },
  },
  plugins: [],
}

