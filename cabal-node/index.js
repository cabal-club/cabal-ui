import cabalMainIpc from '../react/src/utils/cabal-main-ipc'
import EventEmitter from 'events'
import express from 'express'
import path from 'path'

const port = process.env.PORT || 3000
const app = express()

require('express-ws')(app)

console.log('**** cabal websocket server ****')

// const DEFAULT_CHANNEL = 'default'
// const HOME_DIR = '' // TODO
// const DATA_DIR = '' // TODO
// const STATE_FILE = '' // TODO
// const DEFAULT_PAGE_SIZE = 100
const MAX_FEEDS = 1000

const eventEmitter = new EventEmitter()
const client = cabalMainIpc.initializeClient({ dataDir: '', maxFeeds: MAX_FEEDS, eventEmitter })

function index (req, res, next) {
  req.url = '/'
  next()
}

app.ws('/cabal/:cabalKey', (ws, req) => {
  const cabalKey = req.params.cabalKey
  console.log(req.params)
  console.log(' --> websocket client joined:', cabalKey)

  ws.on('message', function (msg) {
    const message = JSON.parse(msg)
    console.log('--> ws onmessage:', message)
    if (message.type) {
      eventEmitter.emit(message.type, message.data)
    }
  })

  const outgoingMessages = [
    'main:cabal-focus',
    'main:channel-focus',
    'main:channel-join',
    'main:channel-leave',
    'main:init',
    'main:new-channel',
    'main:new-message',
    'main:publish-message',
    'main:publish-nick',
    'main:started-peering',
    'main:status-message',
    'main:stopped-peering',
    'main:topic',
    'main:user-updated'
  ]
  outgoingMessages.forEach((eventName) => {
    eventEmitter.on(eventName, (data) => {
      ws.send(JSON.stringify({
        type: eventName,
        data
      }))
    })
  })
})
app.get('/', index)
app.get('/cabal/:cabalKey', index)
app.use(express.static(path.join(__dirname, 'dist')))
app.get('*', (req, res) => res.redirect('/'))

app.listen(port)

console.log('--> Listening on port', port)
