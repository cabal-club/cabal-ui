import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AppSidebar from './AppSidebar'
import Channel from './Channel'
import Sidebar from './Sidebar'

const CabalContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export default function Cabal ({ cabals, currentCabal }) {
  return (
    <CabalContainer>
      <AppSidebar cabals={cabals} currentCabal={currentCabal} />
      <Sidebar cabal={currentCabal} />
      <Channel channel={currentCabal.currentChannel} />
    </CabalContainer>
  )
}

Cabal.propTypes = {
  cabals: PropTypes.object.isRequired,
  currentCabal: PropTypes.object.isRequired
}
