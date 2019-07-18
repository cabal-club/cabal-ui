import React from 'react'
import PropTypes from 'prop-types'

import ChannelList from './ChannelList'
import PeerList from './PeerList'

import './Sidebar.scss'

export default function Sidebar ({ cabal }) {
  return (
    <div className='sidebar'>
      {cabal.key}
      <ChannelList channels={cabal.channels} />
      <PeerList channel={cabal.currentChannel} />
    </div>
  )
}

Sidebar.propTypes = {
  cabal: PropTypes.object
}
