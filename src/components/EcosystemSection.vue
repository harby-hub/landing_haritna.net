<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { useScreenshotPath } from '@/dukkan/composables/useScreenshotPath'
import ScrollReveal from './ScrollReveal.vue'
import dokanIcon from '@/assets/dokan-icon.png'

const { t } = useI18n()
const { desktopBase: D } = useScreenshotPath()

const portals = [
  { key: 'company', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: 'text-primary' },
  { key: 'staff', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: 'text-blue-400' },
  { key: 'driver', icon: 'M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0', color: 'text-green-400' },
  { key: 'shop', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z', color: 'text-accent' },
]

/* D comes from useScreenshotPath() above */
</script>

<template>
  <section id="ecosystem" class="py-24 px-4 bg-card/50">
    <div class="max-w-6xl mx-auto">
      <ScrollReveal>
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold mb-4">{{ t('ecosystem.title') }}</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">{{ t('ecosystem.subtitle') }}</p>
        </div>
      </ScrollReveal>

      <!-- Haritna umbrella -->
      <ScrollReveal :delay="100">
        <div class="text-center mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
          <h3 class="text-2xl font-bold text-primary mb-3">{{ t('ecosystem.haritna.title') }}</h3>
          <p class="text-muted-foreground max-w-xl mx-auto">{{ t('ecosystem.haritna.description') }}</p>
        </div>
      </ScrollReveal>

      <!-- Dukkan card -->
      <ScrollReveal :delay="200">
        <div class="rounded-2xl bg-card border border-border overflow-hidden">
          <div class="flex items-center gap-6 p-8 border-b border-border bg-gradient-to-l from-accent/10 to-transparent rtl:bg-gradient-to-r">
            <img :src="dokanIcon" alt="Dukkan Logo" class="h-24 w-24 shrink-0 object-contain drop-shadow-lg" />
            <div>
              <div class="flex items-center gap-3 mb-2">
                <h3 class="text-2xl font-bold">{{ t('ecosystem.dukkan.title') }}</h3>
                <span class="px-3 py-1 text-xs font-bold rounded-full bg-accent/20 text-accent border border-accent/30">
                  {{ t('ecosystem.dukkan.badge') }}
                </span>
              </div>
              <p class="text-muted-foreground">{{ t('ecosystem.dukkan.description') }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border rtl:sm:divide-x-reverse">
            <div
              v-for="( portal, index ) in portals"
              :key="portal.key"
              class="p-6 hover:bg-muted/30 transition-colors"
              :class="{ 'sm:border-b sm:border-border': index < 2 }"
            >
              <div class="flex items-start gap-3">
                <div class="mt-0.5 shrink-0">
                  <svg :class="`w-5 h-5 ${portal.color}`" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="portal.icon" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold mb-1">{{ t(`ecosystem.dukkan.portals.${portal.key}`) }}</h4>
                  <p class="text-sm text-muted-foreground">{{ t(`ecosystem.dukkan.portals.${portal.key}Desc`) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <!-- Dukkan App Preview — 3D Screenshots -->
      <ScrollReveal :delay="300">
        <div class="mt-16 relative" style="perspective: 1200px;">
          <!-- 3D floating screenshots -->
          <div class="relative h-[340px] sm:h-[400px] max-w-4xl mx-auto">
            <!-- Back: Dashboard -->
            <div class="absolute left-1/2 top-0 -translate-x-1/2 w-[85%] sm:w-[70%] rounded-xl overflow-hidden border border-border/50 shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                 style="transform: perspective(1200px) rotateX(5deg) rotateY(0deg) translateZ(-20px);">
              <img :src="`${D}/dashboard.png`" alt="Dukkan Dashboard" class="w-full block" />
            </div>

            <!-- Front-left: Products -->
            <div class="absolute left-0 sm:left-[2%] bottom-0 w-[52%] sm:w-[44%] rounded-xl overflow-hidden border border-border/50 shadow-2xl transition-transform duration-700 hover:scale-105 hover:z-20"
                 style="transform: perspective(1200px) rotateY(12deg) rotateX(2deg) translateZ(30px);">
              <img :src="`${D}/storefront.png`" alt="Dukkan Storefront" class="w-full block" />
            </div>

            <!-- Front-right: Orders -->
            <div class="absolute right-0 sm:right-[2%] bottom-4 w-[48%] sm:w-[40%] rounded-xl overflow-hidden border border-border/50 shadow-2xl transition-transform duration-700 hover:scale-105 hover:z-20"
                 style="transform: perspective(1200px) rotateY(-12deg) rotateX(2deg) translateZ(30px);">
              <img :src="`${D}/company-products.png`" alt="Dukkan Products" class="w-full block" />
            </div>
          </div>

          <!-- CTA -->
          <div class="text-center mt-10">
            <RouterLink
              to="/dukkan"
              class="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
            >
              {{ t('ecosystem.dukkan.cta') }}
              <svg class="w-5 h-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </RouterLink>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
