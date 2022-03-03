<template>
  <div class="home">home</div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
// data
const data = ref({})
// computed
const dataControl = computed(() => data)
// lice-cycle
onMounted(() => {
  console.log('dataControl', dataControl.value)
})
</script>
<style lang="scss" scoped>
.home {
}
</style>
