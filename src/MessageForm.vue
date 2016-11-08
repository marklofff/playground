<template>
  <form v-on:submit.prevent="sendMessage(message)">
    <div class="ui fluid input">
      <input v-model="message" type="text" placeholder="What's playin yo?" autocomplete="off" autofocus />
    </div>
  </form>
</template>

<script>
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
      this.message = ""
    }
  }
}
</script>

<style>
</style>
