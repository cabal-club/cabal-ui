import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ChannelHeaderContainer = styled.div`
  -webkit-app-region: drag;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

const Title = styled.div`
  align-items: center;
`

const ChannelName = styled.h1`
  align-items: center;
  display: flex;
  font-size: 1.1rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
`

const Topic = styled.h2`
  font-size: 0.75rem;
  color: #666;
`

const Actions = styled.div`
  display: flex;
  text-align: right;
  vertical-align: middle;
`

const SettingsButton = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-left: 1rem;
  vertical-align: middle;
`

export default function ChannelHeader ({ channel: { name, topic }, onClickSettings, onClickTopic }) {
  return (
    <ChannelHeaderContainer>
      <Title>
        <ChannelName>#{name}</ChannelName>
        <Topic onClick={onClickTopic}>{topic}</Topic>
      </Title>
      <Actions>
        <SettingsButton onClick={onClickSettings}>
          <img src='static/images/icon-channelother.svg' />
        </SettingsButton>
      </Actions>
    </ChannelHeaderContainer>
  )
}

ChannelHeader.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
    topic: PropTypes.string
  }),
  onClickSettings: PropTypes.func,
  onClickTopic: PropTypes.func
}
