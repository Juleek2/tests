import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Juleer2.github.io',
  build: {
    emptyOutDir: false
  }
})
