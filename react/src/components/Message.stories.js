import React from 'react'
import { storiesOf } from '@storybook/react'

import Message from './Message'

export const message = {
  nickname: 'person',
  content: 'Hello friends!',
  time: new Date(2019, 8, 21, 12, 0)
}

storiesOf('Message', module)
  .add('default', () => <Message message={message} />)
  .add('repeat author', () => <Message message={message} repeatedNickname={message.nickname} />)
  .add('hover', () => <Message message={{ ...message, state: 'MESSAGE_HOVER' }} />)
