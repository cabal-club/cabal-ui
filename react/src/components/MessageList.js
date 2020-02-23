import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Message from './Message'

const MessageListContainer = styled.div`
  flex-grow: 1;
  overflow: scroll;
`

export default function MessageList ({ messages, nickname, onScroll }) {
  if (messages.length === 0) {
    return (
      <MessageListContainer starterMessage>
        This is a new channel. Send a message to start things off!
      </MessageListContainer>
    )
  } else {
    let lastNickname = null
    return (
      <MessageListContainer onScroll={onScroll}>
        {messages.map((message, index) => {
          const repeatedNickname = message.nickname === lastNickname
          lastNickname = message.nickname
          return (
            <Message key={index} message={message} repeatedNickname={repeatedNickname} />
          )
        })}
      </MessageListContainer>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  nickname: PropTypes.string,
  onScroll: PropTypes.func
}
