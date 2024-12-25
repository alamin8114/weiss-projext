/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
      colors: {
        'brand-color': '#FF9900',
        // secondary: '#ecc94b',
      },
      fontFamily:{
        'roboto':["Roboto", 'serif']
      },
    extend: {},
  },
  plugins: [],
}