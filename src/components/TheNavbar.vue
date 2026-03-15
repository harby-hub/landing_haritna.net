<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'
import ThemeToggle from './ThemeToggle.vue'

const { t } = useI18n()
const isScrolled = ref( false )
const isMobileOpen = ref( false )

const sections = [
  { id: 'hero', key: 'nav.home' },
  { id: 'philosophy', key: 'nav.philosophy' },
  { id: 'ecosystem', key: 'nav.ecosystem' },
  { id: 'technology', key: 'nav.technology' },
  { id: 'enterprise', key: 'nav.enterprise' },
]

function scrollTo( id: string ) {
  const el = document.getElementById( id )
  if ( el ) {
    el.scrollIntoView({ behavior: 'smooth' })
    isMobileOpen.value = false
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted( () => window.addEventListener( 'scroll', handleScroll ) )
onUnmounted( () => window.removeEventListener( 'scroll', handleScroll ) )
</script>

<template>
  <nav
    class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg border-b border-border' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button @click="scrollTo('hero')" class="flex items-center gap-2 cursor-pointer">
          <img src="/logo.png" alt="Haritna" class="h-9 w-auto" />
          <span class="text-lg font-bold text-primary hidden sm:inline">Haritna</span>
        </button>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="scrollTo( section.id )"
            class="px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted hover:text-primary transition-colors"
          >
            {{ t( section.key ) }}
          </button>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />

          <!-- Mobile hamburger -->
          <button
            @click="isMobileOpen = !isMobileOpen"
            class="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path v-if="!isMobileOpen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMobileOpen" class="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
        <div class="px-4 py-3 space-y-1">
          <button
            v-for="section in sections"
            :key="section.id"
            @click="scrollTo( section.id )"
            class="block w-full text-start px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted hover:text-primary transition-colors"
          >
            {{ t( section.key ) }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
