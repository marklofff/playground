const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const morgan = require('morgan')
const r = require('rethinkdbdash')({
  db: 'playground'
})

app.use(morgan('dev'))

server.listen(8010)

io.on('connection', (socket) => {
  console.log('WebSocket Connected')

  r.table('messages').run().then((result) => {
    socket.emit('MESSAGES_AND_LABELS', { messages: result , labels: [] })
  }).catch((err) => {
    console.log('WebSocket Error')
    console.log(err)
  })

})
