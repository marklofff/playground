<template>
  <div id="main" class="ui grid container">
    <div class="two column row">
      <div class="four wide column">
        <label-menu />
      </div>
      <div class="twelve wide column">
        <message-form />
        <div v-html="label" class="ui horizontal divider"></div>
        <div id="messages">
          <div v-for="message in messagesForLabel" :key="message.id" class="ui message">
            <p v-html="message.body" class="text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageForm from './MessageForm.vue'
import LabelMenu from './LabelMenu.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Playground',
  components: {
    MessageForm,
    LabelMenu
  },
  computed: {
    ...mapGetters({
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
#main {
  margin-top: 40px;
}
</style>
