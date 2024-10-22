/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive-dark': '#556B2F', // Dark olive green for active elements
        'olive-light': '#A9BA9D', // Muted olive for inactive elements
        'background-light': '#F4E1D2', // Light beige/cream for background
        'accent-brown': '#8B4513', // Rich brown for borders or accent elements
      },
    },
  },
  plugins: [],
}

