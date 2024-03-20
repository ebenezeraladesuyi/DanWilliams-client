/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mont : ['Montserrat', 'sans-serif'],
        pop : ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-bg' : "url('/src/assets/images/biz6.jpg')",
        'lady-bg' : "url('/src/assets/images/lady.jpg')",
        'about-bg' : "url('/src/assets/images/biz3.jpg')",
        'bg1' : "url('/src/assets/UnveilingSummit/8.png')",
        'bg2' : "url('/src/assets/UnveilingSummit/13.png')",
      }
    },
  },
  plugins: [],
}