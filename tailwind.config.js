/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plant-background': "url('/assets/plantbackground.jpg')",
      },
      fontFamily: {
        'indie-flower': ['Indie Flower', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

