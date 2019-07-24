import React from 'react'
import PropTypes from 'prop-types'

import AppSidebar from './AppSidebar'
import Channel from './Channel'
import Sidebar from './Sidebar'

import './Cabal.scss'

export default function Cabal ({ cabals, currentCabal }) {
  return (
    <div className='cabal'>
      <AppSidebar cabals={cabals} currentCabal={currentCabal} />
      <Sidebar cabal={currentCabal} />
      <Channel channel={currentCabal.currentChannel} />
    </div>
  )
}

Cabal.propTypes = {
  cabal: PropTypes.object.isRequired,
  currentCabal: PropTypes.object.isRequired
}
