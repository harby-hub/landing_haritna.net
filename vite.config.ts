import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // For GitHub Pages: set to '/<repo-name>/' if not using custom domain
  // For Cloudflare Pages or custom domain: keep '/'
  base: '/',
  server: {
    port: 5174,
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
