/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm_device: '481px',
        tablet: '768px',
        laptop: '992px',
        desktop: '1200px',
        large: '1920px',
      },
    },
  },
  plugins: [],
};
