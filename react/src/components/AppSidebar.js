import React from 'react'
import PropTypes from 'prop-types'

import CabalList from './CabalList'

import './AppSidebar.scss'

export default function AppSidebar ({ cabals, currentCabal }) {
  return (
    <div className='appSidebar'>
      <CabalList cabals={cabals} currentCabal={currentCabal} />
      <div className='footer'>
        <div className='settingsButton'>
          <img src='static/images/icon-gear.svg' />
        </div>
      </div>
    </div>
  )
}

AppSidebar.propTypes = {
  cabal: PropTypes.object.isRequired,
  currentCabal: PropTypes.object.isRequired
}
