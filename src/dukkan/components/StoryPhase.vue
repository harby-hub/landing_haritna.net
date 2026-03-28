<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Phase } from '@/dukkan/data/types'
import ScrollReveal from '@/components/ScrollReveal.vue'
import StoryStep from '@/dukkan/components/StoryStep.vue'

defineProps<{
  phase: Phase
  index: number
  D: string
  M: string
}>()

const { t } = useI18n()
</script>

<template>
  <section :id="phase.id" class="py-20 border-b border-border">
    <!-- Phase header -->
    <ScrollReveal>
      <div class="mb-12">
        <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">
          {{ index + 1 }}
        </div>
        <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">
          {{ t( phase.labelKey ) }}
        </span>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( phase.titleKey ) }}</h2>
        <p class="text-muted-foreground mt-2 max-w-lg">{{ t( phase.descKey ) }}</p>
      </div>
    </ScrollReveal>

    <!-- Scenario card -->
    <ScrollReveal>
      <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
        <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">
          {{ phase.emoji }}
        </div>
        <p class="text-sm leading-relaxed">{{ t( phase.scenarioKey ) }}</p>
      </div>
    </ScrollReveal>

    <!-- Steps -->
    <StoryStep
      v-for="( step, si ) in phase.steps"
      :key="si"
      :step="step"
      :index="si"
      :D="D"
      :M="M"
    />
  </section>
</template>
