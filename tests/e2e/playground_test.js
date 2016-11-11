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
  }
}
