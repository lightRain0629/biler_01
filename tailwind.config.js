/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        captureit: ['captureit', 'sans-serif'],
        DINProCond: ['DINProCond', 'serif'],
        Hackney: ['Hackney', 'serif'],
        Oswald_Bold: ['Oswald_Bold', 'serif'],
        Oswald_ExtraLight: ['Oswald_ExtraLight', 'serif'],
        Oswald_Light: ['Oswald_Light', 'serif'],
        Oswald_Medium: ['Oswald_Medium', 'serif'],
        Oswald_Regular: ['Oswald_Regular', 'serif'],
        Oswald_SemiBold: ['Oswald_SemiBold', 'serif'],
      },
      animation: {
        tudasuda: 'tudasuda 0.2s linear infinite',
      },
      keyframes: {
        tudasuda: {
          '0%': { transform: 'rotate(-15deg)' },
          '25%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-15deg)' },
        },
      },
    },
  },
  plugins: [],
};
