import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

export function useScreenshotPath() {
  const { locale } = useI18n()
  const { isDark } = useTheme()

  const suffix = computed( () => {
    const isAr = locale.value === 'ar'
    const isLight = !isDark.value
    if ( !isAr && !isLight ) return ''
    if ( isAr && !isLight ) return '-ar'
    if ( !isAr && isLight ) return '-light'
    return '-light-ar'
  } )

  const desktopBase = computed( () => `/walkthrough/desktop${suffix.value}` )
  const mobileBase = computed( () => `/walkthrough/mobile${suffix.value}` )

  return { desktopBase, mobileBase }
}
