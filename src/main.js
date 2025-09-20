import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import routes from './router/index.js'
import i18n from './locales/language/language.js'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { createPinia } from 'pinia'
const pinia = createPinia()
const options = {
    position: "top-right",
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
}

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(routes)
app.use(Toast, options);
app.mount('#app')
