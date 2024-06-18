/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#151618',
        secondary: '#222632',
        tertiary: '#30343F',
        accent: '#1E778F',
        text: '#FAFAFA',
      },
      fontFamily: {
        acme: ['Acme-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
