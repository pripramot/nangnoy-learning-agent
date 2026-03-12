import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/nangnoy-learning-agent/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
