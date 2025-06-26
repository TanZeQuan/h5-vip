import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import '@/assets/css/common.css'
import '@/assets/css/index.css'
import { Icon } from 'vant'
import 'vant/lib/index.css'

const app = createApp(App)

app.use(router)
app.use(Icon)
app.mount('#app')
