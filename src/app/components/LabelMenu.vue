<template>
  <div id="labels">
    <div class="ui small vertical menu">
      <div v-for="label in labels" v-bind:id="label.label">
        <router-link :to="{ name: 'label', params: { label: label.label } }" v-bind:class="{ active: activeLabel === label.label }" class="item">
          <div v-text="label.count" class="ui small label"></div>
          {{ label.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
