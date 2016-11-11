const ENV = process.env.NODE_ENV || 'development'
const DATABASE = `playground_${ENV}`
const PORT = (ENV === 'test') ? 8011 : 8010

const bluebird = require('bluebird')
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const r = require('rethinkdbdash')({ db: DATABASE })

const PlaygroundMessage = require('./lib/playground_message.js')

console.log(`[Websocket] Starting port=${PORT}`)
server.listen(PORT)

// promises to find messages and labels
function getMessagesAndLabels() {
  return bluebird.all([
    r.table('messages').orderBy({ index: r.desc('created_at') }).coerceTo('array').run(),
    r.table('messages').distinct({index: 'label'}).map(label => {
      return {
        label: label,
        count: r.table('messages').getAll(label, { index: 'label' }).count()
      }
    }).coerceTo('array').run()
  ]).then(items => ({ messages: items[0], labels: items[1] }))
}

// send new changes to all websocket clients
r.table("messages").changes().run((err, cursor) => {
    cursor.each((_, data) => {
      getMessagesAndLabels().then(messagesAndLabels => {
        io.sockets.emit('MESSAGES_AND_LABELS', messagesAndLabels)
      })
    })
})

io.on('connection', (socket) => {
  console.log('[WebSocket] Connected')

  getMessagesAndLabels().then(messagesAndLabels => {
    socket.emit('MESSAGES_AND_LABELS', messagesAndLabels)
  })

  // TODO validations of datas
  socket.on('SEND_MESSAGE', (data) => {
    let message = new PlaygroundMessage(data.body)
    r.table('messages').insert({
      body: message.removeLabelFromBody(),
      label: message.getLabelFromBody(),
      created_at: r.now().toISO8601()
    }).run()
  })

})
