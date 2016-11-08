const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const r = require('rethinkdbdash')({
  db: 'playground'
})

server.listen(8010)

r.table("messages").changes().run((err, cursor) => {
  cursor.each((_, data) => {
    io.sockets.emit('NEW_MESSAGE', { message: data.new_val })
  })
})

io.on('connection', (socket) => {
  console.log('WebSocket Connected')

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
