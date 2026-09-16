import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        services: fileURLToPath(new URL('./services.html', import.meta.url)),
        cars: fileURLToPath(new URL('./cars.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        sales: fileURLToPath(new URL('./sales.html', import.meta.url)),
        contacts: fileURLToPath(new URL('./contacts.html', import.meta.url)),
        'services/maintenance': fileURLToPath(new URL('./services/maintenance.html', import.meta.url)),
        'services/electrical': fileURLToPath(new URL('./services/electrical.html', import.meta.url)),
        'services/transmission': fileURLToPath(new URL('./services/transmission.html', import.meta.url)),
        'services/diagnostics': fileURLToPath(new URL('./services/diagnostics.html', import.meta.url)),
        'services/cooling': fileURLToPath(new URL('./services/cooling.html', import.meta.url)),
        'cars/toyota': fileURLToPath(new URL('./cars/toyota.html', import.meta.url)),
        'cars/honda': fileURLToPath(new URL('./cars/honda.html', import.meta.url)),
        'cars/nissan': fileURLToPath(new URL('./cars/nissan.html', import.meta.url)),
        'cars/mazda': fileURLToPath(new URL('./cars/mazda.html', import.meta.url)),
        'cars/mitsubishi': fileURLToPath(new URL('./cars/mitsubishi.html', import.meta.url)),
        'cars/subaru': fileURLToPath(new URL('./cars/subaru.html', import.meta.url)),
        'cars/suzuki': fileURLToPath(new URL('./cars/suzuki.html', import.meta.url)),
        'cars/lexus': fileURLToPath(new URL('./cars/lexus.html', import.meta.url)),
        'cars/infiniti': fileURLToPath(new URL('./cars/infiniti.html', import.meta.url)),
        'cars/acura': fileURLToPath(new URL('./cars/acura.html', import.meta.url)),
      },
    },
  },
})