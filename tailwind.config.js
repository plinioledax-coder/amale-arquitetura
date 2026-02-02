/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Truque: Mapeamos 'serif' para Montserrat para manter a estrutura do código
        // mas entregar o visual RETO que você quer.
        serif: ['Montserrat', 'sans-serif'], 
        
        // Texto corrido mais técnico e limpo
        sans: ['Manrope', 'sans-serif'],
      },
      colors: {
        // Suas cores (mantive aqui para referência)
        brand: {
          primary: '#7A9578', // Verde Musgo Claro
          dark: '#2C3E2D',    // Verde Musgo Escuro
          accent: '#C87D70',  // Salmão
          light: '#F9F8F6'    // Off-white
        }
      }
    },
  },
  plugins: [],
}