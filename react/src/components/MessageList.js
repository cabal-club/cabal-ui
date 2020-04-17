import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Message from './Message'

const MessageListContainer = styled.div`
  flex-grow: 1;
  overflow: scroll;
`

const StarterMessage = styled.div`
  color: #aaa;
  flex-grow: 1;
  margin: 1rem;
  overflow: scroll;
`

export default function MessageList ({ nickname, onScroll }) {
  const dispatch = useDispatch()
  const { messages } = useSelector((state) => state.messages)

  if (messages.length === 0) {
    return (
      <StarterMessage>
        This is a new channel. Send a message to start things off!
      </StarterMessage>
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
