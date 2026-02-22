import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-nojekyll',
      closeBundle() {
        try {
          copyFileSync('.nojekyll', 'dist/.nojekyll')
        } catch (err) {
          console.warn('Could not copy .nojekyll:', err.message)
        }
      }
    }
  ],
  base: '/sqatester/',
})