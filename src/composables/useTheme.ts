import { ref, watch } from 'vue'

const isDark = ref( false )

function init() {
  const saved = localStorage.getItem( 'haritna-theme' )
  if ( saved === 'dark' ) {
    isDark.value = true
  }
  applyTheme()
}

function applyTheme() {
  const html = document.documentElement
  if ( isDark.value ) {
    html.classList.remove( 'light' )
  } else {
    html.classList.add( 'light' )
  }
  localStorage.setItem( 'haritna-theme', isDark.value ? 'dark' : 'light' )
}

function toggle() {
  isDark.value = !isDark.value
}

watch( isDark, applyTheme )

export function useTheme() {
  return { isDark, toggle, init }
}
