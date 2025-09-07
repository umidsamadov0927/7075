import {createI18n} from "vue-i18n";
import * as uz from '../../locales/uz.json'
import * as en from '../../locales/en.json'
import * as ru from '../../locales/ru.json'
const messages = {
    uz,
    en,
    ru
}
const i18n = createI18n({
    legacy: false,
    locale: 'uz',
    messages
})
export default i18n;