<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

const { t, locale } = useI18n()

const imgBase = computed( () => `/guide/${locale.value}` )

const toc = [
  { id: 'register', label: 'guide.toc_register' },
  { id: 'company', label: 'guide.toc_company' },
  { id: 'branches', label: 'guide.toc_branches' },
  { id: 'categories', label: 'guide.toc_categories' },
  { id: 'products', label: 'guide.toc_products' },
  { id: 'shop', label: 'guide.toc_shop' },
  { id: 'orders', label: 'guide.toc_orders' },
  { id: 'company-mgmt', label: 'guide.toc_company_mgmt' },
  { id: 'notifications', label: 'guide.notifications_title' },
  { id: 'social', label: 'guide.toc_social' },
  { id: 'delivery', label: 'guide.toc_delivery' },
]

function scrollTo( id: string ) {
  const el = document.getElementById( id )
  if ( el ) el.scrollIntoView( { behavior: 'smooth' } )
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <header class="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div class="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <RouterLink to="/" class="flex items-center gap-2">
          <img src="/logo.png" alt="Haritna" class="h-8 w-auto" />
          <span class="text-sm font-bold text-primary">{{ t( 'guide.title' ) }}</span>
        </RouterLink>
        <div class="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 pb-20 pt-10">
      <!-- Hero -->
      <div class="mb-10 text-center">
        <h1 class="mb-2 text-3xl font-bold tracking-tight">{{ t( 'guide.title' ) }}</h1>
        <p class="text-muted-foreground">{{ t( 'guide.subtitle' ) }}</p>
        <p class="mt-2 text-xs text-muted-foreground/70">{{ t( 'guide.by_haretna' ) }}</p>
      </div>

      <!-- Table of Contents -->
      <nav class="mb-14 rounded-xl border border-border bg-card p-6">
        <h2 class="mb-4 text-lg font-semibold">{{ t( 'guide.get_started' ) }}</h2>
        <ol class="space-y-2">
          <li v-for="( item, i ) in toc" :key="item.id">
            <button
              @click="scrollTo( item.id )"
              class="flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-start text-sm font-medium text-primary transition-colors hover:bg-muted"
            >
              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">{{ i + 1 }}</span>
              {{ t( item.label ) }}
            </button>
          </li>
        </ol>
      </nav>

      <!-- ========== SECTION 1: Create Account ========== -->
      <section id="register" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.register_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">{{ t( 'guide.portal_public' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.register_desc' ) }}</p>

        <!-- Step 1 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.register_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.register_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/register.png`" :alt="t( 'guide.register_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.register_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.register_field_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Phone:</strong> {{ t( 'guide.register_field_phone' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Email:</strong> {{ t( 'guide.register_field_email' ) }}</li>
              <li><strong>Password:</strong> {{ t( 'guide.register_field_password' ) }}</li>
            </ul>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.register_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.register_step3_desc' ) }}</p>
          </div>
        </div>

        <!-- Tip -->
        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950/30">
          <p class="text-sm"><strong class="text-blue-700 dark:text-blue-400">{{ t( 'guide.good_to_know' ) }}:</strong> {{ t( 'guide.register_tip' ) }}</p>
        </div>
      </section>

      <!-- ========== SECTION 2: Company Setup ========== -->
      <section id="company" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.company_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.company_desc' ) }}</p>

        <!-- Step 1 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.company_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.company_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/companies.png`" :alt="t( 'guide.company_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.company_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.company_field_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Description:</strong> {{ t( 'guide.company_field_desc' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Phone:</strong> {{ t( 'guide.company_field_phone' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Logo:</strong> {{ t( 'guide.company_field_logo' ) }}</li>
              <li><strong>Cover:</strong> {{ t( 'guide.company_field_cover' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-create.png`" :alt="t( 'guide.company_step2' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.company_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.company_step3_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-dashboard.png`" :alt="t( 'guide.company_step3' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 3: Branches ========== -->
      <section id="branches" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.branches_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.branches_desc' ) }}</p>

        <!-- Step 1 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.branches_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.branches_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/branches.png`" :alt="t( 'guide.branches_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.branches_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.branches_field_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Phone:</strong> {{ t( 'guide.branches_field_phone' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Address:</strong> {{ t( 'guide.branches_field_address' ) }}</li>
              <li><strong>Map:</strong> {{ t( 'guide.branches_field_map' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/branch-create.png`" :alt="t( 'guide.branches_step2' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 4: Categories ========== -->
      <section id="categories" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">4</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.categories_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.categories_desc' ) }}</p>

        <!-- Step 1 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.categories_step1' ) }}</h3>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/categories.png`" :alt="t( 'guide.categories_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.categories_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.categories_field_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Parent:</strong> {{ t( 'guide.categories_field_parent' ) }}</li>
              <li><strong>Active:</strong> {{ t( 'guide.categories_field_active' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/category-create.png`" :alt="t( 'guide.categories_step2' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Tree view -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.category_tree_title' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.category_tree_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/category-tree.png`" :alt="t( 'guide.category_tree_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 5: Products ========== -->
      <section id="products" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">5</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.products_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.products_desc' ) }}</p>

        <!-- Step 1: Basic info -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.products_step1' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.products_field_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Description:</strong> {{ t( 'guide.products_field_desc' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>SKU:</strong> {{ t( 'guide.products_field_sku' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Free Shipping:</strong> {{ t( 'guide.products_field_shipping' ) }}</li>
              <li><strong>Status:</strong> {{ t( 'guide.products_field_status' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/product-create.png`" :alt="t( 'guide.products_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Stock -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.products_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Unlimited:</strong> {{ t( 'guide.products_stock_unlimited' ) }}</li>
              <li><strong>Limited:</strong> {{ t( 'guide.products_stock_limited' ) }}</li>
            </ul>
          </div>
        </div>

        <!-- Step 3: Pricing -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.products_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.products_step3_desc' ) }}</p>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Name:</strong> {{ t( 'guide.products_price_name' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Amount:</strong> {{ t( 'guide.products_price_amount' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Discount:</strong> {{ t( 'guide.products_price_discount' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Quantity:</strong> {{ t( 'guide.products_price_qty' ) }}</li>
              <li><strong>Currency:</strong> {{ t( 'guide.products_price_currency' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/product-create-2.png`" :alt="t( 'guide.products_step3' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>

        <!-- Step 4: Images, categories, SEO -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.products_step4' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Thumbnail:</strong> {{ t( 'guide.products_field_thumb' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Gallery:</strong> {{ t( 'guide.products_field_gallery' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Categories:</strong> {{ t( 'guide.products_field_cats' ) }}</li>
              <li><strong>SEO:</strong> {{ t( 'guide.products_field_seo' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/product-view.png`" :alt="t( 'guide.products_step4' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>

        <!-- Tip -->
        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-900 dark:bg-blue-950/30">
          <p class="text-sm"><strong class="text-blue-700 dark:text-blue-400">{{ t( 'guide.good_to_know' ) }}:</strong> {{ t( 'guide.products_tip' ) }}</p>
        </div>
      </section>

      <!-- ========== SECTION 6: Shop & Cart ========== -->
      <section id="shop" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">6</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.shop_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">{{ t( 'guide.portal_shop' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.shop_desc' ) }}</p>

        <!-- Step 1: Browse -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.shop_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.shop_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/shop-products.png`" :alt="t( 'guide.shop_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Add to cart -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.shop_step2' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.shop_step2_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/product-detail.png`" :alt="t( 'guide.product_detail_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/product-detail-2.png`" :alt="t( 'guide.product_detail_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Checkout -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.shop_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.shop_step3_desc' ) }}</p>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Address:</strong> {{ t( 'guide.shop_field_address' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Map:</strong> {{ t( 'guide.shop_field_map' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Vehicle:</strong> {{ t( 'guide.shop_field_vehicle' ) }}</li>
              <li><strong>Notes:</strong> {{ t( 'guide.shop_field_notes' ) }}</li>
            </ul>
          </div>
        </div>

        <!-- Company public page -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">4</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.company_public_title' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.company_public_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/shop.png`" :alt="t( 'guide.company_public_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 4</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 7: Orders ========== -->
      <section id="orders" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">7</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.orders_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.orders_desc' ) }}</p>

        <!-- Step 1: Your orders -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.orders_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.orders_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/orders.png`" :alt="t( 'guide.orders_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Order stages -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.orders_step2' ) }}</h3>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Pending:</strong> {{ t( 'guide.orders_status_pending' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Confirmed:</strong> {{ t( 'guide.orders_status_confirmed' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Processing:</strong> {{ t( 'guide.orders_status_processing' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Ready:</strong> {{ t( 'guide.orders_status_ready' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Delivering:</strong> {{ t( 'guide.orders_status_delivering' ) }}</li>
              <li><strong>Delivered:</strong> {{ t( 'guide.orders_status_delivered' ) }}</li>
            </ul>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/order-detail.png`" :alt="t( 'guide.order_detail_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/order-detail-2.png`" :alt="t( 'guide.order_detail_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Company orders -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.orders_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.orders_step3_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-orders.png`" :alt="t( 'guide.orders_step3' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 4</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 8: Company Management ========== -->
      <section id="company-mgmt" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">8</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.mgmt_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.mgmt_desc' ) }}</p>

        <!-- Step 1: Team members -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.mgmt_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.mgmt_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-detail.png`" :alt="t( 'guide.mgmt_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-members.png`" :alt="t( 'guide.mgmt_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Company settings -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.mgmt_step2' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.mgmt_step2_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/company-settings.png`" :alt="t( 'guide.mgmt_step2' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 3</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Profile -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.mgmt_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.mgmt_step3_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/customer-profile.png`" :alt="t( 'guide.mgmt_step3' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 4</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 9: Notifications & Chat ========== -->
      <section id="notifications" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">9</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.notifications_title' ) }} & {{ t( 'guide.chat_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>

        <!-- Step 1: Notifications -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.notifications_title' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.notifications_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/notifications.png`" :alt="t( 'guide.notifications_title' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Chat -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.chat_title' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.chat_desc' ) }}</p>
          </div>
        </div>
      </section>

      <!-- ========== SECTION 10: Social ========== -->
      <section id="social" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">10</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.social_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">{{ t( 'guide.portal_customer' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.social_desc' ) }}</p>

        <!-- Step 1: Wishlist -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.social_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.social_step1_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/wishlist.png`" :alt="t( 'guide.social_step1' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 1</p>
            </div>
          </div>
        </div>

        <!-- Step 2: Following -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.social_step2' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.social_step2_desc' ) }}</p>
            <div class="mt-3 overflow-hidden rounded-xl border border-border">
              <img :src="`${imgBase}/following.png`" :alt="t( 'guide.social_step2' )" class="mx-auto block max-w-[390px]" />
              <p class="border-t bg-muted/30 px-3 py-1.5 text-center text-xs text-muted-foreground">Screenshot 2</p>
            </div>
          </div>
        </div>

        <!-- Step 3: Reactions & Reviews -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.social_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.social_step3_desc' ) }}</p>
          </div>
        </div>
      </section>

      <!-- Staff section removed — will be added when staff demo is available -->

      <!-- ========== SECTION 11: Delivery Portal ========== -->
      <section id="delivery" class="mb-14 scroll-mt-20">
        <div class="mb-6 flex items-center gap-3.5">
          <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">11</div>
          <div>
            <h2 class="text-xl font-bold">{{ t( 'guide.delivery_title' ) }}</h2>
            <span class="mb-3 inline-block rounded-md px-2.5 py-0.5 text-xs font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">{{ t( 'guide.portal_delivery' ) }}</span>
          </div>
        </div>
        <p class="mb-6 text-sm text-muted-foreground">{{ t( 'guide.delivery_desc' ) }}</p>

        <!-- Step 1: Home & available -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">1</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.delivery_step1' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.delivery_step1_desc' ) }}</p>
            <!-- screenshots will be added when delivery demo account is available -->
          </div>
        </div>

        <!-- Step 2: Order actions -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">2</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.delivery_step2' ) }}</h3>
            <p class="mb-2 text-sm text-muted-foreground">{{ t( 'guide.delivery_step2_desc' ) }}</p>
            <ul class="mt-2 space-y-1.5 text-sm">
              <li class="border-b border-border/50 pb-1.5"><strong>Accept:</strong> {{ t( 'guide.delivery_action_accept' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Reject:</strong> {{ t( 'guide.delivery_action_reject' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Pickup:</strong> {{ t( 'guide.delivery_action_pickup' ) }}</li>
              <li class="border-b border-border/50 pb-1.5"><strong>Deliver:</strong> {{ t( 'guide.delivery_action_deliver' ) }}</li>
              <li><strong>Proof:</strong> {{ t( 'guide.delivery_action_proof' ) }}</li>
            </ul>
            <!-- screenshot pending -->
          </div>
        </div>

        <!-- Step 3: Statistics & history -->
        <div class="mb-6 flex gap-3.5">
          <div class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">3</div>
          <div class="min-w-0 flex-1">
            <h3 class="mb-1 text-sm font-semibold">{{ t( 'guide.delivery_step3' ) }}</h3>
            <p class="text-sm text-muted-foreground">{{ t( 'guide.delivery_step3_desc' ) }}</p>
            <!-- screenshots pending -->
          </div>
        </div>
      </section>

      <!-- Footer -->
      <div class="mt-16 border-t border-border pt-8 text-center">
        <p class="text-sm text-muted-foreground">{{ t( 'guide.by_haretna' ) }}</p>
        <RouterLink to="/" class="mt-2 inline-block text-sm font-medium text-primary hover:underline">
          &larr; {{ t( 'nav.home' ) }}
        </RouterLink>
      </div>
    </main>
  </div>
</template>
