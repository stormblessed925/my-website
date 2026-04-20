/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f9',
          100: '#d5e0f0',
          200: '#abc1e1',
          300: '#7a9dce',
          400: '#4f7abb',
          500: '#2e5fa3',
          600: '#1B3A6B',
          700: '#163060',
          800: '#112554',
          900: '#0d1b3e',
        },
        teal: {
          50: '#e8faf5',
          100: '#c3f0e2',
          200: '#87e1c5',
          300: '#48cca3',
          400: '#1fb584',
          500: '#3EB48B',
          600: '#2a9d7a',
          700: '#1f7a5e',
          800: '#165744',
          900: '#0d3429',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
