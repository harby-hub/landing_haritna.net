<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ScrollReveal from './ScrollReveal.vue'

const { t } = useI18n()

const items = [
  { key: 'ai', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { key: 'grpc', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { key: 'multiTenancy', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { key: 'innovation', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
]
</script>

<template>
  <section id="philosophy" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('philosophy.title') }}</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">{{ t('philosophy.subtitle') }}</p>
        </div>
      </ScrollReveal>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ScrollReveal
          v-for="( item, index ) in items"
          :key="item.key"
          :delay="index * 100"
        >
          <div class="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ t(`philosophy.items.${item.key}.title`) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t(`philosophy.items.${item.key}.description`) }}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
