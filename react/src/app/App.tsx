import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import CabalUI from '../components/Cabal'
import { RootState } from '../app/rootReducer'
import { useRenderIpc } from '../utils/cabal-render-ipc'

const defaultCabalKey = '508fdfb25cc892e4ea32fe01be1a0d8cddd2a8bafae30aaf667446b1cdb220b9'

function App() {
  let { cabals, currentCabalKey } = useSelector((state: RootState) => state.cabals)
  currentCabalKey = currentCabalKey || defaultCabalKey
  
  useRenderIpc({ cabalKey: currentCabalKey, settings: {} })

  const currentCabal = cabals.find((cabal) => cabal.key === currentCabalKey)

  console.log('currentCabal', currentCabal)

  if (currentCabal) {
    return (
      <CabalUI cabals={cabals} currentCabal={currentCabal!} />
    )
  } else {
    return (
      <div>Cabal is connecting...</div>
    )
  }
}

export default App
