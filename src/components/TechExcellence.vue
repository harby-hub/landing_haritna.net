<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ScrollReveal from './ScrollReveal.vue'

const { t } = useI18n()

const items = [
  { key: 'cleanCode', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { key: 'apiFirst', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { key: 'performance', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { key: 'ai', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
]
</script>

<template>
  <section id="technology" class="py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('tech.title') }}</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">{{ t('tech.subtitle') }}</p>
        </div>
      </ScrollReveal>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal
          v-for="( item, index ) in items"
          :key="item.key"
          :delay="index * 100"
          :direction="index % 2 === 0 ? 'left' : 'right'"
        >
          <div class="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
            <div class="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" :d="item.icon" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-1">{{ t(`tech.items.${item.key}.title`) }}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ t(`tech.items.${item.key}.description`) }}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
