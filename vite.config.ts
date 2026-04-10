import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [vue(), tailwindcss(), cloudflare()],
  resolve: {
    alias: {
      '@': resolve( __dirname, 'src' ),
    },
  },
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
