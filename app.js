const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const r = require('rethinkdbdash')({
  db: 'playground'
})

server.listen(8010);

io.on('connection', (socket) => {
  console.log('hi')
  r.table('messages').run().then((result) => {
    socket.emit('init', { messages: result })
  }).catch((err) => {
    console.log(err)
  })
})
