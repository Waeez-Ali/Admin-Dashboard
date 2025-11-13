import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        safelist: [
          'from-emerald-500',
          'to-teal-600',
          'from-blue-500',
          'to-indigo-600',
          'from-purple-500',
          'to-pink-600',
          'from-orange-500',
          'to-red-600',
        ],
      },
    }),
  ],
})
