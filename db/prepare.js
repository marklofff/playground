const r = require('rethinkdbdash')()
let database = "playground"

// r.dbDrop(database).run().then(() => {
//   console.log('dropped the database')
//   process.exit()
// })

r.dbCreate(database).run().then(()=> {
  console.log('created the database')

  r.db(database).tableCreate("messages").run().then(()=> {
    console.log('created the messages table')

    r.db(database).table("messages").indexCreate("created_at").run().then(()=> {
      console.log('add index for created_at')

      r.db(database).table("messages").indexCreate("label").run().then(()=> {
        console.log('add index for label')
        process.exit()
      })
    })
  })
})
