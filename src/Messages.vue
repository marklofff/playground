<template>
  <div class="ui grid container">
    <div class="column">
      <form>
        <div class="ui fluid input">
          <input type="text" placeholder="What's playin yo?" autocomplete="off" autofocus />
        </div>
      </form>
      <div class="ui horizontal divider" v-html="label"></div>
      <div>
        <div v-for="message in messagesForLabel" :key="message.id" class="ui message">
          <p v-html="message.body" class="text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'messages',
  computed: {
    ...mapGetters({
      labels: 'labels',
      label: 'label',
      messagesForLabel: 'messagesForLabel'
    })
  },
  methods: {
    ...mapActions([
      'labelFromParams'
    ])
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.labelFromParams()
    })
  }
}
</script>

<style>
</style>
