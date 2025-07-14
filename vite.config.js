import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/firestore',
      'firebase/storage',
      '@babel/runtime/helpers/createSuper'
    ]
  }
})



