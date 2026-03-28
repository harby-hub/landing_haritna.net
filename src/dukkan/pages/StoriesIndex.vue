<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { professionList } from '@/dukkan/data'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'

const { t } = useI18n()
onMounted( () => { document.title = `${t( 'stories.index.title' )} — Dukkan` } )
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Nav -->
    <nav class="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div class="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-5">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold text-accent">Dukkan Stories</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <main class="mx-auto max-w-[1100px] px-5 py-20">
      <!-- Hero -->
      <ScrollReveal>
        <div class="text-center mb-16">
          <h1 class="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            {{ t( 'stories.index.title' ) }}
          </h1>
          <p class="text-muted-foreground text-lg max-w-lg mx-auto">
            {{ t( 'stories.index.subtitle' ) }}
          </p>
        </div>
      </ScrollReveal>

      <!-- Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ScrollReveal
          v-for="( prof, i ) in professionList"
          :key="prof.slug"
          :delay="i * 80"
        >
          <RouterLink
            :to="`/dukkan/stories/${prof.slug}`"
            class="block bg-card border border-border rounded-2xl p-8 text-center hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
          >
            <div class="text-5xl mb-4">{{ prof.emoji }}</div>
            <h3 class="text-lg font-bold mb-2">{{ t( prof.nameKey ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">
              {{ t( prof.subtitleKey ) }}
            </p>
            <span class="inline-flex items-center gap-1 text-accent text-sm font-semibold">
              {{ t( 'stories.index.cta' ) }} →
            </span>
          </RouterLink>
        </ScrollReveal>
      </div>
    </main>

    <footer class="py-12 text-center border-t border-border">
      <p class="text-sm text-muted-foreground">
        <span class="text-accent font-bold">Dukkan</span>
        <span class="ms-1">by Haritna Technologies</span>
      </p>
    </footer>
  </div>
</template>
