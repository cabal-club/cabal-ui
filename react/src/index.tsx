import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { EventEmitter } from 'events'

import store from './app/store'
import * as serviceWorker from './serviceWorker'

import websocketClient from './utils/cabal-websocket-client'

// @ts-ignore
window.eventEmitter = new EventEmitter()

const initialCabals = [
  {
    cabalKey: '508fdfb25cc892e4ea32fe01be1a0d8cddd2a8bafae30aaf667446b1cdb220b9',
    nickname: 'nick',
    settings: {}
  },
  // {
  //   cabalKey: 'cabal://f4083d41ac86aff65531ecddbebcea2b8f1ceac5d96352d54a4c68339c5d8fb7',
  //   nickname: 'nick',
  //   settings: {}
  // },
  // {
  //   cabalKey: 'cabal://129e5a229630759c3296007f2d2548a68d8234efdb78f99af092fa125e0d3ec9',
  //   nickname: 'nick',
  //   settings: {}
  // },
  // {
  //   cabalKey: 'cabal://8fa278f6ff5a8703fbf1e20a283d3787fde8990e4f35484deed9e02d85b8771e',
  //   nickname: 'nick',
  //   settings: {}
  // }
]

const websocketURL = 'ws://localhost:3000/cabal/508fdfb25cc892e4ea32fe01be1a0d8cddd2a8bafae30aaf667446b1cdb220b9/'
const cabalKey = initialCabals[0].cabalKey!
const settings = {}

websocketClient({ cabalKey, websocketURL })

const render = () => {
  const App = require('./app/App').default

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./app/App', render)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
