const HOME_PAGE = 'http://localhost:3001'

module.exports = {
  'Page Loads': (browser) => {
    browser
      .url(HOME_PAGE)
      .assert.title('playground')
      .end()
  },
  'Send a Message': (browser) => {
    browser
      .url(HOME_PAGE)
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'hello there pal')
      .sendKeys('input[type=text]', browser.Keys.ENTER)
      .assert.containsText('#messages', 'hello there pal')
      .end()
  }
}
