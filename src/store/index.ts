// vuex
import { createStore } from 'vuex'
// interface
interface stateInterface {
  menuRoutes: Array<object> // 保存:合并后的完整路由
  isRouterRequestStatus: boolean // 记录：路由是否请求过
  currActiveMenu?: string
  currActiveSubMenu?: string
  currActiveSubMenuChild?: string
  userInfo: object // 用户信息
}
//
export default createStore({
  state(): stateInterface {
    return {
      menuRoutes: [], // 保存:合并后的完整路由
      isRouterRequestStatus: false, // 记录：路由是否请求过
      currActiveMenu: sessionStorage.getItem('currActiveMenu') || 'index', // 保存:当前选中项菜单栏alias = name
      currActiveSubMenu: sessionStorage.getItem('currActiveSubMenu') || '', // 保存:当前选中项菜单栏alias = name,
      currActiveSubMenuChild: sessionStorage.getItem('currActiveSubMenuChild') || '', // 保存:当前选中项菜单栏alias = name,,
      userInfo: {} // 用户信息
    }
  },
  mutations: {
    // 保存当前menu渲染的routes
    saveMenuRoutes(state: stateInterface, payload) {
      state.menuRoutes = payload
    },
    // 路由是否请求过的状态
    setRouterRequestStatus(state: stateInterface, payload) {
      state.isRouterRequestStatus = payload
    },
    // 保存当前点击的menu
    saveCurrActiveMenu(state: stateInterface, payload) {
      sessionStorage.setItem('currActiveMenu', payload)
      state.currActiveMenu = payload
    },
    // 保存当前subMenu
    saveCurrActiveSubMenu(state: stateInterface, payload) {
      sessionStorage.setItem('currActiveSubMenu', payload)
      state.currActiveSubMenu = payload
    },
    // 保存当前subMenu-child
    saveCurrActiveSubMenuChild(state: stateInterface, payload) {
      sessionStorage.setItem('currActiveSubMenuChild', payload)
      state.currActiveSubMenuChild = payload
    },
    // 用户信息---保存
    saveUserInfo(state: stateInterface, payload) {
      state.userInfo = payload
    },
    // 用户信息---清除
    clearUserInfo(state: stateInterface) {
      state.userInfo = {}
    }
  },
  actions: {},
  getters: {
    menuRoutesGetters(state: stateInterface): Array<object> {
      return state.menuRoutes
    }
  }
})
