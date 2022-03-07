<template>
  <el-container class="layout-frame">
    <el-aside>
      <LayoutFrameAside :menu="menu"></LayoutFrameAside>
    </el-aside>
    <el-container>
      <router-view router-view></router-view>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
// plugin
import { useStore } from 'vuex'
// components
import LayoutFrameAside from './layout-frame-aside.vue'
// vuex
const store = useStore()
const menu = store.state.menuRoutes
</script>
<style lang="scss" scoped>
.layout-frame {
}
</style>
