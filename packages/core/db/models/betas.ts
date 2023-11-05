import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const CODE_LENGTH = 8

export const betas = sqliteTable('betas', {
  code: text('code').primaryKey(),
  userId: text('user_id'),
})

export type Beta = typeof betas.$inferSelect
export type NewBeta = typeof betas.$inferInsert
