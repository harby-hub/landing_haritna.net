import type { ProfessionConfig } from './types'

const pcRepair: ProfessionConfig = {
  slug: 'pc-repair',
  nameKey: 'stories.pcRepair.name',
  subtitleKey: 'stories.pcRepair.subtitle',
  emoji: '💻',
  suggestedItems: [
    { nameKey: 'stories.pcRepair.items.s1', priceKey: 'stories.pcRepair.items.p1', durationKey: 'stories.pcRepair.items.d1', type: 'service' },
    { nameKey: 'stories.pcRepair.items.s2', priceKey: 'stories.pcRepair.items.p2', durationKey: 'stories.pcRepair.items.d2', type: 'service' },
    { nameKey: 'stories.pcRepair.items.s3', priceKey: 'stories.pcRepair.items.p3', durationKey: 'stories.pcRepair.items.d3', type: 'service' },
    { nameKey: 'stories.pcRepair.items.s4', priceKey: 'stories.pcRepair.items.p4', durationKey: 'stories.pcRepair.items.d4', type: 'service' },
    { nameKey: 'stories.pcRepair.items.s5', priceKey: 'stories.pcRepair.items.p5', type: 'custom' },
    { nameKey: 'stories.pcRepair.items.s6', priceKey: 'stories.pcRepair.items.p6', type: 'product' },
    { nameKey: 'stories.pcRepair.items.s7', priceKey: 'stories.pcRepair.items.p7', type: 'product' },
    { nameKey: 'stories.pcRepair.items.s8', priceKey: 'stories.pcRepair.items.p8', type: 'product' },
    { nameKey: 'stories.pcRepair.items.s9', priceKey: 'stories.pcRepair.items.p9', type: 'product' },
  ],
  phases: [
    {
      id: 'register',
      labelKey: 'stories.common.p1.label',
      titleKey: 'stories.common.p1.title',
      descKey: 'stories.pcRepair.p1.desc',
      emoji: '📱',
      scenarioKey: 'stories.pcRepair.p1.scenario',
      steps: [
        {
          titleKey: 'stories.common.p1.s1.title',
          descKey: 'stories.pcRepair.p1.s1.desc',
          bullets: ['stories.common.p1.s1.b1', 'stories.common.p1.s1.b2', 'stories.common.p1.s1.b3'],
          screenshot: { type: 'phone', mobile: 'register.png' },
        },
        {
          titleKey: 'stories.common.p1.s2.title',
          descKey: 'stories.pcRepair.p1.s2.desc',
          bullets: ['stories.common.p1.s2.b1', 'stories.common.p1.s2.b2', 'stories.common.p1.s2.b3'],
          screenshot: { type: 'phone', mobile: 'login.png' },
        },
      ],
    },
    {
      id: 'company',
      labelKey: 'stories.common.p2.label',
      titleKey: 'stories.common.p2.title',
      descKey: 'stories.pcRepair.p2.desc',
      emoji: '🏪',
      scenarioKey: 'stories.pcRepair.p2.scenario',
      steps: [
        {
          titleKey: 'stories.common.p2.s1.title',
          descKey: 'stories.pcRepair.p2.s1.desc',
          bullets: ['stories.common.p2.s1.b1', 'stories.common.p2.s1.b2', 'stories.common.p2.s1.b3'],
          screenshot: { type: 'phone', mobile: 'company-create.png' },
        },
        {
          titleKey: 'stories.common.p2.s2.title',
          descKey: 'stories.pcRepair.p2.s2.desc',
          screenshot: { type: 'browser', desktop: 'dashboard.png', browserUrl: 'TechFix Center — Dashboard' },
        },
      ],
    },
    // Services — repair & maintenance
    {
      id: 'services',
      labelKey: 'stories.pcRepair.services.label',
      titleKey: 'stories.pcRepair.services.title',
      descKey: 'stories.pcRepair.services.desc',
      emoji: '🔧',
      scenarioKey: 'stories.pcRepair.services.scenario',
      steps: [
        {
          titleKey: 'stories.common.p3.s1.title',
          descKey: 'stories.pcRepair.services.s1.desc',
          screenshot: { type: 'phone-pair', mobile: 'company-categories.png', mobileAlt: 'category-tree.png' },
        },
        {
          titleKey: 'stories.pcRepair.services.s2.title',
          descKey: 'stories.pcRepair.services.s2.desc',
          bullets: [
            'stories.pcRepair.services.s2.b1',
            'stories.pcRepair.services.s2.b2',
            'stories.pcRepair.services.s2.b3',
            'stories.pcRepair.services.s2.b4',
          ],
          screenshot: { type: 'phone', mobile: 'service-create.png' },
        },
        {
          titleKey: 'stories.common.p3.s3.title',
          descKey: 'stories.pcRepair.services.s3.desc',
          screenshot: { type: 'browser', desktop: 'company-products.png', browserUrl: 'Your Services' },
        },
      ],
    },
    // Custom Orders — RFQ for complex repairs
    {
      id: 'custom',
      labelKey: 'stories.pcRepair.custom.label',
      titleKey: 'stories.pcRepair.custom.title',
      descKey: 'stories.pcRepair.custom.desc',
      emoji: '📋',
      scenarioKey: 'stories.pcRepair.custom.scenario',
      steps: [
        {
          titleKey: 'stories.pcRepair.custom.s1.title',
          descKey: 'stories.pcRepair.custom.s1.desc',
          bullets: [
            'stories.pcRepair.custom.s1.b1',
            'stories.pcRepair.custom.s1.b2',
            'stories.pcRepair.custom.s1.b3',
          ],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.pcRepair.custom.s2.title',
          descKey: 'stories.pcRepair.custom.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    // Sell parts & accessories
    {
      id: 'products',
      labelKey: 'stories.pcRepair.products.label',
      titleKey: 'stories.pcRepair.products.title',
      descKey: 'stories.pcRepair.products.desc',
      emoji: '🖥️',
      scenarioKey: 'stories.pcRepair.products.scenario',
      steps: [
        {
          titleKey: 'stories.pcRepair.products.s1.title',
          descKey: 'stories.pcRepair.products.s1.desc',
          bullets: [
            'stories.pcRepair.products.s1.b1',
            'stories.pcRepair.products.s1.b2',
            'stories.pcRepair.products.s1.b3',
          ],
          screenshot: { type: 'phone', mobile: 'product-create.png' },
        },
        {
          titleKey: 'stories.pcRepair.products.s2.title',
          descKey: 'stories.pcRepair.products.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'products.png' },
        },
      ],
    },
    // Technicians & booking
    {
      id: 'technicians',
      labelKey: 'stories.pcRepair.techs.label',
      titleKey: 'stories.pcRepair.techs.title',
      descKey: 'stories.pcRepair.techs.desc',
      emoji: '👨‍🔧',
      scenarioKey: 'stories.pcRepair.techs.scenario',
      steps: [
        {
          titleKey: 'stories.pcRepair.techs.s1.title',
          descKey: 'stories.pcRepair.techs.s1.desc',
          bullets: [
            'stories.pcRepair.techs.s1.b1',
            'stories.pcRepair.techs.s1.b2',
            'stories.pcRepair.techs.s1.b3',
          ],
          screenshot: { type: 'browser', desktop: 'service-providers.png', browserUrl: 'Technicians' },
        },
        {
          titleKey: 'stories.pcRepair.techs.s2.title',
          descKey: 'stories.pcRepair.techs.s2.desc',
          bullets: [
            'stories.pcRepair.techs.s2.b1',
            'stories.pcRepair.techs.s2.b2',
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
      descKey: 'stories.pcRepair.p4.desc',
      emoji: '🎨',
      scenarioKey: 'stories.pcRepair.p4.scenario',
      steps: [
        {
          titleKey: 'stories.common.p4.s1.title',
          descKey: 'stories.pcRepair.p4.s1.desc',
          screenshot: { type: 'browser', desktop: 'page-builder.png', browserUrl: 'Page Builder' },
        },
        {
          titleKey: 'stories.common.p4.s2.title',
          descKey: 'stories.pcRepair.p4.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'company-settings.png', mobile: 'company-settings.png' },
        },
      ],
    },
    // Go live
    {
      id: 'orders',
      labelKey: 'stories.common.p5.label',
      titleKey: 'stories.common.p5.title',
      descKey: 'stories.pcRepair.p5.desc',
      emoji: '🎉',
      scenarioKey: 'stories.pcRepair.p5.scenario',
      steps: [
        {
          titleKey: 'stories.common.p5.s1.title',
          descKey: 'stories.pcRepair.p5.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'storefront.png', mobile: 'storefront.png' },
        },
        {
          titleKey: 'stories.common.p5.s2.title',
          descKey: 'stories.pcRepair.p5.s2.desc',
          screenshot: { type: 'browser-phone', desktop: 'orders-list.png', mobile: 'orders-list.png' },
        },
      ],
    },
    // Grow
    {
      id: 'grow',
      labelKey: 'stories.common.p6.label',
      titleKey: 'stories.common.p6.title',
      descKey: 'stories.pcRepair.p6.desc',
      emoji: '📈',
      scenarioKey: 'stories.pcRepair.p6.scenario',
      steps: [
        {
          titleKey: 'stories.common.p6.s1.title',
          descKey: 'stories.pcRepair.p6.s1.desc',
          screenshot: { type: 'browser-phone', desktop: 'chat.png', mobile: 'following.png' },
        },
        {
          titleKey: 'stories.common.p6.s2.title',
          descKey: 'stories.pcRepair.p6.s2.desc',
          screenshot: { type: 'browser', desktop: 'notifications.png' },
        },
      ],
    },
  ],
}

export default pcRepair
