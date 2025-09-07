import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/index.js'
import i18n from './locales/language/language.js'
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(routes)
app.mount('#app')
