import styles from './page.module.css'

import { getBetas } from './api/betas'
// import { getBetas } from '@package/core/api'
import Button from './client/button'
export default async function Home() {
  // await createBeta('hi' + Date.now())
  // const betas = await getBetas()
  return (
    <main className={styles.main}>
      {/* {betas.map((b, i) => <div key={i}>{b.code}</div>)} */}
      <Button ></Button>
    </main>
  )
}
