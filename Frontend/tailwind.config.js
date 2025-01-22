/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {    
      
      colors: {
        navy: "#001f3f",
        aqua: "#7fdbff", 
      },
    },
  },
  plugins: [],
}