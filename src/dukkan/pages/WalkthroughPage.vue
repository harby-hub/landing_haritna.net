<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { professionList } from '@/dukkan/data'
import { useScreenshotPath } from '@/dukkan/composables/useScreenshotPath'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import ScrollReveal from '@/components/ScrollReveal.vue'
import PhoneMockup from '@/dukkan/components/PhoneMockup.vue'
import BrowserMockup from '@/dukkan/components/BrowserMockup.vue'

const { t } = useI18n()
const { desktopBase: D, mobileBase: M } = useScreenshotPath()
const isScrolled = ref( false )
const activeFlow = ref( '' )

const flows = [
  { id: 'f1', key: 'wt.nav.register' },
  { id: 'f2', key: 'wt.nav.shop' },
  { id: 'f3', key: 'wt.nav.types' },
  { id: 'f4', key: 'wt.nav.cart' },
  { id: 'f5', key: 'wt.nav.business' },
  { id: 'f6', key: 'wt.nav.catalog' },
  { id: 'f7', key: 'wt.nav.orders' },
  { id: 'f8', key: 'wt.nav.social' },
  { id: 'f9', key: 'wt.nav.builder' },
  { id: 'f10', key: 'wt.nav.delivery' },
  { id: 'f11', key: 'wt.nav.chat' },
  { id: 'f12', key: 'wt.nav.pos' },
  { id: 'f13', key: 'wt.nav.analytics' },
  { id: 'f14', key: 'wt.nav.tickets' },
  { id: 'f15', key: 'wt.nav.coupons' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  const sections = document.querySelectorAll( 'section[id]' )
  let current = ''
  sections.forEach( ( s ) => {
    if ( window.scrollY >= ( s as HTMLElement ).offsetTop - 140 ) current = s.id
  } )
  activeFlow.value = current
}

function goTo( id: string ) {
  document.getElementById( id )?.scrollIntoView( { behavior: 'smooth' } )
}

onMounted( () => window.addEventListener( 'scroll', handleScroll, { passive: true } ) )
onUnmounted( () => window.removeEventListener( 'scroll', handleScroll ) )
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">

    <!-- NAV -->
    <nav class="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b"
      :class="isScrolled ? 'bg-background/90 backdrop-blur-xl border-border shadow-lg' : 'bg-transparent border-transparent'">
      <div class="mx-auto flex h-14 max-w-[1200px] items-center justify-between px-5">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold"><span class="text-accent">Dukkan</span><span class="text-muted-foreground ms-1 hidden sm:inline">Walkthrough</span></span>
        </RouterLink>
        <div class="hidden lg:flex items-center gap-0.5 overflow-x-auto">
          <button v-for="f in flows" :key="f.id" @click="goTo( f.id )"
            class="whitespace-nowrap px-2.5 py-1.5 rounded-lg text-[0.7rem] font-semibold transition-colors"
            :class="activeFlow === f.id ? 'bg-accent/15 text-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'">
            {{ t( f.key ) }}
          </button>
        </div>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="relative pt-28 pb-16 overflow-hidden text-center">
      <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-40 blur-[60px] pointer-events-none"
        style="background: radial-gradient(ellipse at 40% 50%, rgba(232,97,58,.15), transparent 65%), radial-gradient(ellipse at 60% 40%, rgba(42,63,106,.2), transparent 60%);"></div>
      <div class="relative mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs font-semibold text-muted-foreground mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_6px] shadow-accent"></span>
            {{ t( 'wt.hero.badge' ) }}
          </div>
        </ScrollReveal>
        <ScrollReveal :delay="100">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5">
            {{ t( 'wt.hero.title1' ) }}<span class="bg-gradient-to-r from-accent to-orange-400 bg-clip-text text-transparent">Dukkan</span>{{ t( 'wt.hero.title2' ) }}
          </h1>
        </ScrollReveal>
        <ScrollReveal :delay="200">
          <p class="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">{{ t( 'wt.hero.desc' ) }}</p>
        </ScrollReveal>
        <ScrollReveal :delay="300">
          <div class="relative max-w-[900px] mx-auto" style="perspective: 1200px;">
            <BrowserMockup :src="`${D}/products.png`" url="dukkan-app.haritna.net/shop/products" alt="Browse Products" />
            <div class="absolute -right-2 -bottom-6 z-10 hidden sm:block">
              <PhoneMockup :src="`${M}/storefront.png`" alt="Mobile storefront" size="sm" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- STATS -->
    <div class="mx-auto max-w-[1100px] px-5">
      <ScrollReveal>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-10 border-y border-border">
          <div v-for="s in [{v:'15',l:'wt.stats.flows'},{v:'4',l:'wt.stats.types'},{v:'EN/AR',l:'wt.stats.bilingual'},{v:'4',l:'wt.stats.platforms'}]" :key="s.l" class="text-center">
            <div class="text-2xl sm:text-3xl font-black bg-gradient-to-br from-foreground to-accent bg-clip-text text-transparent">{{ s.v }}</div>
            <div class="text-xs text-muted-foreground mt-1">{{ t( s.l ) }}</div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <!-- Stories Section -->
    <section class="py-16 border-b border-border">
      <div class="mx-auto max-w-[1100px] px-5">
        <ScrollReveal>
          <div class="text-center mb-10">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'stories.index.title' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-3">{{ t( 'wt.stories_cta.title' ) }}</h2>
            <p class="text-muted-foreground max-w-lg mx-auto">{{ t( 'wt.stories_cta.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            <RouterLink
              v-for="prof in professionList"
              :key="prof.slug"
              :to="`/dukkan/stories/${prof.slug}`"
              class="block bg-card border border-border rounded-2xl p-6 text-center hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div class="text-4xl mb-3">{{ prof.emoji }}</div>
              <h3 class="font-bold mb-1">{{ t( prof.nameKey ) }}</h3>
              <p class="text-xs text-muted-foreground">{{ t( prof.subtitleKey ) }}</p>
            </RouterLink>
          </div>
          <div class="text-center">
            <RouterLink to="/dukkan/stories" class="inline-flex items-center gap-1 text-accent text-sm font-semibold hover:underline">
              {{ t( 'wt.stories_cta.all' ) }} →
            </RouterLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <main class="mx-auto max-w-[1100px] px-5">

      <!-- ═══ FLOW 1: REGISTER ═══ -->
      <section id="f1" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">1</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f1.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f1.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f1.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
            <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">&#128105;</div>
            <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( 'wt.f1.scenario' ) }}</p>
          </div>
        </ScrollReveal>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f1.s1.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f1.s1.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f1.s1.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f1.s1.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex justify-center">
              <PhoneMockup :src="`${M}/register.png`" alt="Register" />
            </div>
          </ScrollReveal>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" class="md:order-2">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f1.s2.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f1.s2.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f1.s2.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f1.s2.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <div class="flex justify-center">
              <PhoneMockup :src="`${M}/login.png`" alt="Login" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 2: SHOP ═══ -->
      <section id="f2" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">2</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f2.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f2.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f2.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
            <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">&#128104;</div>
            <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( 'wt.f2.scenario' ) }}</p>
          </div>
        </ScrollReveal>

        <!-- Storefront -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f2.s1.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f2.s1.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f2.s1.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f2.s1.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <BrowserMockup :src="`${D}/storefront.png`" url="dukkan-app.haritna.net" alt="Storefront" />
          </ScrollReveal>
        </div>

        <!-- Browse products -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="right" class="md:order-2">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f2.s2.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f2.s2.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f2.s2.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f2.s2.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <div class="flex items-center gap-4 justify-center">
              <div class="max-w-[340px]">
                <BrowserMockup :src="`${D}/products.png`" alt="Products grid" />
              </div>
              <div class="hidden sm:block">
                <PhoneMockup :src="`${M}/products.png`" alt="Mobile products" size="sm" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- Product detail -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f2.s3.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f2.s3.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f2.s3.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex justify-center">
              <PhoneMockup :src="`${M}/storefront.png`" alt="Storefront with companies" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 3: PRODUCT TYPES ═══ -->
      <section id="f3" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">3</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f3.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f3.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f3.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <div class="grid sm:grid-cols-2 gap-4 mb-12">
          <ScrollReveal v-for="( type, i ) in ['standard','custom','service','auction']" :key="type" :delay="i * 80">
            <div class="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <h4 class="font-bold mb-2">{{ t( `wt.f3.${type}.title` ) }}</h4>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ t( `wt.f3.${type}.desc` ) }}</p>
            </div>
          </ScrollReveal>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div class="flex justify-center">
              <PhoneMockup :src="`${M}/product-create.png`" alt="Create product" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f3.create.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f3.create.desc' ) }}</p>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 4: CART & ORDER ═══ -->
      <section id="f4" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">4</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f4.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f4.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f4.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
            <div v-for="( step, i ) in ['s1','s2','s3','s4']" :key="step"
              class="bg-card border border-border rounded-xl p-5 text-center hover:border-accent transition-colors hover:-translate-y-1 duration-200">
              <div class="w-9 h-9 rounded-lg bg-accent/10 text-accent font-black text-sm inline-flex items-center justify-center mb-3">{{ i + 1 }}</div>
              <h4 class="text-sm font-bold mb-1">{{ t( `wt.f4.${step}.title` ) }}</h4>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ t( `wt.f4.${step}.desc` ) }}</p>
            </div>
          </div>
        </ScrollReveal>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f4.detail.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f4.detail.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f4.detail.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex gap-3 justify-center">
              <PhoneMockup :src="`${M}/orders-list.png`" alt="Orders list" size="sm" />
              <PhoneMockup :src="`${M}/company-products.png`" alt="Company products" size="sm" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 5: BUSINESS ═══ -->
      <section id="f5" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">5</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f5.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f5.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f5.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
            <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">&#128105;</div>
            <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( 'wt.f5.scenario' ) }}</p>
          </div>
        </ScrollReveal>

        <!-- Create company -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f5.s1.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f5.s1.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f5.s1.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f5.s1.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex gap-3 justify-center items-start">
              <PhoneMockup :src="`${M}/dashboard.png`" alt="Company Dashboard" size="sm" />
              <PhoneMockup :src="`${M}/company-create.png`" alt="Create Company" size="sm" />
            </div>
          </ScrollReveal>
        </div>

        <!-- Dashboard -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="right" class="md:order-2">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f5.s2.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f5.s2.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f5.s2.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <BrowserMockup :src="`${D}/dashboard.png`" url="Elegance Fashion — Dashboard" alt="Dashboard" />
          </ScrollReveal>
        </div>

        <!-- Branches + Settings -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f5.s3.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f5.s3.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f5.s3.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex gap-3 justify-center items-start">
              <PhoneMockup :src="`${M}/branches.png`" alt="Branches" size="sm" />
              <PhoneMockup :src="`${M}/company-settings.png`" alt="Settings" size="sm" />
            </div>
          </ScrollReveal>
        </div>

        <!-- Team Invitations -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" class="md:order-2">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f5.s4.tag' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f5.s4.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f5.s4.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <BrowserMockup :src="`${D}/company-members.png`" url="Team Members — Invitations" alt="Team invitations" />
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 6: CATALOG ═══ -->
      <section id="f6" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">6</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f6.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f6.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f6.desc' ) }}</p>
          </div>
        </ScrollReveal>

        <!-- Categories -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f6.cats.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f6.cats.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex items-center gap-4 justify-center">
              <div class="max-w-[340px]">
                <BrowserMockup :src="`${D}/company-categories.png`" alt="Categories desktop" />
              </div>
              <div class="hidden sm:block">
                <PhoneMockup :src="`${M}/category-tree.png`" alt="Category tree" size="sm" />
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- Products -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="right" class="md:order-2">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f6.prods.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f6.prods.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <BrowserMockup :src="`${D}/company-products.png`" url="Products — Elegance Fashion" alt="Products management" />
          </ScrollReveal>
        </div>

        <!-- Media Library -->
        <ScrollReveal>
          <div class="bg-card border border-border rounded-2xl p-6">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f6.media.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f6.media.desc' ) }}</p>
          </div>
        </ScrollReveal>
      </section>

      <!-- ═══ FLOW 7: ORDERS ═══ -->
      <section id="f7" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">7</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f7.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f7.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f7.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
            <div v-for="s in [{k:'pending',c:'bg-yellow-400'},{k:'confirmed',c:'bg-primary-light'},{k:'ready',c:'bg-accent'},{k:'delivered',c:'bg-green-500'}]" :key="s.k"
              class="bg-card border border-border rounded-xl p-4 text-center">
              <div class="w-3 h-3 rounded-full mx-auto mb-2" :class="s.c"></div>
              <h4 class="text-sm font-bold">{{ t( `wt.f7.${s.k}.title` ) }}</h4>
              <p class="text-xs text-muted-foreground mt-1">{{ t( `wt.f7.${s.k}.desc` ) }}</p>
            </div>
          </div>
        </ScrollReveal>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f7.list.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f7.list.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex items-center gap-4 justify-center">
              <div class="max-w-[340px]">
                <BrowserMockup :src="`${D}/orders-list.png`" alt="Orders desktop" />
              </div>
              <div class="hidden sm:block">
                <PhoneMockup :src="`${M}/orders-list.png`" alt="Orders mobile" size="sm" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 8: SOCIAL ═══ -->
      <section id="f8" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">8</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f8.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f8.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f8.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid sm:grid-cols-3 gap-4">
            <div class="bg-card border border-border rounded-2xl p-5">
              <h4 class="font-bold mb-1">{{ t( 'wt.f8.follow.title' ) }}</h4>
              <p class="text-xs text-muted-foreground leading-relaxed mb-3">{{ t( 'wt.f8.follow.desc' ) }}</p>
              <div class="flex justify-center">
                <PhoneMockup :src="`${M}/following.png`" alt="Following" size="sm" />
              </div>
            </div>
            <div class="bg-card border border-border rounded-2xl p-5">
              <h4 class="font-bold mb-1">{{ t( 'wt.f8.wishlist.title' ) }}</h4>
              <p class="text-xs text-muted-foreground leading-relaxed mb-3">{{ t( 'wt.f8.wishlist.desc' ) }}</p>
              <div class="flex justify-center">
                <PhoneMockup :src="`${M}/wishlist.png`" alt="Wishlist" size="sm" />
              </div>
            </div>
            <div class="bg-card border border-border rounded-2xl p-5">
              <h4 class="font-bold mb-1">{{ t( 'wt.f8.reviews.title' ) }}</h4>
              <p class="text-xs text-muted-foreground leading-relaxed mb-3">{{ t( 'wt.f8.reviews.desc' ) }}</p>
              <div class="flex justify-center">
                <PhoneMockup :src="`${M}/profile.png`" alt="Profile" size="sm" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <!-- ═══ FLOW 9: PAGE BUILDER ═══ -->
      <section id="f9" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">9</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f9.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f9.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f9.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f9.sections.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f9.sections.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <BrowserMockup :src="`${D}/page-builder.png`" url="Page Builder — Sections" alt="Page Builder" />
          </ScrollReveal>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" class="md:order-2">
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f9.result.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ t( 'wt.f9.result.desc' ) }}</p>
          </ScrollReveal>
          <ScrollReveal direction="left" class="md:order-1">
            <BrowserMockup :src="`${D}/public-page.png`" url="Company Public Page — Elegance Fashion" alt="Published company page" />
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 10: DELIVERY ═══ -->
      <section id="f10" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">10</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f10.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f10.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f10.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14">
            <div v-for="( step, i ) in ['s1','s2','s3','s4']" :key="step"
              class="bg-card border border-border rounded-xl p-5 text-center hover:border-accent transition-colors">
              <div class="w-9 h-9 rounded-lg bg-accent/10 text-accent font-black text-sm inline-flex items-center justify-center mb-3">{{ i + 1 }}</div>
              <h4 class="text-sm font-bold mb-1">{{ t( `wt.f10.${step}.title` ) }}</h4>
              <p class="text-xs text-muted-foreground leading-relaxed">{{ t( `wt.f10.${step}.desc` ) }}</p>
            </div>
          </div>
        </ScrollReveal>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <BrowserMockup :src="`${D}/delivery-home.png`" url="Delivery Portal — Home" alt="Delivery home" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex gap-3 justify-center">
              <PhoneMockup :src="`${M}/delivery-stats.png`" alt="Delivery stats" size="sm" />
              <PhoneMockup :src="`${M}/delivery-profile.png`" alt="Delivery profile" size="sm" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 11: CHAT ═══ -->
      <section id="f11" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">11</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f11.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f11.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f11.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <!-- Chat: desktop + mobile screenshots -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f11.label' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f11.chat.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f11.chat.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3','b4']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f11.chat.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex items-center gap-4 justify-center">
              <div class="max-w-[340px] hidden sm:block">
                <BrowserMockup :src="`${D}/chat.png`" alt="Chat conversations" />
              </div>
              <PhoneMockup :src="`${M}/chat.png`" alt="Chat mobile" size="sm" />
            </div>
          </ScrollReveal>
        </div>

        <!-- Notifications -->
        <div class="grid md:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.f11.label' ) }}</span>
            <h3 class="text-xl font-bold mb-3">{{ t( 'wt.f11.notif.title' ) }}</h3>
            <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( 'wt.f11.notif.desc' ) }}</p>
            <ul class="space-y-2">
              <li v-for="b in ['b1','b2','b3','b4']" :key="b" class="flex items-start gap-2.5 text-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                {{ t( `wt.f11.notif.${b}` ) }}
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="flex items-center gap-4 justify-center">
              <div class="max-w-[340px] hidden sm:block">
                <BrowserMockup :src="`${D}/notifications.png`" alt="Notifications" />
              </div>
              <PhoneMockup :src="`${M}/notifications.png`" alt="Notifications mobile" size="sm" />
            </div>
          </ScrollReveal>
        </div>

      </section>

      <!-- ═══ FLOW 12: POS ═══ -->
      <section id="f12" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">12</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f12.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f12.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f12.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
            <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">&#128722;</div>
            <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( 'wt.f12.scenario' ) }}</p>
          </div>
        </ScrollReveal>

        <div class="grid sm:grid-cols-3 gap-4 mb-14">
          <ScrollReveal v-for="( step, i ) in ['s1','s2','s3']" :key="step" :delay="i * 80">
            <div class="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( `wt.f12.${step}.tag` ) }}</span>
              <h4 class="font-bold mb-2">{{ t( `wt.f12.${step}.title` ) }}</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( `wt.f12.${step}.desc` ) }}</p>
              <ul class="space-y-2">
                <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                  {{ t( `wt.f12.${step}.${b}` ) }}
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <BrowserMockup :src="`${D}/pos-terminal.png`" url="POS Terminal — Giza Branch" alt="POS Terminal" />
        </ScrollReveal>
      </section>

      <!-- ═══ FLOW 13: ANALYTICS ═══ -->
      <section id="f13" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">13</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f13.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f13.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f13.desc' ) }}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <BrowserMockup :src="`${D}/analytics.png`" url="Analytics & Reports — Dashboard" alt="Analytics Dashboard" class="mb-14" />
        </ScrollReveal>

        <div class="grid sm:grid-cols-3 gap-4">
          <ScrollReveal v-for="( step, i ) in ['s1','s2','s3']" :key="step" :delay="i * 80">
            <div class="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( `wt.f13.${step}.tag` ) }}</span>
              <h4 class="font-bold mb-2">{{ t( `wt.f13.${step}.title` ) }}</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( `wt.f13.${step}.desc` ) }}</p>
              <ul class="space-y-2">
                <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                  {{ t( `wt.f13.${step}.${b}` ) }}
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 14: TICKETS ═══ -->
      <section id="f14" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">14</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f14.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f14.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f14.desc' ) }}</p>
          </div>
        </ScrollReveal>

        <div class="grid md:grid-cols-2 gap-12 items-center mb-14">
          <ScrollReveal direction="left">
            <BrowserMockup :src="`${D}/tickets.png`" url="My Tickets — Support" alt="Tickets" />
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div class="grid gap-4">
              <div v-for="step in ['s1','s2','s3']" :key="step" class="bg-card border border-border rounded-2xl p-5">
                <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-2">{{ t( `wt.f14.${step}.tag` ) }}</span>
                <h4 class="font-bold mb-1">{{ t( `wt.f14.${step}.title` ) }}</h4>
                <p class="text-xs text-muted-foreground leading-relaxed">{{ t( `wt.f14.${step}.desc` ) }}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <!-- ═══ FLOW 15: COUPONS ═══ -->
      <section id="f15" class="py-20 border-b border-border">
        <ScrollReveal>
          <div class="mb-12">
            <div class="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent text-accent font-black text-lg mb-3">15</div>
            <span class="block text-[0.65rem] font-bold uppercase tracking-widest text-accent mb-1">{{ t( 'wt.f15.label' ) }}</span>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">{{ t( 'wt.f15.title' ) }}</h2>
            <p class="text-muted-foreground mt-2 max-w-lg">{{ t( 'wt.f15.desc' ) }}</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 mb-12">
            <div class="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center text-xl shrink-0">&#127915;</div>
            <p class="text-sm leading-relaxed"><strong class="text-foreground">{{ t( 'wt.scenario' ) }}:</strong> {{ t( 'wt.f15.scenario' ) }}</p>
          </div>
        </ScrollReveal>

        <div class="grid sm:grid-cols-3 gap-4 mb-14">
          <ScrollReveal v-for="( step, i ) in ['s1','s2','s3']" :key="step" :delay="i * 80">
            <div class="bg-card border border-border rounded-2xl p-6 hover:border-accent/30 transition-colors">
              <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( `wt.f15.${step}.tag` ) }}</span>
              <h4 class="font-bold mb-2">{{ t( `wt.f15.${step}.title` ) }}</h4>
              <p class="text-sm text-muted-foreground leading-relaxed mb-4">{{ t( `wt.f15.${step}.desc` ) }}</p>
              <ul class="space-y-2">
                <li v-for="b in ['b1','b2','b3']" :key="b" class="flex items-start gap-2.5 text-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 shadow-[0_0_4px] shadow-accent/40"></span>
                  {{ t( `wt.f15.${step}.${b}` ) }}
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <BrowserMockup :src="`${D}/coupons.png`" url="Coupons & Discounts — Elegance Fashion" alt="Coupons Management" />
        </ScrollReveal>
      </section>

      <!-- TECH -->
      <section class="py-20">
        <ScrollReveal>
          <div class="text-center mb-10">
            <span class="inline-block text-[0.63rem] font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded mb-3">{{ t( 'wt.tech.label' ) }}</span>
            <h2 class="text-2xl font-bold">{{ t( 'wt.tech.title' ) }}</h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div class="grid sm:grid-cols-3 gap-4">
            <div v-for="item in ['dark','rtl','platforms']" :key="item" class="bg-card border border-border rounded-2xl p-6">
              <h4 class="font-bold mb-2">{{ t( `wt.tech.${item}.title` ) }}</h4>
              <p class="text-sm text-muted-foreground leading-relaxed">{{ t( `wt.tech.${item}.desc` ) }}</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>

    <!-- Footer -->
    <footer class="py-12 text-center border-t border-border">
      <p class="text-lg font-black"><span class="text-accent">Dukkan</span><span class="text-muted-foreground ms-1">by Haritna Technologies</span></p>
      <p class="text-sm text-muted-foreground mt-1">{{ t( 'wt.footer' ) }}</p>
    </footer>
  </div>
</template>
