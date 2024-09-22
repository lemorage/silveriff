import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the Go backend
      '/api': {
        target: 'http://localhost:7536',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
