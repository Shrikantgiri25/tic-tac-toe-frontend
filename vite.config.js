// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'build', // change output directory
//     assetsDir: 'assets',
//   },
//   base: './',
//   server: {
//     historyApiFallback: {
//       index: '/index.html',
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { copyFileSync, existsSync } from 'fs'

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Custom plugin to copy _redirects to build folder after build
function copyRedirects() {
  return {
    name: 'copy-redirects',
    closeBundle() {
      const source = resolve(__dirname, 'public', '_redirects')
      const destination = resolve(__dirname, 'build', '_redirects')
      if (existsSync(source)) {
        copyFileSync(source, destination)
        console.log('✅ Copied _redirects file to build folder')
      } else {
        console.warn('⚠️  No _redirects file found in public folder')
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), copyRedirects()],
  build: {
    outDir: 'build',  // matches your Render publish directory
    assetsDir: 'assets',
  },
  base: './',
  server: {
    historyApiFallback: true, // supports React Router locally
  },
})
