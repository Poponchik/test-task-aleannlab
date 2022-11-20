/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    colors: {
      'white': "#fff",
      'blue': '#5876C5',
      'yellow': {
        100: '#FFF8D9',
        300: '#FFCF00',
        400: '#988B49',
      },
      'sh-grey': {
        100: "CBCDD6",
        200: "8E9098",
      },
      'grey': {
        100: '#E6E9F2',
        200: '#BBC3D9',
        300: '#7D859C',
        700: '#3A4562',
        800: '#2A3047',
        900: '#202336',
      },
      'black': "#282c34",

      extend: {
        dropshadow: {
          'sm': [
            '0px 1px 1px rgba(0, 0, 0, 0.14)',
          ],
          'md': [
            '2px 1px 7px rgba(0, 0, 0, 0.08)',
          ]
        }
      },
    },
    plugins: [],
  }
}