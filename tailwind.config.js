/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/Bespoke-Partnerships.png')",
        'background2': "url('./assets/images/background2.png')",
        'background3': "url('./assets/images/background-1.png')",
      },
    },
  },
  plugins: [],
}

