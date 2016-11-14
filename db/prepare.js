const ENV = process.env.NODE_ENV || 'development'
const DATABASE = `playground_${ENV}`

const r = require('rethinkdbdash')()

// r.dbDrop(DATABASE).run().then(() => {
//   console.log('dropped the database')
//   process.exit()
// })

// r.db(DATABASE).table("messages").delete().run().then(() => {
//   process.exit()
// })

r.dbCreate(DATABASE).run().then(()=> {
  console.log('created the database')

  r.db(DATABASE).tableCreate("messages").run().then(()=> {
    console.log('created the messages table')

    r.db(DATABASE).table("messages").indexCreate("created_at").run().then(()=> {
      console.log('add index for created_at')

      r.db(DATABASE).table("messages").indexCreate("label").run().then(()=> {
        console.log('add index for label')
        process.exit()
      })
    })
  })
})
