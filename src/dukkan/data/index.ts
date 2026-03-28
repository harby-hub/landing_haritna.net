import type { ProfessionConfig } from './types'
import barber from './barber'
import coworking from './coworking'
import phoneRepair from './phone-repair'
import pcRepair from './pc-repair'
import handmade from './handmade'
import candles from './candles'
import watchShop from './watch-shop'
import carMaintenance from './car-maintenance'

export const professions: Record<string, ProfessionConfig> = {
  barber,
  coworking,
  'phone-repair': phoneRepair,
  'pc-repair': pcRepair,
  handmade,
  candles,
  'watch-shop': watchShop,
  'car-maintenance': carMaintenance,
}

export const professionList = Object.values( professions )
