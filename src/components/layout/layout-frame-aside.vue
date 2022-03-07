<template>
  <div class="layout-frame-aside">
    {{ props.menu }}
  </div>
</template>
<script lang="ts" setup>
// props
const props = defineProps({
  menu: {
    default: () => [],
    required: true,
    type: Array
  }
})
</script>
<style lang="scss" scoped>
.layout-frame-aside {
}
</style>
