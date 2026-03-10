/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/Users/lukizhao/Documents/Claude Code Projects/Dr Tian Website/dr-tian-wix-clone/index.html',
    '/Users/lukizhao/Documents/Claude Code Projects/Dr Tian Website/dr-tian-wix-clone/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5f0ea',
        sage: '#e8ede9',
        'blue-mint': '#d4e8ec',
        forest: '#2d4a3e',
        amber: '#c8894a',
        'amber-dark': '#a86e35',
        'forest-light': '#3d6355',
        'footer-text': '#e8e0d6',
        'text-dark': '#1a1a1a',
        'text-mid': '#4a4a4a',
        'text-light': '#7a7a7a',
      },
      fontFamily: {
        serif: ['"Cormorant Garant"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
