/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xxsm: ['0.5em'],
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      screens: {
        sm_device: '481px',
        tablet: '768px',
        laptop: '992px',
        desktop: '1200px',
        large: '1920px',
      },
      width: {
        340: '340px',
        450: '450px',
        700: '700px',
        1000: '1000px',
      },
      colors: {
        'orange-thema': '#FF9900',
        'orange-thema-light': '#E1A54B',
      },
    },
  },
  plugins: [],
};
