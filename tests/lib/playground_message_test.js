const expect = require('expect.js')
const PlaygroundMessage = require('../../lib/playground_message.js')

describe('PlaygroundMessage', () => {
  describe('getLabelFromBody', () => {
    it('should return only the label text', () => {
      let playgroundMessage = new PlaygroundMessage('+newLabel hi there')
      expect(playgroundMessage.getLabelFromBody()).to.equal('newLabel')
    })
  })

  describe('removeLabelFromBody', () => {
    it('should return the body without the label definition', () => {
      let playgroundMessage = new PlaygroundMessage('+newLabel another neat test')
      expect(playgroundMessage.removeLabelFromBody()).to.equal('another neat test')
    })
  })
})
