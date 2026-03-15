<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function toggle() {
  const newLocale = locale.value === 'ar' ? 'en' : 'ar'
  locale.value = newLocale
  localStorage.setItem( 'haritna-locale', newLocale )
  document.documentElement.lang = newLocale
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
}
</script>

<template>
  <button
    @click="toggle"
    class="px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-muted transition-colors border border-border"
  >
    {{ locale === 'ar' ? 'EN' : 'عربي' }}
  </button>
</template>
