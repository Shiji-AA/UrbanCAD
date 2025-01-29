/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        body: ['Roboto', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },  
      fontWeight: {
        extrabold: 800, 
      },
      colors: {
        navy: "#001f3f",
        // aqua: "#7fdbff", 
        aqua:"#14b8a6",
      },
      

      animation: {
        'fade-left': 'fade-left 1s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
      keyframes: {
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },


    },
  },
  plugins: [],
}