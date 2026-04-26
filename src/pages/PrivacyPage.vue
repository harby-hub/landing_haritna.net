<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LegalLayout from '@/components/LegalLayout.vue'

const { t, tm, rt } = useI18n()

type StringList = string[]
type SharingItem = { heading: string; body: string }

const fromYouItems = computed(() => tm('privacy.sections.info_collected.from_you.items') as StringList)
const fromSsoItems = computed(() => tm('privacy.sections.info_collected.from_sso.items') as StringList)
const automaticItems = computed(() => tm('privacy.sections.info_collected.automatic.items') as StringList)
const howUsedItems = computed(() => tm('privacy.sections.how_used.items') as StringList)
const sharingItems = computed(() => tm('privacy.sections.sharing.items') as SharingItem[])
const rightsItems = computed(() => tm('privacy.sections.rights.items') as StringList)
</script>

<template>
  <LegalLayout :title="t('privacy.title')" :subtitle="t('privacy.subtitle')">
    <p>{{ t('privacy.intro') }}</p>

    <!-- 1. Information We Collect -->
    <h2>{{ t('privacy.sections.info_collected.title') }}</h2>
    <p>{{ t('privacy.sections.info_collected.intro') }}</p>

    <h3>{{ t('privacy.sections.info_collected.from_you.heading') }}</h3>
    <ul>
      <li v-for="(item, i) in fromYouItems" :key="`fy-${i}`">{{ rt(item) }}</li>
    </ul>

    <h3>{{ t('privacy.sections.info_collected.from_sso.heading') }}</h3>
    <p>{{ t('privacy.sections.info_collected.from_sso.intro') }}</p>
    <ul>
      <li v-for="(item, i) in fromSsoItems" :key="`fs-${i}`">{{ rt(item) }}</li>
    </ul>
    <p class="rounded-lg bg-primary/10 p-4 text-sm">
      <strong>{{ t('privacy.sections.info_collected.from_sso.note') }}</strong>
    </p>

    <h3>{{ t('privacy.sections.info_collected.automatic.heading') }}</h3>
    <ul>
      <li v-for="(item, i) in automaticItems" :key="`au-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 2. How We Use -->
    <h2>{{ t('privacy.sections.how_used.title') }}</h2>
    <ul>
      <li v-for="(item, i) in howUsedItems" :key="`hu-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 3. Sharing -->
    <h2>{{ t('privacy.sections.sharing.title') }}</h2>
    <p>{{ t('privacy.sections.sharing.intro') }}</p>
    <ul>
      <li v-for="(item, i) in sharingItems" :key="`sh-${i}`">
        <strong>{{ item.heading }}</strong> — {{ item.body }}
      </li>
    </ul>

    <!-- 4. Retention -->
    <h2>{{ t('privacy.sections.retention.title') }}</h2>
    <p>{{ t('privacy.sections.retention.body') }}</p>

    <!-- 5. Security -->
    <h2>{{ t('privacy.sections.security.title') }}</h2>
    <p>{{ t('privacy.sections.security.body') }}</p>

    <!-- 6. Your Rights -->
    <h2>{{ t('privacy.sections.rights.title') }}</h2>
    <p>{{ t('privacy.sections.rights.intro') }}</p>
    <ul>
      <li v-for="(item, i) in rightsItems" :key="`rg-${i}`">{{ rt(item) }}</li>
    </ul>
    <p>
      {{ t('privacy.sections.rights.contact', { email: t('legal.contact_email') }) }}
    </p>

    <!-- 7. Children -->
    <h2>{{ t('privacy.sections.children.title') }}</h2>
    <p>{{ t('privacy.sections.children.body') }}</p>

    <!-- 8. International -->
    <h2>{{ t('privacy.sections.international.title') }}</h2>
    <p>{{ t('privacy.sections.international.body') }}</p>

    <!-- 9. Cookies -->
    <h2>{{ t('privacy.sections.cookies.title') }}</h2>
    <p>{{ t('privacy.sections.cookies.body') }}</p>

    <!-- 10. Changes -->
    <h2>{{ t('privacy.sections.changes.title') }}</h2>
    <p>{{ t('privacy.sections.changes.body') }}</p>

    <!-- 11. Contact -->
    <h2>{{ t('privacy.sections.contact.title') }}</h2>
    <p>{{ t('privacy.sections.contact.body') }}</p>
    <ul>
      <li>{{ t('privacy.sections.contact.email') }}</li>
      <li>{{ t('privacy.sections.contact.controller') }}</li>
    </ul>
  </LegalLayout>
</template>
