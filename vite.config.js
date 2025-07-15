import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ FIX: force Vite to optimize and prebundle babel helpers
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // make sure any @babel/runtime imports get resolved
      '@babel/runtime/helpers/createSuper':
        '/node_modules/@babel/runtime/helpers/esm/createSuper.js',
      '@babel/runtime/helpers/classCallCheck':
        '/node_modules/@babel/runtime/helpers/esm/classCallCheck.js',
      '@babel/runtime/helpers/inherits':
        '/node_modules/@babel/runtime/helpers/esm/inherits.js'
    }
  },
  optimizeDeps: {
    include: [
      '@babel/runtime/helpers/createSuper',
      '@babel/runtime/helpers/classCallCheck',
      '@babel/runtime/helpers/inherits'
    ]
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
})
