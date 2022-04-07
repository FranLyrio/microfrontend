import React from 'react'
// @ts-ignore
import { countStore } from 'app1/stores/countStore'

export default function Visor() {
  const value = countStore(state => state.value)

  return <h1>Seu valor atual é {value}</h1>
}