import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ ensures assets work on static hosting
  resolve: {
    alias: {
      // ✅ force Vite to resolve these Babel runtime helpers properly
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
