<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-12 px-4 bg-card border-t border-border">
    <div class="max-w-6xl mx-auto text-center">
      <img src="/logo.png" alt="Haritna Technologies" class="w-12 h-12 mx-auto mb-4 opacity-60" />
      <p class="text-muted-foreground text-sm mb-2">
        {{ t('footer.tagline') }}
      </p>
      <p class="text-muted-foreground/60 text-xs">
        {{ t('footer.rights', { year }) }}
      </p>
    </div>
  </footer>
</template>
