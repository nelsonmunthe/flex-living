/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/images/Bespoke-Partnerships.png')",
        'coverLandLord': "url('./assets/images/cover-landlord.png')",
        'background2': "url('./assets/images/background2.png')",
        'background3': "url('./assets/images/background-1.png')",
        'coverBLog': "url('./assets/images/backgroundBLog.png')",
      },
      backgroundColor: {
        "cardBackground": "#E2F1E8",
        "buttonBackground": "#064749"
      }
    },
  },
  plugins: [],
}

