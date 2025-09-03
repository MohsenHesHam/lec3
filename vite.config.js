import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    mime: {
      'application/javascript': ['js', 'mjs']
    }
  }
})