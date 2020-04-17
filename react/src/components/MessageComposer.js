import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

// import '../../node_modules/emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

import { setEmojiPickerModalVisible } from '../features/cabals/cabalsSlice'
import { publishMessage } from '../features/cabals/messagesSlice'

const MessageComposerContainer = styled.div`
  background: #fff;
  cursor: text;
  margin: 0 1rem 1rem 1rem;
`

const InputWrapper = styled.div`
  align-items: center;
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  min-height: 48px;
  padding: .5rem 0;
  transition: all 0.1s ease-in-out;

  &:hover {
    border-color: rgba(0, 0, 0, 0.5);
  }
`

const Input = styled.div`
  padding: 0 1rem;
  width: 100%;
`

const Form = styled.div`
  align-content: center;
  display: flex;
  width: 100%;
`

const Textarea = styled.textarea`
  border: 0;
  display: block;
  font-size: 0.875rem;
  max-height: 200px;
  outline: none;
  resize: none;
  width: 100%;
`

const EmojiPickerContainer = styled.div`
  position: 'absolute';
  bottom: '100px';
  right: '16px';
  display: 'none';
`

const ToggleEmojiPickerButton = styled.div``

export default function MessageComposer () {
  const dispatch = useDispatch()
  const cabals = useSelector((state) => state.cabals)

  let textInput = ''
  let formField

  const onKeyDown = () => {

  }

  const onKeyUp = () => {
    // resizeTextInput
  }

  const onSubmit = (e) => {
    const message = {
      content: {
        channel: cabals.currentChannel,
        text: textInput.value
      },
      type: 'chat/text'
    }
    dispatch(publishMessage({ cabalKey: cabals.currentCabalKey, channel: cabals.currentChannel, message }))
  }

  const addEmoji = () => {

  }

  const focusInput = () => {

  }

  const toggleEmojis = () => {
    dispatch(setEmojiPickerModalVisible(!cabals.emojiPickerModalVisible))
  }

  return (
    <MessageComposerContainer>
      <InputWrapper>
        <Input onClick={focusInput}>
          <Form
            onSubmit={onSubmit}
            ref={(form) => { formField = form }}
          >
            <Textarea
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              ref={(input) => { textInput = input }}
              aria-label='Type a message and press enter'
              placeholder='Write a message'
            />
            <button onClick={onSubmit}>Send</button>
          </Form>
        </Input>
        <EmojiPickerContainer visible={cabals.emojiPickerModalVisible}>
          {/* <Picker
            onSelect={(e) => addEmoji(e)}
            native
            sheetSize={64}
            // showPreview={false}
            autoFocus
            emoji='point_up'
            title='Pick an emoji...'
          /> */}
        </EmojiPickerContainer>
        <ToggleEmojiPickerButton onClick={toggleEmojis}>
          <img src='static/images/icon-composerother.svg' />
        </ToggleEmojiPickerButton>
      </InputWrapper>
    </MessageComposerContainer>
  )
}

MessageComposer.propTypes = {
  channelName: PropTypes.string
}
