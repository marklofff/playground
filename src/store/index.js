import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as types from './mutation-types.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  state: {
    messages: [],
    labels: [],
    label: 'All'
  },
  mutations: {
    [types.SET_LABEL] (state, label) {
      state.label = label
    },
    [types.SET_MESSAGES] (state, messages) {
      state.messages = messages
    },
    [types.SET_LABELS] (state, labels) {
      state.labels = labels
    }
  }
})
