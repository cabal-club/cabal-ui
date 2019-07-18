import React from 'react'
import PropTypes from 'prop-types'

import Channel from './Channel'
import Sidebar from './Sidebar'

import './Cabal.scss'

export default function Cabal ({ cabal }) {
  return (
    <div className='cabal'>
      <Sidebar cabal={cabal} />
      <Channel channel={cabal.currentChannel} />
    </div>
  )
}

Cabal.propTypes = {
  cabal: PropTypes.object.isRequired
}
