/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'heise-white': '#e0e0e0',
          'heise-light-grey': '#323232',
          'heise-dark-grey': '#202020',
        },
        fontSize:{
          'xxs': '0.6rem'
        },
        keyframes: {
          bounceIn: {
            '0%': {
              transform: 'translateY(0)',
              animationTimingFunction: 'ease-out',
            },
            '50%': {
              transform: 'translateY(-2px)',
              animationTimingFunction: 'ease-in',
            },
            '100%': {
              transform: 'translateY(0)',
              animationTimingFunction: 'ease-out',
            },
          },
        },
        animation: {
          bounceIn: 'bounceIn 0.3s ease-in-out',
        }
    },
    plugins: [
      
    ],
  }
}
