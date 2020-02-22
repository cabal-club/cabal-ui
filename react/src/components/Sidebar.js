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
  padding-top: 2rem;
`

export default function Sidebar ({ cabal }) {
  return (
    <SidebarContainer>
      {cabal.key}
      <ChannelList channels={cabal.channels} />
      <PeerList channel={cabal.currentChannel} />
    </SidebarContainer>
  )
}

Sidebar.propTypes = {
  cabal: PropTypes.object
}
