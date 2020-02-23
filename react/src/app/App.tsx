import React from 'react'

import CabalInterface from '../components/Cabal'

import { defaultCabal as currentCabal, defaultCabals as cabals } from '../components/CabalList.stories'

function App() {
  return (
    <CabalInterface cabals={cabals} currentCabal={currentCabal} />
  )
}

export default App
