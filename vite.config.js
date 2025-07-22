import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
 
export default defineConfig({
  base: '/h5-vip/',
  server: {
    port: 8080,
    open: true,
    host: true, // <-- Very important for Ngrok or LAN
    allowedHosts: 'all', // <-- Let Ngrok host be allowed
    proxy: {
      '/api': {
        target: 'https://192.168.0.122/silver',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      },
      allowedHosts: ['.ngrok-free.app'] // 如果你用的是 Vite 5+
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
})
