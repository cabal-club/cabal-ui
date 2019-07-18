import React from 'react'
import PropTypes from 'prop-types'

import './ChannelHeader.scss'

export default function ChannelHeader ({ channel: { name, topic }, onClickSettings, onClickTopic }) {
  return (
    <div className='channelHeader'>
      <div className='title'>
        <h1 className='channelName'>#{name}</h1>
        <h2 className='topic' onClick={onClickTopic}>{topic}</h2>
      </div>
      <div className='actions'>
        <div className='settingsButton' onClick={onClickSettings}>
          <img src="static/images/icon-channelother.svg" />
        </div>
      </div>
    </div>
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
