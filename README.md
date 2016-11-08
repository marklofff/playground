# playground

just playin

## Dependencies

* Node.js
* RethinkDB

## Setup

Requires RethinkDB to be running

  rethinkdb

Install dependencies

    npm install

Setup the database

    node db/prepare.js

Start dev servers

    npm run dev

## Tests

Download selenium bits

    node nightwatch.conf.js

Setup the database

    NODE_ENV=test node db/prepare.js

Run the Nightwatch tests

    npm test
