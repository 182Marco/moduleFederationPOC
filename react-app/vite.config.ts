import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

console.log(process.env.NODE_ENV)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'ReactWidget',
      fileName: 'react-widget',
      formats: ['es']
    },
    copyPublicDir: false,
    emptyOutDir: true
  }
})
