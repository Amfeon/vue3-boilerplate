import { createApp } from 'vue'
import '@/assets/styles/common.css'
import App from '@/components/App.vue'
import { router } from '@/routes/index.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
