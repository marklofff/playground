const settings = require('./playground_settings.js')

class PlaygroundMessage {
  constructor(body) {
    this.body = body
  }

  getLabelFromBody() {
    if(this.body.charAt(0) === '+') {
      let label = this.body.split(' ')[0]
      return label.substr(1)
    } else {
      return settings.DEFAULT_LABEL
    }
  }

  removeLabelFromBody() {
    if(this.body.charAt(0) === '+') {
      let newBody = this.body.split(' ')
      newBody.shift()
      return newBody.join(' ')
    } else {
      return this.body
    }
  }
}

module.exports = PlaygroundMessage
