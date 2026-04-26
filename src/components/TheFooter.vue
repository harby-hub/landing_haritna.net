<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

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
      <nav class="mb-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
        <RouterLink to="/privacy" class="text-muted-foreground transition-colors hover:text-primary">
          {{ t('legal.nav.privacy') }}
        </RouterLink>
        <span class="text-muted-foreground/40">·</span>
        <RouterLink to="/terms" class="text-muted-foreground transition-colors hover:text-primary">
          {{ t('legal.nav.terms') }}
        </RouterLink>
        <span class="text-muted-foreground/40">·</span>
        <RouterLink to="/data-deletion" class="text-muted-foreground transition-colors hover:text-primary">
          {{ t('legal.nav.data_deletion') }}
        </RouterLink>
      </nav>
      <p class="text-muted-foreground/60 text-xs">
        {{ t('footer.rights', { year }) }}
      </p>
    </div>
  </footer>
</template>
