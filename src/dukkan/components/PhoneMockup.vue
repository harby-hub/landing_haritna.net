<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  src: string
  alt?: string
  size?: 'sm' | 'md' | 'lg'
}>()

const loaded = ref( false )
const error = ref( false )
</script>

<template>
  <div
    class="relative bg-black border-border shadow-2xl"
    :class="{
      'w-36 rounded-[24px] border-4 p-1': size === 'sm',
      'w-48 rounded-[30px] border-[5px] p-1.5': size === 'md' || !size,
      'w-56 rounded-[32px] border-[5px] p-1.5': size === 'lg',
    }"
    style="box-shadow: 0 16px 48px rgba(0,0,0,.4), 0 0 50px rgba(42,63,106,.12);"
  >
    <!-- Notch -->
    <div
      class="absolute left-1/2 -translate-x-1/2 bg-border z-10"
      :class="{
        'top-1 w-12 h-3.5 rounded-lg': size === 'sm',
        'top-1.5 w-16 h-4 rounded-xl': size === 'md' || !size,
        'top-1.5 w-18 h-4.5 rounded-xl': size === 'lg',
      }"
    ></div>

    <!-- Skeleton -->
    <div
      v-if="!loaded && !error"
      class="w-full aspect-[9/19.5] animate-pulse bg-muted relative z-[1]"
      :class="{
        'rounded-[18px]': size === 'sm',
        'rounded-[22px]': size === 'md' || !size,
        'rounded-[24px]': size === 'lg',
      }"
    ></div>

    <!-- Image -->
    <img
      :src="src"
      :alt="alt || ''"
      class="w-full relative z-[1]"
      :class="[
        loaded ? 'opacity-100' : 'opacity-0 absolute inset-0',
        {
          'rounded-[18px]': size === 'sm',
          'rounded-[22px]': size === 'md' || !size,
          'rounded-[24px]': size === 'lg',
        },
      ]"
      style="transition: opacity 0.3s ease;"
      @load="loaded = true"
      @error="error = true"
    />

    <!-- Error fallback -->
    <div
      v-if="error"
      class="w-full aspect-[9/19.5] bg-muted flex items-center justify-center text-muted-foreground text-[0.6rem] relative z-[1]"
      :class="{
        'rounded-[18px]': size === 'sm',
        'rounded-[22px]': size === 'md' || !size,
        'rounded-[24px]': size === 'lg',
      }"
    >
      Screenshot unavailable
    </div>
  </div>
</template>
