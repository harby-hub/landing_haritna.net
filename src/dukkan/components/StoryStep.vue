<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Step } from '@/dukkan/data/types'
import ScrollReveal from '@/components/ScrollReveal.vue'
import PhoneMockup from '@/dukkan/components/PhoneMockup.vue'
import BrowserMockup from '@/dukkan/components/BrowserMockup.vue'

const props = defineProps<{
  step: Step
  index: number
  D: string
  M: string
}>()

const { t } = useI18n()
const isOdd = props.index % 2 === 1

const lightboxSrc = ref( '' )
function openLightbox( src: string ) { lightboxSrc.value = src }
function closeLightbox() { lightboxSrc.value = '' }

function onKeydown( e: KeyboardEvent ) {
  if ( e.key === 'Escape' && lightboxSrc.value ) closeLightbox()
}
onMounted( () => window.addEventListener( 'keydown', onKeydown ) )
onUnmounted( () => window.removeEventListener( 'keydown', onKeydown ) )
</script>

<template>
  <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
    <ScrollReveal :direction="isOdd ? 'right' : 'left'" :class="isOdd ? 'md:order-2' : ''">
      <div>
        <h3 class="text-xl font-bold mb-3">{{ t( step.titleKey ) }}</h3>
        <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( step.descKey ) }}</p>
        <ul v-if="step.bullets?.length" class="space-y-2">
          <li v-for="b in step.bullets" :key="b" class="flex items-start gap-2.5 text-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
            {{ t( b ) }}
          </li>
        </ul>
      </div>
    </ScrollReveal>

    <ScrollReveal :direction="isOdd ? 'left' : 'right'" :class="isOdd ? 'md:order-1' : ''">
      <!-- Phone -->
      <div v-if="step.screenshot.type === 'phone'" class="flex justify-center cursor-zoom-in" @click="openLightbox( `${M}/${step.screenshot.mobile}` )">
        <PhoneMockup :src="`${M}/${step.screenshot.mobile}`" :alt="t( step.titleKey )" />
      </div>

      <!-- Browser -->
      <div v-else-if="step.screenshot.type === 'browser'" class="cursor-zoom-in" @click="openLightbox( `${D}/${step.screenshot.desktop}` )">
        <BrowserMockup
          :src="`${D}/${step.screenshot.desktop}`"
          :url="step.screenshot.browserUrl"
          :alt="t( step.titleKey )"
        />
      </div>

      <!-- Phone pair -->
      <div v-else-if="step.screenshot.type === 'phone-pair'" class="flex gap-3 justify-center">
        <div class="cursor-zoom-in" @click="openLightbox( `${M}/${step.screenshot.mobile}` )">
          <PhoneMockup :src="`${M}/${step.screenshot.mobile}`" :alt="t( step.titleKey )" size="sm" />
        </div>
        <div class="cursor-zoom-in" @click="openLightbox( `${M}/${step.screenshot.mobileAlt}` )">
          <PhoneMockup :src="`${M}/${step.screenshot.mobileAlt}`" alt="" size="sm" />
        </div>
      </div>

      <!-- Browser + Phone -->
      <div v-else-if="step.screenshot.type === 'browser-phone'" class="flex items-center gap-4 justify-center">
        <div class="max-w-[340px] hidden sm:block cursor-zoom-in" @click="openLightbox( `${D}/${step.screenshot.desktop}` )">
          <BrowserMockup :src="`${D}/${step.screenshot.desktop}`" :alt="t( step.titleKey )" />
        </div>
        <div class="cursor-zoom-in" @click="openLightbox( `${M}/${step.screenshot.mobile}` )">
          <PhoneMockup :src="`${M}/${step.screenshot.mobile}`" alt="" size="sm" />
        </div>
      </div>
    </ScrollReveal>
  </div>

  <!-- Lightbox -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-if="lightboxSrc"
        class="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
        @click="closeLightbox"
      >
        <button class="absolute top-5 right-5 text-white/70 hover:text-white text-3xl font-light z-10" @click.stop="closeLightbox">
          &times;
        </button>
        <img
          :src="lightboxSrc"
          class="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
          @click.stop
        />
      </div>
    </Transition>
  </Teleport>
</template>
