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
        'hero-bg2' : "url('/src/assets/images/home-page-image.png')",
        'hero-bg3' : "url('/src/assets/images/home-page-image2.jpg')",
        'lady-bg' : "url('/src/assets/images/preffered-2.jpg')",
        'about-bg' : "url('/src/assets/images/biz3.jpg')",
        'bg1' : "url('/src/assets/UnveilingSummit/8.png')",
        'bg2' : "url('/src/assets/UnveilingSummit/13.png')",
        'bg3' : "url('/src/assets/UnveilingSummit/10.png')",
      }
    },
  },
  plugins: [],
}