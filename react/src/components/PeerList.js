import React from 'react'
import PropTypes from 'prop-types'

import './PeerList.scss'

export default function PeerList ({ channel, loading, onClick }) {
  if (loading) {
    return (
      <div className='PeerList'>
        Loading...
      </div>
    )
  }
  return (
    <div className='PeerList'>
      {!channel.users.length &&
        <div className='starterMessage'>
          No channel.
        </div>
      }
      {channel.users.length && channel.users.map((peer, index) => {
        return (
          <div className='peerRow' key={index} onClick={onClick}>
            {peer.online} {peer.nickname}
          </div>
        )
      })}
    </div>
  )
}

PeerList.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func
}
