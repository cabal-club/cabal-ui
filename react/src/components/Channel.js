import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import MessageComposer from './MessageComposer'
import ChannelHeader from './ChannelHeader'
import MessageList from './MessageList'

const ChannelContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  background: #fff;
`

export default function Channel ({ cabal, channel }) {
  return (
    <ChannelContainer>
      <ChannelHeader />
      <MessageList messages={channel.messages} />
      <MessageComposer />
    </ChannelContainer>
  )
}

Channel.propTypes = {
  channel: PropTypes.shape({
    messages: PropTypes.array,
    name: PropTypes.string,
    topic: PropTypes.string
  })
}
