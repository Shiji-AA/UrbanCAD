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
    },
  },
  plugins: [],
}