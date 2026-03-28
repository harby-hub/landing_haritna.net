<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt?: string
  url?: string
}>()

const loaded = ref( false )
const error = ref( false )
</script>

<template>
  <div class="rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
    <div class="h-8 bg-muted flex items-center px-3 gap-1.5 border-b border-border">
      <span class="w-2 h-2 rounded-full bg-red-400"></span>
      <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
      <span class="w-2 h-2 rounded-full bg-green-400"></span>
      <span v-if="url" class="flex-1 ms-2 h-5 bg-background rounded text-[0.6rem] text-muted-foreground flex items-center px-2.5 truncate">
        {{ url }}
      </span>
    </div>
    <!-- Skeleton -->
    <div v-if="!loaded && !error" class="w-full aspect-video animate-pulse bg-muted"></div>
    <!-- Image -->
    <img
      :src="src"
      :alt="alt || ''"
      class="w-full block"
      :class="loaded ? 'opacity-100' : 'opacity-0 h-0'"
      style="transition: opacity 0.3s ease;"
      @load="loaded = true"
      @error="error = true"
    />
    <!-- Error fallback -->
    <div v-if="error" class="w-full aspect-video bg-muted flex items-center justify-center text-muted-foreground text-xs">
      Screenshot unavailable
    </div>
  </div>
</template>
