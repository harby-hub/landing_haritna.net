export interface StepScreenshot {
  type: 'phone' | 'browser' | 'phone-pair' | 'browser-phone'
  desktop?: string
  mobile?: string
  desktopAlt?: string
  mobileAlt?: string
  browserUrl?: string
}

export interface Step {
  titleKey: string
  descKey: string
  bullets?: string[]
  screenshot: StepScreenshot
}

export interface Phase {
  id: string
  labelKey: string
  titleKey: string
  descKey: string
  emoji: string
  scenarioKey: string
  suggestedItems?: SuggestedItem[]
  steps: Step[]
}

export interface SuggestedItem {
  nameKey: string
  priceKey: string
  durationKey?: string
  type: 'product' | 'service' | 'custom'
}

export interface ProfessionConfig {
  slug: string
  nameKey: string
  subtitleKey: string
  emoji: string
  suggestedItems: SuggestedItem[]
  phases: Phase[]
}
