import { createApp } from 'vue'
import '@fontsource/cairo/400.css'
import '@fontsource/cairo/600.css'
import '@fontsource/cairo/700.css'
import '@fontsource/cairo/800.css'
import './assets/main.css'
import App from './App.vue'
import i18n from './i18n'
import router from './router'
import { useTheme } from './composables/useTheme'

const app = createApp( App )
app.use( i18n )
app.use( router )
app.mount( '#app' )

// One-time reset: clear old defaults (v1 used ar+dark)
const SETTINGS_VERSION = '2'
if ( localStorage.getItem( 'haritna-v' ) !== SETTINGS_VERSION ) {
  localStorage.removeItem( 'haritna-theme' )
  localStorage.removeItem( 'haritna-locale' )
  localStorage.setItem( 'haritna-v', SETTINGS_VERSION )
}

// Initialize theme & locale direction
const { init } = useTheme()
init()

const locale = localStorage.getItem( 'haritna-locale' ) || 'en'
document.documentElement.lang = locale
document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
