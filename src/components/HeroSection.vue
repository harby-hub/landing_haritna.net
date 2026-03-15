<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThreeScene } from '../composables/useThreeScene'

const { t } = useI18n()
const { canvasRef } = useThreeScene()

function scrollToEcosystem() {
  document.getElementById( 'ecosystem' )?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Three.js Canvas -->
    <canvas
      ref="canvasRef"
      class="absolute inset-0 w-full h-full"
    />

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background pointer-events-none" />

    <!-- Logo pinned to top -->
    <div class="absolute top-20 sm:top-24 inset-x-0 z-10 flex justify-center pointer-events-none">
      <img
        src="/logo-tagline.png"
        alt="Haritna Technologies — تكنولوجيا طالعة من الأصل"
        class="w-72 sm:w-96 drop-shadow-2xl"
      />
    </div>

    <!-- Text pinned to bottom area, below the scarab -->
    <div class="absolute bottom-36 sm:bottom-44 inset-x-0 z-10 flex flex-col items-center px-4">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-center">
        <span class="text-foreground">{{ t('hero.slogan') }}</span>
      </h1>

      <p class="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 text-center">
        {{ t('hero.description') }}
      </p>

      <button
        @click="scrollToEcosystem"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
      >
        {{ t('hero.cta') }}
        <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>
