<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import PhilosophySection from '@/components/PhilosophySection.vue'
import EcosystemSection from '@/components/EcosystemSection.vue'
import TechExcellence from '@/components/TechExcellence.vue'
import EnterpriseReady from '@/components/EnterpriseReady.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground overflow-x-hidden">
    <TheNavbar />
    <main>
      <HeroSection />
      <PhilosophySection />
      <EcosystemSection />
      <TechExcellence />
      <EnterpriseReady />
    </main>
    <TheFooter />
  </div>
</template>
