import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import autoMpaHtml from 'vite-plugin-auto-mpa-html'

export default defineConfig({
  plugins: [
    autoMpaHtml()
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  }
})