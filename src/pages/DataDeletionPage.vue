<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LegalLayout from '@/components/LegalLayout.vue'

const { t, tm, rt } = useI18n()

type StringList = string[]

const inAppSteps = computed(() => tm('data_deletion.sections.in_app.steps') as StringList)
const whatDeletedItems = computed(() => tm('data_deletion.sections.what_deleted.items') as StringList)
const retainedItems = computed(() => tm('data_deletion.sections.retained.items') as StringList)
const revokeSocialItems = computed(() => tm('data_deletion.sections.revoke_social.items') as StringList)
</script>

<template>
  <LegalLayout :title="t('data_deletion.title')" :subtitle="t('data_deletion.subtitle')">
    <p>{{ t('data_deletion.intro') }}</p>

    <!-- 1. In-app -->
    <h2>{{ t('data_deletion.sections.in_app.title') }}</h2>
    <ol>
      <li v-for="(step, i) in inAppSteps" :key="`ia-${i}`">{{ rt(step) }}</li>
    </ol>

    <!-- 2. Email -->
    <h2>{{ t('data_deletion.sections.email.title') }}</h2>
    <p>{{ t('data_deletion.sections.email.body') }}</p>

    <!-- 3. What deleted -->
    <h2>{{ t('data_deletion.sections.what_deleted.title') }}</h2>
    <ul>
      <li v-for="(item, i) in whatDeletedItems" :key="`wd-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 4. Retained -->
    <h2>{{ t('data_deletion.sections.retained.title') }}</h2>
    <ul>
      <li v-for="(item, i) in retainedItems" :key="`rt-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 5. Timeline -->
    <h2>{{ t('data_deletion.sections.timeline.title') }}</h2>
    <p>{{ t('data_deletion.sections.timeline.body') }}</p>

    <!-- 6. Revoke social -->
    <h2>{{ t('data_deletion.sections.revoke_social.title') }}</h2>
    <p>{{ t('data_deletion.sections.revoke_social.body') }}</p>
    <ul>
      <li v-for="(item, i) in revokeSocialItems" :key="`rs-${i}`">{{ rt(item) }}</li>
    </ul>

    <!-- 7. Contact -->
    <h2>{{ t('data_deletion.sections.contact.title') }}</h2>
    <p>{{ t('data_deletion.sections.contact.body') }}</p>
  </LegalLayout>
</template>
