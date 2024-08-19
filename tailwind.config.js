/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alex-brush': ['Alex Brush', 'cursive'],
        'lato': ['Lato', 'sans serif'],
        'lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}