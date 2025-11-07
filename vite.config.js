import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
        // Liste explicite d'hôtes autorisés
        allowedHosts: [
            'akwa.top',
            'www.akwa.top'
        ],
    },
})
