const settings = require('./../../lib/playground_settings.js')
const r = require('rethinkdbdash')({ db: settings.DATABASE })

const HOME_PAGE = 'http://localhost:3001'

module.exports = {
  after() {
    r.getPoolMaster().drain()
  },
  beforeEach (browser) {
    r.table("messages").delete().run()
  },
  'Page Loads': (browser) => {
    browser
      .url(HOME_PAGE)
      .assert.title('playground')
      .end()
  },
  'Send a Message': (browser) => {
    browser
      .url(HOME_PAGE)
      .setValue('input[type=text]', 'hello there pal')
      .sendKeys('input[type=text]', browser.Keys.ENTER)
      .assert.containsText('#messages', 'hello there pal')
      .end()
  },
  'Create a Label': (browser) => {
    browser
      .url(HOME_PAGE)
      .setValue('input[type=text]', '+lahbul this is fun')
      .sendKeys('input[type=text]', browser.Keys.ENTER)

    browser.expect.element('#labels').text.to.match(/lahbul/)

    browser.end()
  },
  'Navigate to Label View': (browser) => {
    browser
      .url(HOME_PAGE)
      .setValue('input[type=text]', 'wow neat great cool')
      .sendKeys('input[type=text]', browser.Keys.ENTER)
      .setValue('input[type=text]', '+neato bloop neat floop')
      .sendKeys('input[type=text]', browser.Keys.ENTER)
      .click('div[id="neato"] > a')

    browser.expect.element('#messages').text.to.not.match(/wow neat great cool/)

    browser.end()
  }
}
