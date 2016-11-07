import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueRouter from 'vue-router'
import Messages from './Messages.vue'
import store from './store'
import * as types from './store/mutation-types'
import socketio from 'socket.io-client'

let socket = socketio('http://localhost:8010')

socket.on('init', (data) => {
  console.log(data)
  store.dispatch('initMessages', data.messages)
})

Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    { path: '/', component: Messages },
    { path: '/:label', component: Messages }
  ]
})

sync(store, router)

new Vue({
  router,
  store,
  el: '#main'
})
