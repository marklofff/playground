<template>
  <div id="message-form" class="ui form">
    <form v-on:submit.prevent="false">
      <div class="input">
        <input v-model="message" v-on:keydown="submitOnEnter" type="text" id="messageInput" placeholder="What's playin yo?" autocomplete="off" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as settings from '../../lib/playground_settings.js'

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
      message: generateNewMessage(this.$store.getters.label)
    }
  },
  methods: {
    submitOnEnter(e) {
      if(e.key === 'Enter' && !e.shiftKey) {
        if(/\w/.test(this.message)) {
          this.$store.dispatch('sendMessage', { body: this.message })
          this.message = ''
        }
      }
    }
  }
}
</script>

<style>
</style>
