<template>
  <div class="layout-frame-aside">
    <el-scrollbar>
      <el-menu :default-active="currentMenuInfo.currActiveMenu" :default-openeds="[diffSubMenuInfo]">
        <template v-for="item of props.menu" :key="item.alias">
          <el-sub-menu
            v-if="item.subMenuList"
            :index="item.alias"
            :class="diffSubMenuInfo === item.alias ? 'el-sub-menu__curr--active' : ''"
          >
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <layout-frame-aside :menu="item.subMenuList" :deep="deep + 1"></layout-frame-aside>
          </el-sub-menu>
          <el-menu-item v-else @click="routerTo(item.alias)" :index="item.alias">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
// plugin
import { useStore } from 'vuex'
import { PropType, computed } from 'vue'
import { useRouter } from 'vue-router'
// mock
import { MenuInfoInterface } from '@/router/mock/index'
// enum
import { ENUM_ROUTE } from '@/router/enum/index'
// store
const store = useStore()
const currentMenuInfo = computed(() => {
  return {
    currActiveMenu: store.state.currActiveMenu,
    currActiveSubMenu: store.state.currActiveSubMenu,
    currActiveSubMenuChild: store.state.currActiveSubMenuChild
  }
})
console.log('currActiveMenu', currentMenuInfo.value)
// router
const router = useRouter()
// props
const props = defineProps({
  menu: {
    default: () => [],
    required: true,
    type: Array as PropType<Array<MenuInfoInterface>>
  },
  deep: {
    default: 1,
    type: Number
  }
})
//
function routerTo(alias: string): void {
  ENUM_ROUTE[alias] && router.push(ENUM_ROUTE[alias])
}
// 判断当前subMenu从vuex读取的数据
const diffSubMenuInfo = computed(() => {
  return props.deep === 1 ? currentMenuInfo.value.currActiveSubMenu : currentMenuInfo.value.currActiveSubMenuChild
})
</script>
<style lang="scss" scoped>
.layout-frame-aside {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  //
  .el-scrollbar {
    height: 100% !important;
  }
  //
  .el-menu {
    box-sizing: border-box;
    border-right: none;
    height: 100%;
    // 控制递归组件的left间距
    padding-left: 12px;
  }
  .el-sub-menu .el-menu-item {
    min-width: 100px !important;
  }

  // 当前选中subMenu样式
  .el-sub-menu__curr--active {
    .el-sub-menu__title {
      span,
      i {
        color: purple !important;
      }
    }
  }
}
</style>
