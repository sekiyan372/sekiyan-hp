module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'jade': '#3F9877',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
