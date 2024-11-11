/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dusk':"#49557e",
      },
      fontFamily:{
        'outfit':['Outfit','sans-serif']
      },
      keyframes:{
        fadeIn:{
          '0%':{ opacity: '0'},
          '100%':{opacity: '1'}
        }
      },
      animation:{
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeInFast: 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

