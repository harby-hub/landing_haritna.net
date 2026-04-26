<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

defineProps<{
  title: string
  subtitle: string
}>()

const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold text-primary">{{ t('legal.company_name') }}</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 pb-20 pt-10">
      <!-- Title -->
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-3xl font-bold tracking-tight">{{ title }}</h1>
        <p class="text-muted-foreground">{{ subtitle }}</p>
        <p class="mt-3 text-xs text-muted-foreground/70">
          {{ t('legal.last_updated') }}: {{ t('legal.effective_date') }}
        </p>
      </div>

      <!-- Cross-links to other legal pages -->
      <nav class="mb-10 flex flex-wrap justify-center gap-2 text-sm">
        <RouterLink
          to="/privacy"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.privacy') }}
        </RouterLink>
        <RouterLink
          to="/terms"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.terms') }}
        </RouterLink>
        <RouterLink
          to="/data-deletion"
          class="rounded-full border border-border px-3 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          active-class="bg-primary text-white border-primary hover:bg-primary hover:text-white"
        >
          {{ t('legal.nav.data_deletion') }}
        </RouterLink>
      </nav>

      <!-- Pilot phase banner -->
      <div class="mb-8 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-100">
        <strong>{{ t('legal.pilot_notice').split(':')[0] }}:</strong>
        {{ t('legal.pilot_notice').split(':').slice(1).join(':').trim() }}
      </div>

      <!-- Body slot -->
      <article class="legal-content max-w-none">
        <slot />
      </article>

      <!-- Back -->
      <div class="mt-12 text-center">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-muted"
        >
          ← {{ t('legal.back_home') }}
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.legal-content :deep(h2) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
}
.legal-content :deep(h3) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}
.legal-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: color-mix(in oklch, var(--color-foreground) 90%, transparent);
}
.legal-content :deep(ul) {
  margin-bottom: 1rem;
  padding-inline-start: 1.5rem;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.legal-content :deep(ol) {
  margin-bottom: 1rem;
  padding-inline-start: 1.5rem;
  list-style-type: decimal;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.legal-content :deep(li) {
  line-height: 1.7;
  color: color-mix(in oklch, var(--color-foreground) 90%, transparent);
}
.legal-content :deep(li strong) {
  color: var(--color-foreground);
  font-weight: 600;
}
</style>
