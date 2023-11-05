const url = 'file:hi.db'
import { createClient } from '@libsql/client/sqlite3'
import { drizzle } from 'drizzle-orm/libsql'
import * as schemas from './models'

const c = createClient({
  url
})

export const config = {
  db: drizzle(c, { schema: schemas })
}


export default config
