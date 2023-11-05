'use server'

import { config } from '../db'
import { betas } from '../db/models'

export async function createBeta(code: string) {
  return config.db.insert(betas).values({ code }).returning().get()
}
export async function getBetas() {
  return config.db.select().from(betas)
}