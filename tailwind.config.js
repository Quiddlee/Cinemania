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
        'movie-fade-in': {
          '0%': {
            translate: '0 90px',
          },
          '100%': {
            translate: '0 0',
          },
        },
        'pagination-fade-in': {
          '0%': {
            scale: '0.3',
            opacity: 0,
          },
          '100%': {
            scale: '1',
            opacity: 1,
          },
        },
        float: {
          '0%': {
            translate3d: '0',
            rotate: 0,
          },
          '20%': {
            transform: 'translate3d(-50px, 15px, 0)',
            rotate: '7deg',
            scale: '0.9',
          },
          '40%': {
            rotate: '-7deg',
            transform: 'translate3d(-30px, -15px, 0)',
          },
          '60%': {
            rotate: '10deg',
            scale: 1.2,
            transform: 'translate3d(30px, 20px, 0)',
          },
          '100%': {
            translate3d: '0',
            rotate: 0,
            scale: 1,
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s cubic-bezier(0.86, 0, 0.07, 1) both',
        'pagination-fade-in':
          'pagination-fade-in 1.4s cubic-bezier(.25,1.55,.6,1) both',
        springish:
          'springish 1.72s cubic-bezier(0.445, 0.050, 0.550, 0.950) both',
        'springish-letter':
          'springish-letter 2.35s cubic-bezier(0.445, 0.050, 0.550, 0.950) both',
        float: 'float 16s ease-in-out infinite',
      },
    },
    fontFamily: {
      sans: 'Poppins, monospace, sans-serif',
      quicksand: 'Quicksand, sans-serif',
    },
  },
  plugins: [],
};
