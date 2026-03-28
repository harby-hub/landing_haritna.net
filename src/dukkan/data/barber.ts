import type { ProfessionConfig } from './types'

const barber: ProfessionConfig = {
  slug: 'barber',
  nameKey: 'stories.barber.name',
  subtitleKey: 'stories.barber.subtitle',
  emoji: '💈',
  suggestedItems: [
    { nameKey: 'stories.barber.items.s1', priceKey: 'stories.barber.items.p1', durationKey: 'stories.barber.items.d1', type: 'service' },
    { nameKey: 'stories.barber.items.s2', priceKey: 'stories.barber.items.p2', durationKey: 'stories.barber.items.d2', type: 'service' },
    { nameKey: 'stories.barber.items.s3', priceKey: 'stories.barber.items.p3', durationKey: 'stories.barber.items.d3', type: 'service' },
    { nameKey: 'stories.barber.items.s4', priceKey: 'stories.barber.items.p4', durationKey: 'stories.barber.items.d4', type: 'service' },
    { nameKey: 'stories.barber.items.s5', priceKey: 'stories.barber.items.p5', type: 'product' },
    { nameKey: 'stories.barber.items.s6', priceKey: 'stories.barber.items.p6', type: 'product' },
    { nameKey: 'stories.barber.items.s7', priceKey: 'stories.barber.items.p7', type: 'product' },
    { nameKey: 'stories.barber.items.s8', priceKey: 'stories.barber.items.p8', durationKey: 'stories.barber.items.d8', type: 'service' },
    { nameKey: 'stories.barber.items.s9', priceKey: 'stories.barber.items.p9', durationKey: 'stories.barber.items.d9', type: 'service' },
  ],
  phases: [
    {
      id: 'register',
      labelKey: 'stories.common.p1.label',
      titleKey: 'stories.common.p1.title',
      descKey: 'stories.barber.p1.desc',
      emoji: '📱',
      scenarioKey: 'stories.barber.p1.scenario',
      steps: [
        {
          titleKey: 'stories.common.p1.s1.title',
          descKey: 'stories.barber.p1.s1.desc',
          bullets: ['stories.common.p1.s1.b1', 'stories.common.p1.s1.b2', 'stories.common.p1.s1.b3'],
          screenshot: { type: 'phone', mobile: 'register.png' },
        },
        {
          titleKey: 'stories.common.p1.s2.title',
          descKey: 'stories.barber.p1.s2.desc',
          bullets: ['stories.common.p1.s2.b1', 'stories.common.p1.s2.b2', 'stories.common.p1.s2.b3'],
          screenshot: { type: 'phone', mobile: 'login.png' },
        },
      ],
    },
    {
      id: 'company',
      labelKey: 'stories.common.p2.label',
      titleKey: 'stories.common.p2.title',
      descKey: 'stories.barber.p2.desc',
      emoji: '🏪',
      scenarioKey: 'stories.barber.p2.scenario',
      steps: [
        {
          titleKey: 'stories.common.p2.s1.title',
          descKey: 'stories.barber.p2.s1.desc',
          bullets: ['stories.common.p2.s1.b1', 'stories.common.p2.s1.b2', 'stories.common.p2.s1.b3'],
          screenshot: { type: 'phone', mobile: 'company-create.png' },
        },
        {
          titleKey: 'stories.common.p2.s2.title',
          descKey: 'stories.barber.p2.s2.desc',
          screenshot: { type: 'browser', desktop: 'dashboard.png', browserUrl: 'Your Company Dashboard' },
        },
      ],
    },
    {
      id: 'services',
      labelKey: 'stories.barber.p3.label',
      titleKey: 'stories.barber.p3.title',
      descKey: 'stories.barber.p3.desc',
      emoji: '✂️',
      scenarioKey: 'stories.barber.p3.scenario',
      steps: [
        {
          titleKey: 'stories.common.p3.s1.title',
          descKey: 'stories.barber.p3.s1.desc',
          screenshot: { type: 'phone-pair', mobile: 'company-categories.png', mobileAlt: 'category-tree.png' },
        },
        {
          titleKey: 'stories.barber.p3.s2.title',
          descKey: 'stories.barber.p3.s2.desc',
          bullets: ['stories.barber.p3.s2.b1', 'stories.barber.p3.s2.b2', 'stories.barber.p3.s2.b3'],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.common.p3.s3.title',
          descKey: 'stories.barber.p3.s3.desc',
          screenshot: { type: 'browser', desktop: 'company-products.png', browserUrl: 'Your Services & Products' },
        },
      ],
    },
    // Bookings & Calendar — THE KEY PHASE
    {
      id: 'bookings',
      labelKey: 'stories.barber.bookings.label',
      titleKey: 'stories.barber.bookings.title',
      descKey: 'stories.barber.bookings.desc',
      emoji: '📅',
      scenarioKey: 'stories.barber.bookings.scenario',
      steps: [
        {
          titleKey: 'stories.barber.bookings.s1.title',
          descKey: 'stories.barber.bookings.s1.desc',
          bullets: [
            'stories.barber.bookings.s1.b1',
            'stories.barber.bookings.s1.b2',
            'stories.barber.bookings.s1.b3',
            'stories.barber.bookings.s1.b4',
          ],
          screenshot: { type: 'phone', mobile: 'service-create.png' },
        },
        {
          titleKey: 'stories.barber.bookings.s2.title',
          descKey: 'stories.barber.bookings.s2.desc',
          bullets: [
            'stories.barber.bookings.s2.b1',
            'stories.barber.bookings.s2.b2',
            'stories.barber.bookings.s2.b3',
          ],
          screenshot: { type: 'browser', desktop: 'service-providers.png', browserUrl: 'Service Providers' },
        },
        {
          titleKey: 'stories.barber.bookings.s3.title',
          descKey: 'stories.barber.bookings.s3.desc',
          bullets: [
            'stories.barber.bookings.s3.b1',
            'stories.barber.bookings.s3.b2',
            'stories.barber.bookings.s3.b3',
          ],
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    // Sell Products
    {
      id: 'products',
      labelKey: 'stories.barber.products.label',
      titleKey: 'stories.barber.products.title',
      descKey: 'stories.barber.products.desc',
      emoji: '🧴',
      scenarioKey: 'stories.barber.products.scenario',
      steps: [
        {
          titleKey: 'stories.barber.products.s1.title',
          descKey: 'stories.barber.products.s1.desc',
          bullets: [
            'stories.barber.products.s1.b1',
            'stories.barber.products.s1.b2',
            'stories.barber.products.s1.b3',
          ],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.barber.products.s2.title',
          descKey: 'stories.barber.products.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'products.png' },
        },
      ],
    },
    {
      id: 'page',
      labelKey: 'stories.common.p4.label',
      titleKey: 'stories.common.p4.title',
      descKey: 'stories.barber.p4.desc',
      emoji: '🎨',
      scenarioKey: 'stories.barber.p4.scenario',
      steps: [
        {
          titleKey: 'stories.common.p4.s1.title',
          descKey: 'stories.barber.p4.s1.desc',
          screenshot: { type: 'browser', desktop: 'page-builder.png', browserUrl: 'Page Builder' },
        },
        {
          titleKey: 'stories.common.p4.s2.title',
          descKey: 'stories.barber.p4.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'company-settings.png', mobile: 'company-settings.png' },
        },
      ],
    },
    {
      id: 'orders',
      labelKey: 'stories.common.p5.label',
      titleKey: 'stories.common.p5.title',
      descKey: 'stories.barber.p5.desc',
      emoji: '🎉',
      scenarioKey: 'stories.barber.p5.scenario',
      steps: [
        {
          titleKey: 'stories.common.p5.s1.title',
          descKey: 'stories.barber.p5.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'products.png' },
        },
        {
          titleKey: 'stories.common.p5.s2.title',
          descKey: 'stories.barber.p5.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    {
      id: 'grow',
      labelKey: 'stories.common.p6.label',
      titleKey: 'stories.common.p6.title',
      descKey: 'stories.barber.p6.desc',
      emoji: '📈',
      scenarioKey: 'stories.barber.p6.scenario',
      steps: [
        {
          titleKey: 'stories.common.p6.s1.title',
          descKey: 'stories.barber.p6.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'chat.png', mobile: 'following.png' },
        },
        {
          titleKey: 'stories.common.p6.s2.title',
          descKey: 'stories.barber.p6.s2.desc',
          screenshot: { type: 'browser', desktop: 'notifications.png' },
        },
      ],
    },
  ],
}

export default barber
