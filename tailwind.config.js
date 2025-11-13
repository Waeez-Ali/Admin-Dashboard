/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 enables manual dark/light toggle via class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 scan all your source files
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // 👇 your gradient color safelist from vite config
    'from-emerald-500',
    'to-teal-600',
    'from-blue-500',
    'to-indigo-600',
    'from-purple-500',
    'to-pink-600',
    'from-orange-500',
    'to-red-600',
  ],
  plugins: [],
}
