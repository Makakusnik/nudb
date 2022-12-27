/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      '2xs': '20em',
      // 320px
      xs: '25em',
      // 400px
      sm: '30em',
      // 480px
      md: '48em',
      // 768px
      lg: '62em',
      // 992px
      xl: '80em',
      // 1280px
      '2xl': '96em',
      // 1536px
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
