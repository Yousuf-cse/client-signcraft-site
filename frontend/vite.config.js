import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // remove it after testing
  server: {
    host: '0.0.0.0',   // allow access from other devices
    port: 5173         // or whatever port you're using
  }
})
