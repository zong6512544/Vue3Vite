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
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: 1200px;
  height: 100%;

  // el-aisde
  .el-aside {
    position: relative;
    box-sizing: border-box;
    padding-bottom: 50px;
    z-index: 100;
    width: 220px !important;
    height: 100%;
    border-right: 1px solid rgba(#333, 0.2);
    overflow: hidden;
  }
}
</style>
