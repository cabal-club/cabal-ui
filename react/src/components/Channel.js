import React from 'react'
import PropTypes from 'prop-types'

import MessageComposer from './MessageComposer'
import ChannelHeader from './ChannelHeader'
import MessageList from './MessageList'

import './Channel.scss'

export default function Channel ({ channel }) {
  return (
    <div className='channel'>
      <ChannelHeader channel={channel} />
      <MessageList messages={channel.messages} />
      <MessageComposer channelName={channel.name} />
    </div>
  )
}

Channel.propTypes = {
  channel: PropTypes.shape({
    messages: PropTypes.array,
    name: PropTypes.string,
    topic: PropTypes.string
  })
}
