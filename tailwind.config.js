/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.25,1.55,.65,1.4)',
      },
      height: {
        screen: '100dvh',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
      animation: {
        'fade-in': 'fade-in .8s cubic-bezier(0.86, 0, 0.07, 1)',
      },
    },
    fontFamily: {
      sans: 'Poppins, monospace, sans-serif',
    },
  },
  plugins: [],
};
