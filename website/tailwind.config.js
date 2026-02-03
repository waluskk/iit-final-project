/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Definicja klatek animacji
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      },
      // Definicja nazwy animacji i jej czasu trwania
      animation: {
          // Zmieniamy 60s na 20s, żebyasuwało szybciej
          scroll: 'scroll 20s linear infinite',
        }
    },
  },
  plugins: [],
}