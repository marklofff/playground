

export const messages = state => state.messages

export const labels = state => state.labels

export const label = (state) => {
  let label = state.route.params.label
  if((label === undefined) || (label === '')) {
    return state.defaultLabel
  } else {
    return label
  }
}

export const messagesForLabel = (state, getters) => {
  let label = getters.label
  // console.log(label)
  return state.messages.filter((message) => {
    if(label === state.defaultLabel) {
      return true
    } else {
      return message.label === label
    }
  })
}
