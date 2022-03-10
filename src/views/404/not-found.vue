<template>
  <div class="not-found">
    <h1>404</h1>
    <el-button @click="toHome">click me to home</el-button>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ENUM_STATIC_ROUTE } from '@/router/enum/index'
const router = useRouter()
function toHome() {
  router.push(ENUM_STATIC_ROUTE.home)
}
</script>
<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
