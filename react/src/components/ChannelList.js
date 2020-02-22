import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ChannelListContainer = styled.div`
`

const Row = styled.div`
  cursor: pointer;
`

const StarterMessage = styled.div`
`

export default function ChannelList ({ channels, currentChannel, loading, onClick }) {
  if (loading) {
    return (
      <ChannelListContainer>
        Loading...
      </ChannelListContainer>
    )
  }
  return (
    <ChannelListContainer>
      {!channels.length &&
        <StarterMessage>
          No channels
        </StarterMessage>
      }
      {channels.length && channels.map((channel, index) => {
        return (
          <Row key={index} onClick={onClick}>
            #{channel.name}
          </Row>
        )
      })}
    </ChannelListContainer>
  )
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired,
  currentChannel: PropTypes.string,
  onClick: PropTypes.func
}
