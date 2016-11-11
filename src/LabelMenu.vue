<template>
  <div id="labels">
    <div class="ui small vertical menu">
      <div v-for="label in labels">
        <a v-bind:class="{ active: label.label === activeLabel }" class="item">
          <div v-text="label.count" class="ui small label"></div>
          <span v-text="label.label"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'LabelMenu',
  computed: {
    ...mapGetters({
      labels: 'labels',
      activeLabel: 'label'
    })
  },
}
</script>

<style>
</style>
