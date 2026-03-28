import { createI18n } from 'vue-i18n'
import en from './en'
import ar from './ar'
import storiesEn from '@/dukkan/i18n/stories-en'
import storiesAr from '@/dukkan/i18n/stories-ar'

const savedLocale = localStorage.getItem( 'haritna-locale' ) || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    en: { ...en, ...storiesEn },
    ar: { ...ar, ...storiesAr },
  },
})

export default i18n
