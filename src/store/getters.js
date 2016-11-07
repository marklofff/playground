export const messages = state => state.messages

export const labels = state => state.labels

export const label = state => state.label

export const messagesForLabel = (state) => {
  return state.messages.filter((message) => {
    if(state.label === 'All')
      return true
    else
      message.label === state.label
  })
}
