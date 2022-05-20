<template>
  <div class="vue-test"></div>
</template>
<script lang="ts">
import { onMounted } from 'vue'

export default {
  name: 'vue-test',

  components: {},

  setup(): any {
    onMounted(() => {
      console.log('test')
    })
  },

  computed: {},

  watch: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.vue-test {
}
</style>
