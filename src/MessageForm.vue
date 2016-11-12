<template>
  <div id="message-form">
    <form v-on:submit.prevent="sendMessage(message)">
      <div class="ui fluid input">
        <input v-model="newMessage" type="text" placeholder="What's playin yo?" autocomplete="off" autofocus />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as settings from '../lib/playground_settings.js'

function generateNewMessage(label) {
  let newMessage = ''
  if(label !== undefined) {
    if(label !== settings.DEFAULT_LABEL) {
      newMessage = `+${label} `
    }
  }
  return newMessage
}

export default {
  name: 'MessageForm',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage (message) {
      this.$store.dispatch('sendMessage', { body: message })
      this.message = ''
    }
  },
  computed: {
    newMessage: {
      get() {
        if(this.message === '') {
          return generateNewMessage(this.$store.getters.label)
        } else {
          return this.message
        }
      },
      set(value) {
        this.message = value
      }
    }
  }
}
</script>

<style>
</style>
