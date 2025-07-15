import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ✅ Only add aliases you really need
      '@': '/src'
    }
  },
  optimizeDeps: {
    // ✅ You do NOT need to force include babel helpers, Vite will handle it
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
