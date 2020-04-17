import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import {
  focusChannel
} from '../features/cabals/cabalsSlice'

const ChannelListContainer = styled.div`
`

const ListHeader = styled.div`
  text-transform: uppercase;
  padding: 2rem 1rem 1rem 1rem;
`

const Row = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;

  &:hover { 
    background-color: #444;
  }
`

const StarterMessage = styled.div`
`

export default function ChannelList ({ cabalKey, channels, channelsJoined, currentChannel, loading }) {
  const dispatch = useDispatch()

  const onClickRow = (channel) => {
    dispatch(focusChannel({ cabalKey, channel }))
  }

  if (loading) {
    return (
      <ChannelListContainer>
        Loading...
      </ChannelListContainer>
    )
  }

  return (
    <ChannelListContainer>
      <ListHeader>Channels</ListHeader>
      {!channelsJoined.length &&
        <StarterMessage>
          No channels
        </StarterMessage>
      }
      {channelsJoined.length && channelsJoined.map((channel, index) => {
        return (
          <Row key={index} onClick={() => onClickRow(channel)}>
            #{channel}
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
