<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { SuggestedItem } from '@/dukkan/data/types'
import ScrollReveal from '@/components/ScrollReveal.vue'

defineProps<{
  items: SuggestedItem[]
}>()

const { t } = useI18n()

const typeConfig = {
  product: { emoji: '📦', labelKey: 'stories.itemTypes.product', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  service: { emoji: '🔧', labelKey: 'stories.itemTypes.service', color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  custom: { emoji: '📋', labelKey: 'stories.itemTypes.custom', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
}
</script>

<template>
  <section class="py-16 border-b border-border">
    <ScrollReveal>
      <div class="text-center mb-10">
        <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">
          {{ t( 'stories.suggested.label' ) }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{{ t( 'stories.suggested.title' ) }}</h2>
        <p class="text-muted-foreground max-w-lg mx-auto text-sm">{{ t( 'stories.suggested.desc' ) }}</p>
      </div>
    </ScrollReveal>

    <ScrollReveal>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="( item, i ) in items"
          :key="i"
          class="bg-card border border-border rounded-xl p-5 hover:border-accent/30 transition-colors"
        >
          <!-- Type badge -->
          <span
            class="inline-flex items-center gap-1 text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-3"
            :class="typeConfig[item.type].color"
          >
            {{ typeConfig[item.type].emoji }} {{ t( typeConfig[item.type].labelKey ) }}
          </span>

          <!-- Name -->
          <h4 class="font-bold text-sm mb-3">{{ t( item.nameKey ) }}</h4>

          <!-- Price + Duration -->
          <div class="flex items-center gap-4 text-xs mt-1">
            <div>
              <span class="text-muted-foreground">{{ t( 'stories.itemLabels.price' ) }}: </span>
              <span class="font-bold text-accent">{{ t( item.priceKey ) }}</span>
            </div>
            <div v-if="item.durationKey">
              <span class="text-muted-foreground">{{ t( 'stories.itemLabels.duration' ) }}: </span>
              <span class="font-semibold">{{ t( item.durationKey ) }}</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
</template>
