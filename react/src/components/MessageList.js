import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

export default function MessageList ({ messages, nickname, onScroll }) {
  if (messages.length === 0) {
    return (
      <div className='messages starterMessage'>
        This is a new channel. Send a message to start things off!
      </div>
    )
  } else {
    let lastNickname = null
    return (
      <div className='messages' onScroll={onScroll}>
        {messages.map((message, index) => {
          const repeatedNickname = message.nickname === lastNickname
          lastNickname = message.nickname
          return (
            <Message key={index} message={message} repeatedNickname={repeatedNickname} />
          )
        })}
      </div>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array,
  nickname: PropTypes.string,
  onScroll: PropTypes.func
}
