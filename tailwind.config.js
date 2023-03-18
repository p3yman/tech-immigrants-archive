/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        youtube: '#CD201F',
        telegram: '#0088cc',
      }
    },
    container: {
      // center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
