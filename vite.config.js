import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
*/
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost',      // permite acesso via IP local (útil para WSL, Docker ou mobile testing)
    port: 5173,           // porta padrão do Vite
    strictPort: true,     // impede que o Vite troque de porta automaticamente
    hmr: {
      protocol: 'ws',     // usa WebSocket
      host: 'localhost',  // troque por seu IP local se estiver acessando de outro dispositivo
      port: 5173,
    },
  },
})
