import React from 'react'
import { storiesOf } from '@storybook/react'

import MessageList from './MessageList'

export const defaultProps = {
  nickname: 'person'
}

export const defaultMessages = [
  {
    nickname: 'person',
    content: 'Hello friends!',
    time: new Date(2019, 8, 21, 12, 0)
  },
  {
    nickname: 'person',
    content: 'welcome to cabal :D',
    time: new Date(2019, 8, 21, 12, 1)
  },
  {
    nickname: 'friend',
    content: 'person: Thanks! So happy to be here!',
    time: new Date(2019, 8, 21, 12, 2)
  }
]

storiesOf('MessageList', module)
  .add('default', () => <MessageList {...defaultProps} messages={defaultMessages} />)
