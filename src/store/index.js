import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import * as types from './mutation-types.js'
import * as settings from '../../lib/playground_settings.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: null,
    messages: [],
    labels: [],
    defaultLabel: settings.DEFAULT_LABEL
  },
  actions,
  getters,
  mutations: mutations
})
