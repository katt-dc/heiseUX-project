/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // dynamische Generierung von Klassen nicht möglich in Tailwind (Workaround: safelist)
    safelist: [
      'text-xs',
      'text-sm',
      'text-base',
      'text-lg',
      'text-xl',
      'text-2xl',
      'text-3xl',
      'text-4xl',
      'items-start',
      'items-center',
      'items-end',
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
        aspectRatio:{
          'shorts' : '5 / 9;'
        },
        fontFamily:{
          'inria-serif': ['"Inria Serif"', 'serif'],
          'inter': ['Inter', 'sans-serif'],

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
          slideIn: {
            '0%': {
              transform: 'translateY(400px)',
              opacity: '0'
            },
            '100%': {
              transform: 'translateY(0)',
              opacity: '1'
            }
          },
          fadeIn: {
            '0%': {
              opacity: '0'
            },
            '100%': {
              opacity: '1'
            }
          }
        },
        animation: {
          bounceIn: 'bounceIn 0.3s ease-in-out',
          slideIn: 'slideIn 0.3s ease-out forwards',
          fadeIn: 'fadeIn 0.3s ease-out forwards'
        }
    },
    screens: {
      'sm': '440px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl':'1536px'
    },
    plugins: [
      
    ],
  }
}
