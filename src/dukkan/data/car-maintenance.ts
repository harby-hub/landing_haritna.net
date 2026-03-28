import type { ProfessionConfig } from './types'

const carMaintenance: ProfessionConfig = {
  slug: 'car-maintenance',
  nameKey: 'stories.carMaintenance.name',
  subtitleKey: 'stories.carMaintenance.subtitle',
  emoji: '🔧',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
  phases: [
    {
      id: 'register',
      labelKey: 'stories.common.p1.label',
      titleKey: 'stories.common.p1.title',
      descKey: 'stories.carMaintenance.p1.desc',
      emoji: '📱',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.p1.scenario',
      steps: [
        {
          titleKey: 'stories.common.p1.s1.title',
          descKey: 'stories.carMaintenance.p1.s1.desc',
          bullets: ['stories.common.p1.s1.b1', 'stories.common.p1.s1.b2', 'stories.common.p1.s1.b3'],
          screenshot: { type: 'phone', mobile: 'register.png' },
        },
        {
          titleKey: 'stories.common.p1.s2.title',
          descKey: 'stories.carMaintenance.p1.s2.desc',
          bullets: ['stories.common.p1.s2.b1', 'stories.common.p1.s2.b2', 'stories.common.p1.s2.b3'],
          screenshot: { type: 'phone', mobile: 'login.png' },
        },
      ],
    },
    {
      id: 'company',
      labelKey: 'stories.common.p2.label',
      titleKey: 'stories.common.p2.title',
      descKey: 'stories.carMaintenance.p2.desc',
      emoji: '🏪',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.p2.scenario',
      steps: [
        {
          titleKey: 'stories.common.p2.s1.title',
          descKey: 'stories.carMaintenance.p2.s1.desc',
          bullets: ['stories.common.p2.s1.b1', 'stories.common.p2.s1.b2', 'stories.common.p2.s1.b3'],
          screenshot: { type: 'phone', mobile: 'company-create.png' },
        },
        {
          titleKey: 'stories.common.p2.s2.title',
          descKey: 'stories.carMaintenance.p2.s2.desc',
          screenshot: { type: 'browser', desktop: 'dashboard.png', browserUrl: 'Al-Amin Auto Care — Dashboard' },
        },
      ],
    },
    // Services — repair & maintenance catalog
    {
      id: 'services',
      labelKey: 'stories.carMaintenance.services.label',
      titleKey: 'stories.carMaintenance.services.title',
      descKey: 'stories.carMaintenance.services.desc',
      emoji: '🛠️',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.services.scenario',
      steps: [
        {
          titleKey: 'stories.common.p3.s1.title',
          descKey: 'stories.carMaintenance.services.s1.desc',
          screenshot: { type: 'phone-pair', mobile: 'company-categories.png', mobileAlt: 'category-tree.png' },
        },
        {
          titleKey: 'stories.carMaintenance.services.s2.title',
          descKey: 'stories.carMaintenance.services.s2.desc',
          bullets: [
            'stories.carMaintenance.services.s2.b1',
            'stories.carMaintenance.services.s2.b2',
            'stories.carMaintenance.services.s2.b3',
            'stories.carMaintenance.services.s2.b4',
          ],
          screenshot: { type: 'phone', mobile: 'service-create.png' },
        },
        {
          titleKey: 'stories.common.p3.s3.title',
          descKey: 'stories.carMaintenance.services.s3.desc',
          screenshot: { type: 'browser', desktop: 'company-products.png', browserUrl: 'Your Services' },
        },
      ],
    },
    // Diagnostics & Custom Quotes
    {
      id: 'diagnostics',
      labelKey: 'stories.carMaintenance.diagnostics.label',
      titleKey: 'stories.carMaintenance.diagnostics.title',
      descKey: 'stories.carMaintenance.diagnostics.desc',
      emoji: '📋',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.diagnostics.scenario',
      steps: [
        {
          titleKey: 'stories.carMaintenance.diagnostics.s1.title',
          descKey: 'stories.carMaintenance.diagnostics.s1.desc',
          bullets: [
            'stories.carMaintenance.diagnostics.s1.b1',
            'stories.carMaintenance.diagnostics.s1.b2',
            'stories.carMaintenance.diagnostics.s1.b3',
          ],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.carMaintenance.diagnostics.s2.title',
          descKey: 'stories.carMaintenance.diagnostics.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    // Sell parts & accessories
    {
      id: 'products',
      labelKey: 'stories.carMaintenance.products.label',
      titleKey: 'stories.carMaintenance.products.title',
      descKey: 'stories.carMaintenance.products.desc',
      emoji: '🔩',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.products.scenario',
      steps: [
        {
          titleKey: 'stories.carMaintenance.products.s1.title',
          descKey: 'stories.carMaintenance.products.s1.desc',
          bullets: [
            'stories.carMaintenance.products.s1.b1',
            'stories.carMaintenance.products.s1.b2',
            'stories.carMaintenance.products.s1.b3',
          ],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.carMaintenance.products.s2.title',
          descKey: 'stories.carMaintenance.products.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'products.png' },
        },
      ],
    },
    // Mechanics team
    {
      id: 'mechanics',
      labelKey: 'stories.carMaintenance.mechanics.label',
      titleKey: 'stories.carMaintenance.mechanics.title',
      descKey: 'stories.carMaintenance.mechanics.desc',
      emoji: '👨‍🔧',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.mechanics.scenario',
      steps: [
        {
          titleKey: 'stories.carMaintenance.mechanics.s1.title',
          descKey: 'stories.carMaintenance.mechanics.s1.desc',
          bullets: [
            'stories.carMaintenance.mechanics.s1.b1',
            'stories.carMaintenance.mechanics.s1.b2',
            'stories.carMaintenance.mechanics.s1.b3',
          ],
          screenshot: { type: 'browser', desktop: 'service-providers.png', browserUrl: 'Mechanics' },
        },
        {
          titleKey: 'stories.carMaintenance.mechanics.s2.title',
          descKey: 'stories.carMaintenance.mechanics.s2.desc',
          bullets: [
            'stories.carMaintenance.mechanics.s2.b1',
            'stories.carMaintenance.mechanics.s2.b2',
          ],
          screenshot: { type: 'browser-phone', desktop: 'company-members.png', mobile: 'company-members.png' },
        },
      ],
    },
    // Page builder
    {
      id: 'page',
      labelKey: 'stories.common.p4.label',
      titleKey: 'stories.common.p4.title',
      descKey: 'stories.carMaintenance.p4.desc',
      emoji: '🎨',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.p4.scenario',
      steps: [
        {
          titleKey: 'stories.common.p4.s1.title',
          descKey: 'stories.carMaintenance.p4.s1.desc',
          screenshot: { type: 'browser', desktop: 'page-builder.png', browserUrl: 'Page Builder' },
        },
        {
          titleKey: 'stories.common.p4.s2.title',
          descKey: 'stories.carMaintenance.p4.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'company-settings.png', mobile: 'company-settings.png' },
        },
      ],
    },
    // Go live
    {
      id: 'orders',
      labelKey: 'stories.common.p5.label',
      titleKey: 'stories.common.p5.title',
      descKey: 'stories.carMaintenance.p5.desc',
      emoji: '🎉',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.p5.scenario',
      steps: [
        {
          titleKey: 'stories.common.p5.s1.title',
          descKey: 'stories.carMaintenance.p5.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'storefront.png' },
        },
        {
          titleKey: 'stories.common.p5.s2.title',
          descKey: 'stories.carMaintenance.p5.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    // Grow
    {
      id: 'grow',
      labelKey: 'stories.common.p6.label',
      titleKey: 'stories.common.p6.title',
      descKey: 'stories.carMaintenance.p6.desc',
      emoji: '📈',
  suggestedItems: [
    { nameKey: 'stories.carMaintenance.items.s1', priceKey: 'stories.carMaintenance.items.p1', durationKey: 'stories.carMaintenance.items.d1', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s2', priceKey: 'stories.carMaintenance.items.p2', durationKey: 'stories.carMaintenance.items.d2', type: 'service' },
    { nameKey: 'stories.carMaintenance.items.s3', priceKey: 'stories.carMaintenance.items.p3', durationKey: 'stories.carMaintenance.items.d3', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s4', priceKey: 'stories.carMaintenance.items.p4', durationKey: 'stories.carMaintenance.items.d4', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s5', priceKey: 'stories.carMaintenance.items.p5', type: 'product' },
    { nameKey: 'stories.carMaintenance.items.s6', priceKey: 'stories.carMaintenance.items.p6', type: 'custom' },
  ],
      scenarioKey: 'stories.carMaintenance.p6.scenario',
      steps: [
        {
          titleKey: 'stories.common.p6.s1.title',
          descKey: 'stories.carMaintenance.p6.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'chat.png', mobile: 'following.png' },
        },
        {
          titleKey: 'stories.common.p6.s2.title',
          descKey: 'stories.carMaintenance.p6.s2.desc',
          screenshot: { type: 'browser', desktop: 'notifications.png' },
        },
      ],
    },
  ],
}

export default carMaintenance
