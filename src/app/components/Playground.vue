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
            <a v-if="message.label" class="ui horizontal label">
              {{ message.label }}
            </a>
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
import { mapGetters } from 'vuex'

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
  }
}
</script>

<style>
#main {
  margin-top: 40px;
}
</style>
