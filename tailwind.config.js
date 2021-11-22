module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '104': '26rem',
        '120': '30rem',
        '136': '34rem',
        '152': '38rem',
        '160': '40rem',
        '168': '42rem',
        '184': '46rem',
        '200': '50rem',
      },
      colors: {
        'jade': '#3F9877',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
