'use client'

// import { getBetas } from '../api/betas'
import { getBetas } from '@package/core/api'

export default function Button() {
  return <button onClick={async () => {
    const r = await getBetas()
    console.log(r)
  }}>Click me</button>
}