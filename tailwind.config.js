/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.25,1.55,.65,.97)',
      },
      height: {
        screen: '100dvh',
      },
    },
    fontFamily: {
      sans: 'Inter, monospace',
    },
  },
  plugins: [],
};
