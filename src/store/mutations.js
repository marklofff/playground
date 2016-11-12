import * as types from './mutation-types'

export default {
  [types.SET_MESSAGES] (state, messages) {
    state.messages = messages
  },
  [types.SET_LABELS] (state, labels) {
    state.labels = labels
  },
  [types.SET_SOCKET] (state, socket) {
    state.socket = socket
  }
}
