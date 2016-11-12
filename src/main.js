import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import Playground from './Playground.vue'
import store from './store'
import * as types from './store/mutation-types'
import socketio from 'socket.io-client'
import settings from '../lib/playground_settings'

let socket = socketio(settings.SOCKET_HOST)

socket.on('MESSAGES_AND_LABELS', (data) => {
  store.dispatch('messagesAndLabels', { messages: data.messages, labels: data.labels })
})

store.dispatch('webSocket', socket)

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Playground },
    { path: '/:label', component: Playground, name: 'label' }
  ]
})

sync(store, router)

// console.log(router.params)

new Vue({
  router,
  store,
  el: '#main'
})
