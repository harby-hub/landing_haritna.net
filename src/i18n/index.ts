import { createI18n } from 'vue-i18n'
import en from './en'
import ar from './ar'

const savedLocale = localStorage.getItem( 'haritna-locale' ) || 'ar'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: { en, ar },
})

export default i18n
