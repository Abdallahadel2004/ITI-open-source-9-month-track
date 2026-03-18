import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  root: './',
  publicDir: 'static',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
})
