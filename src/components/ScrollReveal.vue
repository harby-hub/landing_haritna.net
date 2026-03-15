<script setup lang="ts">
import { useScrollAnimation } from '../composables/useScrollAnimation'

const props = withDefaults( defineProps<{
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}>(), {
  delay: 0,
  direction: 'up',
})

const { elementRef, isVisible } = useScrollAnimation()

const directionClasses: Record<string, string> = {
  up: 'translate-y-8',
  down: '-translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
}
</script>

<template>
  <div
    ref="elementRef"
    class="transition-all duration-700 ease-out"
    :class="isVisible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${directionClasses[props.direction]}`"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <slot />
  </div>
</template>
