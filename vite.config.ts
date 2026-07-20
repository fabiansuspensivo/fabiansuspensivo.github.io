import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // solo afecta al servidor de desarrollo: permite probar en el movil via
  // tunel https (cloudflared tunnel --url http://localhost:5173)
  server: { allowedHosts: ['.trycloudflare.com'] },
})
