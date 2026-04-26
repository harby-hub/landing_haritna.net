<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LegalLayout from '@/components/LegalLayout.vue'

const { t, tm, rt } = useI18n()

type StringList = string[]

const eligibilityItems = computed(() => tm('terms.sections.eligibility.items') as StringList)
const rolesItems = computed(() => tm('terms.sections.roles.items') as StringList)
const conductItems = computed(() => tm('terms.sections.conduct.items') as StringList)
const ordersItems = computed(() => tm('terms.sections.orders.items') as StringList)
const ipItems = computed(() => tm('terms.sections.ip.items') as StringList)
</script>

<template>
  <LegalLayout :title="t('terms.title')" :subtitle="t('terms.subtitle')">
    <p>{{ t('terms.intro') }}</p>

    <!-- 1. Eligibility -->
    <h2>{{ t('terms.sections.eligibility.title') }}</h2>
    <ul>
      <li v-for="(item, i) in eligibilityItems" :key="`el-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 2. Roles -->
    <h2>{{ t('terms.sections.roles.title') }}</h2>
    <p>{{ t('terms.sections.roles.intro') }}</p>
    <ul>
      <li v-for="(item, i) in rolesItems" :key="`ro-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 3. Conduct -->
    <h2>{{ t('terms.sections.conduct.title') }}</h2>
    <p>{{ t('terms.sections.conduct.intro') }}</p>
    <ul>
      <li v-for="(item, i) in conductItems" :key="`co-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 4. Orders -->
    <h2>{{ t('terms.sections.orders.title') }}</h2>
    <ul>
      <li v-for="(item, i) in ordersItems" :key="`or-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 5. IP -->
    <h2>{{ t('terms.sections.ip.title') }}</h2>
    <ul>
      <li v-for="(item, i) in ipItems" :key="`ip-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 6. Termination -->
    <h2>{{ t('terms.sections.termination.title') }}</h2>
    <p>{{ t('terms.sections.termination.body') }}</p>

    <!-- 7. Disclaimers -->
    <h2>{{ t('terms.sections.disclaimers.title') }}</h2>
    <p>{{ t('terms.sections.disclaimers.body') }}</p>

    <!-- 8. Liability -->
    <h2>{{ t('terms.sections.liability.title') }}</h2>
    <p>{{ t('terms.sections.liability.body') }}</p>

    <!-- 9. Indemnity -->
    <h2>{{ t('terms.sections.indemnity.title') }}</h2>
    <p>{{ t('terms.sections.indemnity.body') }}</p>

    <!-- 10. Law -->
    <h2>{{ t('terms.sections.law.title') }}</h2>
    <p>{{ t('terms.sections.law.body') }}</p>

    <!-- 11. Changes -->
    <h2>{{ t('terms.sections.changes.title') }}</h2>
    <p>{{ t('terms.sections.changes.body') }}</p>

    <!-- 12. Contact -->
    <h2>{{ t('terms.sections.contact.title') }}</h2>
    <p>{{ t('terms.sections.contact.body') }}</p>
  </LegalLayout>
</template>
