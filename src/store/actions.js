import * as types from './mutation-types'

export const labelFromParams = ({ commit, state }) => {
  var label = state.route.params.label;
  if(label !== undefined && label !== '')
    commit(types.SET_LABEL, label)
}
