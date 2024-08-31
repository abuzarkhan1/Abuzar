import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Abuzar/', // This should exactly match your repository name
  build: {
    outDir: 'dist',
  },
})
