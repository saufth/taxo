const plugin = require('tailwindcss/plugin')

/** Default values for sizing and spacing */
const sizingConfig = {
  breakpoints: {
    xs: '20rem', /* 320px */
    sm: '24rem', /* 384px */
    md: '28rem', /* 448px */
    lg: '32rem', /* 512px */
    xl: '36rem', /* 576px */
    '2xl': '42rem', /* 672px */
    '3xl': '48rem', /* 768px */
    '4xl': '56rem', /* 896px */
    '5xl': '64rem', /* 1024px */
    '6xl': '72rem', /* 1152px */
    '7xl': '80rem', /* 1280px */
    '8xl': '85.375rem', /* 1366px */
    '9xl': '120rem' /* 1920px */
  },
  defaults: {
    0.75: '0.1875rem', /* 3px */
    15: '3.75rem', /* 60px */
    18: '4.5rem', /* 72px */
    '9/20': '45%',
    '11/20': '55%'
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      // Humnst777 BT
      humnst777: ['Humnst777 BT Roman', 'sans-serif'],
      'humnst777-bold': ['Humnst777 BT Bold', 'sans-serif'],
      'humnst777-bold-cond': ['Humnst777 Cn BT Bold', 'sans-serif']
    },
    extend: {
      colors: {
        primary: '#00609c',
        secondary: '#51534a',
        taxo: {
          100: '#c5d9e7',
          200: '#abc8e7',
          300: '#7badd3',
          400: '#007cba'
        }
      },
      width: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      maxWidth: {
        ...sizingConfig.breakpoints
      },
      height: {
        ...sizingConfig.breakpoints,
        ...sizingConfig.defaults
      },
      padding: {
        ...sizingConfig.defaults
      },
      margin: {
        ...sizingConfig.defaults
      },
      zIndex: {
        60: 60,
        70: 70
      },
      fontSize: {
        md: ['0.938rem', { lineHeight: '1.375rem' }],
        '4.5xl': ['2.5rem']
      },
      backgroundImage: {
        'home-hero': 'url(/images/sections/home-hero.jpg)',
        'home-hero-mobile': 'url(/images/sections/home-hero-mobile.jpg)',
        'home-solutions': 'url(url(/images/sections/home-solutions.jpg))'
      },
      borderRadius: {
        '11%': '11%',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem'
      },
      boxShadow: {
        'center-2xl': '0px 0px 32px rgba(0, 0, 0, 1)',
        'center-3xl': '0px 0px 64px rgba(0, 0, 0, 1)',
        'center-4xl': '0px 0px 96px rgba(0, 0, 0, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    }),
    plugin(({ addVariant, e }) => {
      addVariant('second', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`second${separator}${className}`)}:nth-child(2)`
        })
      })
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        'animation-delay': (value) => {
          return {
            'animation-delay': value
          }
        }
      },
      {
        values: theme('transitionDelay')
      }
      )
    })
  ]
}
