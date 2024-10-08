import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import eslint from "vite-plugin-eslint"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    fs: {
      allow: ['src', 'icons']
    }
  }
})
