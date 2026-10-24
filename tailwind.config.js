/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        poke: {
          dark: '#0a0b10',
          darker: '#06070a',
          card: '#12131c',
          border: '#232538',
          accent: '#8b5cf6', // Violet
          accentHover: '#7c3aed',
          accentMuted: '#6d28d9',
          success: '#10b981',
          warning: '#f59e0b',
          danger: '#ef4444',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        pixel: ['PokemonEmerald', 'PokemonGB', 'monospace'],
        gb: ['PokemonGB', 'monospace'],
      }
    },
  },
  plugins: [],
}
