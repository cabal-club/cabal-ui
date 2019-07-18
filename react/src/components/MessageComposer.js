import React from 'react'
import PropTypes from 'prop-types'

import './MessageComposer.scss'

export default function MessageComposer ({ channelName }) {
  let textInput = ''
  let formField

  const onKeyDown = () => {

  }

  const onKeyUp = () => {
    //resizeTextInput
  }

  const onSubmit = () => {

  }

  const addEmoji = () => {

  }

  const focusInput = () => {

  }

  const toggleEmojis = () => {

  }

  return (
    <div className='messageComposer'>
      <div className={'inputWrapper'} >
        <div className={'input'} onClick={focusInput}>
          <form
            onSubmit={onSubmit}
            ref={(form) => { formField = form }}>
            <textarea
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              ref={(input) => { textInput = input }}
              aria-label='Type a message and press enter'
              placeholder='Write a message'
            />
          </form>
        </div>
        {/* <div className={'emoji__container'} ref={(el) => { this.emojiPicker = el }} style={{ position: 'absolute', bottom: '100px', right: '16px', display: 'none' }}>
          <Picker
            onSelect={(e) => addEmoji(e)}
            native
            sheetSize={64}
            // showPreview={false}
            autoFocus
            emoji={'point_up'}
            title={'Pick an emoji...'}
          />
        </div> */}
        {/* <div className={'composer__other'} onClick={toggleEmojis}><img src='static/images/icon-composerother.svg' /></div> */}
      </div>
    </div>
  )
}

MessageComposer.propTypes = {
  channelName: PropTypes.string
}
