const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

delete colors?.lightBlue
delete colors?.warmGray
delete colors?.trueGray
delete colors?.coolGray
delete colors?.blueGray

module.exports = {
  content: ['./src/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  media: false,
  mode: 'jit',
  theme: {
    colors: {
      // You may customize your own custom color here
      primary: '#DC2626',
      secondary: '#003366',
      tertiary: '#F8CA0F',
      light: '#EFEFEF',
      black: '#101928',
      white: '#fff',
      ...colors
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      const utilities = {
        '.bg-1': {
          'background-image': 'url(/assets/pic1.png)'
        },
        '.bg-2': {
          'background-image': 'url(/assets/pic2.png)'
        },
        '.bg-3': {
          'background-image': 'url(/assets/pic3.png)'
        },
        '.bg-4': {
          'background-image': 'url(/assets/pic4.png)'
        },
        '.bg-5': {
          'background-image': 'url(/assets/pic5.png)'
        },
        '.rec-1': {
          'background-image': 'url(/assets/Rectangle1.png)'
        },
        '.rec-2': {
          'background-image': 'url(/assets/Rectangle2.png)'
        },
        '.rec-3': {
          'background-image': 'url(/assets/Rectangle3.png)'
        },
        '.rec-4': {
          'background-image': 'url(/assets/Rectangle4.png)'
        }
      }
      addUtilities(utilities)
    })
  ]
}
