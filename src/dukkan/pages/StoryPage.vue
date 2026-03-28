<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { professions } from '@/dukkan/data'
import { useScreenshotPath } from '@/dukkan/composables/useScreenshotPath'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import StoryPhase from '@/dukkan/components/StoryPhase.vue'
import SuggestedItems from '@/dukkan/components/SuggestedItems.vue'

const props = defineProps<{ profession: string }>()
const { t } = useI18n()
const { desktopBase: D, mobileBase: M } = useScreenshotPath()

const config = computed( () => professions[props.profession] )

watch( config, ( c ) => {
  document.title = c ? `${t( c.nameKey )} — Dukkan` : 'Dukkan Stories'
}, { immediate: true } )
const isScrolled = ref( false )
const activePhase = ref( '' )

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  const sections = document.querySelectorAll( 'section[id]' )
  let current = ''
  sections.forEach( ( s ) => {
    if ( window.scrollY >= ( s as HTMLElement ).offsetTop - 140 ) current = s.id
  } )
  activePhase.value = current
}

function goTo( id: string ) {
  document.getElementById( id )?.scrollIntoView( { behavior: 'smooth' } )
}

onMounted( () => window.addEventListener( 'scroll', handleScroll, { passive: true } ) )
onUnmounted( () => window.removeEventListener( 'scroll', handleScroll ) )
</script>

<template>
  <div v-if="config" class="min-h-screen bg-background text-foreground">
    <!-- Nav -->
    <nav class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b"
      :class="isScrolled ? 'bg-background/90 backdrop-blur-xl border-border shadow-lg' : 'bg-transparent border-transparent'">
      <div class="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5">
        <RouterLink to="/dukkan/stories" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold">
            <span class="text-accent">{{ config.emoji }}</span>
            <span class="ms-1">{{ t( config.nameKey ) }}</span>
          </span>
        </RouterLink>
        <div class="hidden lg:flex items-center gap-0.5 overflow-x-auto">
          <button
            v-for="phase in config.phases"
            :key="phase.id"
            @click="goTo( phase.id )"
            class="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-[0.7rem] font-semibold transition-colors"
            :class="activePhase === phase.id ? 'bg-accent/15 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'"
          >
            {{ t( phase.labelKey ) }}
          </button>
        </div>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <!-- Hero -->
    <section class="relative pt-28 pb-16 overflow-hidden text-center">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-40 blur-[60px] pointer-events-none"
        style="background: radial-gradient(ellipse at 40% 50%, rgba(232,97,58,.15), transparent 65%), radial-gradient(ellipse at 60% 40%, rgba(42,63,106,.2), transparent 60%);"></div>
      <div class="relative mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="text-6xl mb-6">{{ config.emoji }}</div>
        </ScrollReveal>
        <ScrollReveal :delay="100">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
            {{ t( config.nameKey ) }}
          </h1>
        </ScrollReveal>
        <ScrollReveal :delay="200">
          <p class="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            {{ t( config.subtitleKey ) }}
          </p>
        </ScrollReveal>
        <ScrollReveal :delay="300">
          <div class="flex flex-wrap gap-3 justify-center">
            <button
              v-for="( phase, i ) in config.phases"
              :key="phase.id"
              @click="goTo( phase.id )"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold hover:border-accent/30 transition-colors"
            >
              <span class="w-6 h-6 rounded-lg bg-accent/10 text-accent text-xs font-black inline-flex items-center justify-center">{{ i + 1 }}</span>
              {{ t( phase.labelKey ) }}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- Suggested Items -->
    <div v-if="config.suggestedItems?.length" class="mx-auto max-w-[1100px] px-5">
      <SuggestedItems :items="config.suggestedItems" />
    </div>

    <!-- Phases -->
    <main class="mx-auto max-w-[1100px] px-5">
      <StoryPhase
        v-for="( phase, i ) in config.phases"
        :key="phase.id"
        :phase="phase"
        :index="i"
        :D="D"
        :M="M"
      />
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center border-t border-border">
      <RouterLink to="/dukkan/stories" class="text-accent font-semibold hover:underline">
        ← {{ t( 'stories.index.title' ) }}
      </RouterLink>
      <p class="text-sm text-muted-foreground mt-3">
        <span class="text-accent font-bold">Dukkan</span>
        <span class="ms-1">by Haritna Technologies</span>
      </p>
    </footer>
  </div>

  <!-- 404 -->
  <div v-else class="min-h-screen bg-background text-foreground flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-black mb-4">404</h1>
      <p class="text-muted-foreground mb-6">{{ t( 'stories.notFound' ) }}</p>
      <RouterLink to="/dukkan/stories" class="text-accent font-semibold hover:underline">← {{ t( 'stories.index.title' ) }}</RouterLink>
    </div>
  </div>
</template>
