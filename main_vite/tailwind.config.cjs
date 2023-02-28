/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  purge:{
    content:['./src/**/*.jsx'],
    options:{
      safelist: ['red-500', 'yellow-500', 'blue-500', 'orange-500', 'emerald-500', 'purple-500', 'amber-800', 'pink-500', 'gray-500', 'slate-100', 'slate-300'],
    }
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
