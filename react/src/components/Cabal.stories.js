import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Cabal from './Cabal'

import { defaultChannels } from './ChannelList.stories'

export const defaultCabal = {
  key: '0201400f1aa2e3076a3f17f4521b2cc41e258c446cdaa44742afe6e1b9fd5f82',
  channels: defaultChannels,
  currentChannel: defaultChannels[0]
}

export const actions = {
  onClick: action('onClick')
}

storiesOf('Cabal', module)
  .add('default', () => <Cabal cabal={defaultCabal} {...actions} />)
