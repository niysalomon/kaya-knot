/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,d.ts}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        'xl-m': '1212px',
        '2xl': '1536px',
        '3xl': '1560px',
      },
      colors: {
        primary: {
          DEFAULT: '#46BCEE',
          medium: '#C8EBFA',
          light: '#EDF8FD',
          gray: '#F7F7F7',
        },
        red: {
          DEFAULT: '#ef4444',
        },
        green: {
          DEFAULT: '#22c55e',
        },
        darkColor:{
          DEFAULT: '#181F39',
        },
        buttonColor:{
          DEFAULT:'B59A75',
        },
        orange: {
          DEFAULT: '#f59e0b',
        },
        grayOrange:{
          DEFAULT: '#B59A75',
        }
      },
      maxHeight: {
        130: '34rem',
      },
      containers: {
        '4xs': '8rem',
        '3xs': '13rem',
        '2xs': '16rem',
      },
    },
  },
  plugins: [],
}

