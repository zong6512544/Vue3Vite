<template>
  <div class="layout-frame-aside">
    <el-scrollbar>
      <el-menu :default-active="currentMenuInfo.currActiveMenu" :default-openeds="[diffSubMenuInfo]">
        <template v-for="item of props.menu" :key="item.alias">
          <!-- submenu -->
          <el-sub-menu
            v-if="item.subMenuList"
            :index="item.alias"
            :class="diffSubMenuInfo === item.alias ? 'el-sub-menu__curr--active' : ''"
          >
            <template #title>
              <span :style="{ 'padding-left': `${menuPaddingLeft * (deep - 1)}px !important` }">{{ item.name }}</span>
            </template>
            <!-- 递归实现 -->
            <layout-frame-aside :menu="item.subMenuList" :deep="deep + 1"></layout-frame-aside>
          </el-sub-menu>
          <!-- menu-item -->
          <el-menu-item
            v-else
            @click="routerTo(item.alias)"
            :index="item.alias"
            :style="{ 'padding-left': `${menuPaddingLeft * deep}px !important` }"
          >
            <template #title>
              {{ item.name }}
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
import { PropType, computed, ref } from 'vue'
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
// data
const menuPaddingLeft = ref(20) // 用于递归组件控制padding-left的间距
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
$menu-text: #fff;
$menu-text-effect: rgb(64 158 255);
// $menu-sub-bg: rgb(31 45 61);
$menu-sub-bg: #1f2d3d;
$menu-bg-effect: #001528;
.layout-frame-aside {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  //
  .menu-active {
    color: $menu-text-effect !important;
  }
  // hover
  .menu-hover {
    background: $menu-bg-effect !important;
    span,
    i {
      color: $menu-text-effect;
    }
  }
  //
  .el-scrollbar {
    height: 100% !important;
  }
  // el-emnu 样式
  .el-menu {
    box-sizing: border-box;
    border-right: none;
    height: 100%;
    background-color: transparent;

    // submenu样式
    .el-sub-menu {
      &:deep(.el-sub-menu__title) {
        color: $menu-text !important;
        &:hover {
          @extend .menu-hover;
        }
      }
    }

    .el-menu-item {
      color: $menu-text;
      min-width: 100px !important;
      &:hover {
        @extend .menu-hover;
      }
      // 聚焦背景颜色
      &:focus {
        outline: none !important;
      }
      &.is-active {
        @extend .menu-active;
      }
    }
  }
  // .el-menu--inline {
  &:deep(.el-menu--inline) {
    background-color: $menu-sub-bg !important;
  }

  // 当前选中subMenu样式
  .el-sub-menu__curr--active {
    .el-sub-menu__title {
      span,
      i {
        color: $menu-text-effect !important;
      }
    }
  }
}
</style>
