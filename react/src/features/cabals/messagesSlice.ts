import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import moment from 'moment'
// import remark from 'remark'
// import remarkEmoji from 'remark-emoji'
// import remarkReact from 'remark-react'
// import throttle from 'lodash.throttle'

import { AppThunk } from '../../app/store'
import { listCommands, processCommand } from '../../utils/textInputCommands'
import { generateUniqueName } from '../../utils/helpers'
import {
  publishMessage as sendPublishMessage,
  publishStatusMessage as sendPublishStatusMessage,
} from '../../utils/cabal-render-ipc'

interface MessagesInterface {
  messages: MessageInterface[],
}

interface MessageInterface {
  messages: Array<MessageInterface>,
}

interface TextInputCommandInterface {
  cabalKey: string, 
  text: string
}

interface Users { 
  [key: string]: {
    key: string
    name: string
  }
}

let initialState: MessagesInterface = {
  messages: []
}

const cabalsSlice = createSlice({
  name: 'cabals',
  initialState,
  reducers: {
    addMessage (state, action) {
      console.log('addMessageaddMessage', action.payload)
      state.messages.push(action.payload)
    },
  }
})

export const {
  addMessage,
} = cabalsSlice.actions

export default cabalsSlice.reducer

export const publishMessage = ({ cabalKey, channel, message }: { cabalKey: string, channel: string, message: string }): AppThunk => async dispatch => {
  sendPublishMessage({ cabalKey, channel, message })
}

export const publishStatusMessage = ({ cabalKey, channel, text }: { cabalKey: string, channel: string, text: string }): AppThunk => async dispatch => {
  sendPublishStatusMessage({ cabalKey, channel, text })
}

export const listTextInputCommands = (): AppThunk => async dispatch => {
  // dispatch(listCommands())
}

export const onTextInputCommand = (props: TextInputCommandInterface): AppThunk => async dispatch => {
  // dispatch(processCommand(props))
}
