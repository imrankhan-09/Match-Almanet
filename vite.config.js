import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// vite.config.js
export default {
  build: {
    target: 'es2018'  // या 'es2020' आदि, जरूरत के हिसाब से
  }
}

