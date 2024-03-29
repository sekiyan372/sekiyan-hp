module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
    './src/sections/**/*.tsx',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        90: '22.5rem',
        104: '26rem',
        120: '30rem',
        136: '34rem',
        152: '38rem',
        160: '40rem',
        168: '42rem',
        184: '46rem',
        200: '50rem',
      },
      colors: {
        jade: '#3F9877',
        'pagination-white': '#fcfcfc',
        hinata: '#5BBEE5',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height: {
        54: '13.5rem',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      backgroundImage: {
        me: "url('/images/me/me.webp')",
      },
      animation: {
        'slide-left':
          'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-right':
          'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
      },
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(33.333333%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
