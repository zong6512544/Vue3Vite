<!-- 登录后项目内权限菜单的404 -->
<template>
  <div class="not-found-permit">当前菜单消失了~</div>
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
.not-found-permit {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
