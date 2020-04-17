import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ChannelList from './ChannelList'
import PeerList from './PeerList'

const SidebarContainer = styled.div`
  flex: 0 0 13.75rem;
  background-color: #16161d;
  color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
  padding-top: 2rem;
`

const CabalName = styled.div`
  padding: 1rem 1rem;
  /* overflow: hidden; */
`

export default function Sidebar ({ cabal }) {
  return (
    <SidebarContainer>
      <CabalName>
        {cabal.key}
      </CabalName>
      <ChannelList
        cabalKey={cabal.key}
        channels={cabal.channels}
        channelsJoined={cabal.channelsJoined}
        currentChannel={cabal.currentChannel}
      />
      <PeerList users={cabal.users} />
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  cabal: PropTypes.object
}
