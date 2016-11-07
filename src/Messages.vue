<template>
  <div>
    {{ messages }}
    <br />
    <br />
    {{ label }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'messages',
  computed: {
    ...mapGetters({
      messages: 'messages',
      label: 'label'
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
