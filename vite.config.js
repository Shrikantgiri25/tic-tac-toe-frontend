import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'assets',
  },
  base: './', // good for relative paths in static hosting
})
