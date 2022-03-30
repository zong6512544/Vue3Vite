<template>
  <div class="web-entry">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { login } from '@/api/test'
export default {
  name: 'web-entry',

  components: {},

  setup(): any {
    login()
  },

  computed: {},

  watch: {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.web-entry {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
