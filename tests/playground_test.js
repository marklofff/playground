module.exports = {
  'Page Loads': (browser) => {
    browser
      .url('http://localhost:3000')
      .assert.title('playground')
      .end();
  }
}
