import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import Playground from './Playground.vue'
import store from './store'
import * as types from './store/mutation-types'
import socketio from 'socket.io-client'

const ENV = process.env.NODE_ENV || 'development'
const SOCKET_HOST = (ENV === 'test') ? 'http://localhost:8011' :'http://localhost:8010'

let socket = socketio(SOCKET_HOST)

socket.on('MESSAGES_AND_LABELS', (data) => {
  store.dispatch('messagesAndLabels', { messages: data.messages, labels: data.labels })
})

store.dispatch('webSocket', socket)

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Playground },
    { path: '/:label', component: Playground }
  ]
})

sync(store, router)

new Vue({
  router,
  store,
  el: '#main'
})
