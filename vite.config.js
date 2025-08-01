import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0', // listen on all IPs
    port: 5173,      // or any other port you like

      proxy: {
    '/api': 'http://localhost:5000',  // Vite server will handle /api
  }
}

})
