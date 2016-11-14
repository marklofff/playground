const settings = require('./../../src/lib/playground_settings.js')
const r = require('rethinkdbdash')({ db: settings.DATABASE })

const HOME_PAGE = 'http://localhost:3001'
const MESSAGE_INPUT = 'input[id="messageInput"]'

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
      .setValue(MESSAGE_INPUT, 'hello there pal')
      .sendKeys(MESSAGE_INPUT, browser.Keys.ENTER)
      .assert.containsText('#messages', 'hello there pal')
      .end()
  },
  'Create a Label': (browser) => {
    browser
      .url(HOME_PAGE)
      .setValue(MESSAGE_INPUT, '+lahbul this is fun')
      .sendKeys(MESSAGE_INPUT, browser.Keys.ENTER)

    browser.expect.element('#labels').text.to.match(/lahbul/)

    browser.end()
  },
  'Navigate to Label View': (browser) => {
    browser
      .url(HOME_PAGE)
      .setValue(MESSAGE_INPUT, 'wow neat great cool')
      .sendKeys(MESSAGE_INPUT, browser.Keys.ENTER)
      .setValue(MESSAGE_INPUT, '+neato bloop neat floop')
      .sendKeys(MESSAGE_INPUT, browser.Keys.ENTER)

    browser.click('div[id="neato"] > a')

    browser.expect.element('#messages').text.to.not.match(/wow neat great cool/)

    browser.end()
  }
}
