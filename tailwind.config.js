/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0B0B0B',
          green: '#008751'
        }
      },
      boxShadow: {
        glow: '0 0 25px rgba(0,135,81,.5)'
      }
    },
  },
  plugins: [],
}
