const ENV = process.env.NODE_ENV || 'development'
const DATABASE = `playground_${ENV}`
const PORT = (ENV === 'test') ? 8011 : 8010

const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const r = require('rethinkdbdash')({ db: DATABASE })

console.log(`[Websocket] Starting port=${PORT}`)
server.listen(PORT)

// send new changes to all websocket clients
r.table("messages").changes().run((err, cursor) => {
  cursor.each((_, data) => {
    io.sockets.emit('NEW_MESSAGE', { message: data.new_val })
  })
})

io.on('connection', (socket) => {
  console.log('[WebSocket] Connected')

  r.table('messages').orderBy({ index: r.desc('created_at') }).run().then((result) => {
    socket.emit('MESSAGES_AND_LABELS', { messages: result , labels: [] })
  }).catch((err) => {
    // TODO
  })

  socket.on('SEND_MESSAGE', (data) => {
    r.table('messages').insert({
      body: data.body,
      label: '',
      created_at: r.now().toISO8601()
    }).run().then((err, result) => {
      // TODO
    }).catch((err) => {
      // TODO
    })
  })

})
