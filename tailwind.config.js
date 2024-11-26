/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: '#FDFCFE',
         customBlue: '#3F3BE1',
         customPurple: '#42055F',
         customLightPurple: '#F5EFFC',
         customGray: '#F4F5F7',

      },
    },
  },
  plugins: [],
}
