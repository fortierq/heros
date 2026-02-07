/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['Cinzel', 'serif'],
        body: ['Lora', 'serif'],
      },
      colors: {
        parchment: '#f4e4c1',
        ink: '#2c1810',
        gold: '#d4a017',
        blood: '#8b0000',
        forest: '#1a472a',
        cosmic: '#0f0f2d',
        ice: '#e8f4f8',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 160, 23, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 160, 23, 0.8), 0 0 40px rgba(212, 160, 23, 0.3)' },
        },
      },
    },
  },
  plugins: [],
};
