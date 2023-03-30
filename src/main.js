import { createApp } from 'vue'
import router from './router/index'
import pinia from './store'
import App from './App.vue'

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
