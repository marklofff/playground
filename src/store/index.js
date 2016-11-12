import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import * as types from './mutation-types.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: null,
    messages: [],
    labels: []
  },
  actions,
  getters,
  mutations: mutations
})
