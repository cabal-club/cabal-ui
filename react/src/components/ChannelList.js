import React from 'react'
import PropTypes from 'prop-types'

import './ChannelList.scss'

export default function ChannelList ({ channels, currentChannel, loading, onClick }) {
  if (loading) {
    return (
      <div className='channelList'>
        Loading...
      </div>
    )
  }
  return (
    <div className='channelList'>
      {!channels.length &&
        <div className='starterMessage'>
          No channels
        </div>
      }
      {channels.length && channels.map((channel, index) => {
        return (
          <div className='channelRow' key={index} onClick={onClick}>
            #{channel.name}
          </div>
        )
      })}
    </div>
  )
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  currentChannel: PropTypes.string,
  onClick: PropTypes.func
}
