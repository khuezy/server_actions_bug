'use server'

import { config } from '@package/core/db'
import { betas } from '@package/core/db/models'

export async function createBeta(code: string) {
  return config.db.insert(betas).values({ code }).returning().get()
}
export async function getBetas() {
  return config.db.select().from(betas)
}