import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PeerListContainer = styled.div`
`

const Row = styled.div`
  cursor: pointer;
`

const StarterMessage = styled.div`
`

export default function PeerList ({ channel, loading, onClick }) {
  if (loading) {
    return (
      <PeerListContainer>
        Loading...
      </PeerListContainer>
    )
  }
  return (
    <PeerListContainer>
      {!channel.users.length &&
        <StarterMessage>
          No channel.
        </StarterMessage>
      }
      {channel.users.length && channel.users.map((peer, index) => {
        return (
          <Row key={index} onClick={onClick}>
            {peer.online} {peer.nickname}
          </Row>
        )
      })}
    </PeerListContainer>
  )
}

PeerList.propTypes = {
  channel: PropTypes.object.isRequired,
  onClick: PropTypes.func
}
