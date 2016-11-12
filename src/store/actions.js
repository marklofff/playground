import * as types from './mutation-types'

export const messagesAndLabels = ({ commit }, { messages, labels }) => {
  commit(types.SET_MESSAGES, messages)
  commit(types.SET_LABELS, labels)
}

export const webSocket = ({ commit }, websocket) => {
  commit(types.SET_SOCKET, websocket)
}

export const sendMessage = ({ commit, state }, message) => {
  state.socket.emit('SEND_MESSAGE', message)
}
