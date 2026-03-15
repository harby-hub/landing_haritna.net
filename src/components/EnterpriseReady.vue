<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ScrollReveal from './ScrollReveal.vue'

const { t } = useI18n()

const items = [
  { key: 'isolation', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { key: 'scalability', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { key: 'branding', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
  { key: 'security', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
]
</script>

<template>
  <section id="enterprise" class="py-24 px-4 bg-card/50">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('enterprise.title') }}</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">{{ t('enterprise.subtitle') }}</p>
        </div>
      </ScrollReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ScrollReveal
          v-for="( item, index ) in items"
          :key="item.key"
          :delay="index * 100"
        >
          <div class="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 text-center">
            <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ t(`enterprise.items.${item.key}.title`) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t(`enterprise.items.${item.key}.description`) }}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
