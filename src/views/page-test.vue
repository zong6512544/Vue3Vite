<template>
  <div class="page-test">
    {{ test }}
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
// data
const data = ref({})
// computed
const dataControl = computed(() => data)
// lice-circle
onMounted(() => {
  console.log('dataControl', dataControl.value)
  // console.log('test', test.value)
})
const store = useStore()
const test = computed(() => store.state.menuRoutes)
</script>
<style lang="scss" scoped>
.page-test {
}
</style>
