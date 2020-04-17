import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PeerListContainer = styled.div`
`

const ListHeader = styled.div`
  text-transform: uppercase;
  padding: 2rem 1rem 1rem 1rem;
`

const Row = styled.div`
  cursor: pointer;
  padding: 0.5rem 1rem;
`

const StarterMessage = styled.div`
`

export default function PeerList ({ users, loading, onClick }) {
  if (loading) {
    return (
      <PeerListContainer>
        Loading...
      </PeerListContainer>
    )
  }
  return (
    <PeerListContainer>
      <ListHeader>Peers</ListHeader>
      {!users.length &&
        <StarterMessage>
          No Peers.
        </StarterMessage>
      }
      {users.length && users.map((peer, index) => {
        const name = peer.name || peer.key.substr(0, 6)
        return (
          <Row key={index} onClick={onClick}>
            {name} {peer.online}
          </Row>
        )
      })}
    </PeerListContainer>
  )
}

PeerList.propTypes = {
  users: PropTypes.array.isRequired,
  onClick: PropTypes.func
}
