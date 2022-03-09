// import
import { createRouter, createWebHashHistory, RouteRecordRaw, RouteLocation, NavigationGuardNext } from 'vue-router'
// store
import store from '../store'
// routes: 最基本的静态routes
import routes from './routes'
// menu: 模拟从后端获取的菜单Array
import { menuList, MenuInfoInterface } from './mock/index.js'
// router-enum: 路由枚举
import { ENUM_STATIC_ROUTE, ENUM_DYNAMIC_ROUTE } from './enum/index.js'
// vite-import
const pages2Level = import.meta.glob('../views/*/*/*.vue')
const pages3Level = import.meta.glob('../views/*/*/*/*.vue')
const layoutFrame = import.meta.glob('../components/layout/*.vue')
const notFoundPage = import.meta.glob('../views/404/*.vue')
// router-create: 创建router
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// *********************************************router-before*********************************************
router.beforeEach((to, from, next) => {
  // 获取token
  const token = window.localStorage.getItem('token')
  // 白名单route拦截
  if (to.meta.ignore) {
    // 进入首页后，路由重新请求
    store.commit('setRouterRequestStatus', false)
    return next()
  }
  // 生产环境，如果没有登录，跳转到login页
  // if (!token && process.env.NODE_ENV === 'production') {
  if (!token && to.path !== ENUM_STATIC_ROUTE.login.path) {
    next(ENUM_STATIC_ROUTE.login)
  } else {
    routerAccessTo(to, from, next)
  }
})
// *********************************************router-after*********************************************
// router.afterEach((to, from) => {
//   console.log('to,from,next', to, from)
// })
// *********************************************router-to-success*********************************************
function routerAccessTo(to: RouteLocation, from: RouteLocation, next: NavigationGuardNext) {
  // 保存菜单info
  saveMenu(to)
  // 如果路由从来没有加载过
  if (!store.state.isRouterRequestStatus) {
    // 获取菜单
    // 根据menu动态生成routes、挂载，并返回生成的routes
    const routes = routerLoading(menuList)
    console.log('routes', routes)
    // 跳转操作
    // 请求的路由未匹配到就跳转到首页
    // routerTo(routes, next, to, true)
    next(to)
  } else if (to.matched.length === 0) {
    next(ENUM_STATIC_ROUTE.index)
  } else {
    // 跳转操作
    // 路由未匹配到就跳转到首页
    // routerTo(router.options.routes, next, to, false)
    next()
  }
}
// *********************************************save-menu**************************************************
function saveMenu(to: RouteLocation): void {
  // 保存：当前选中菜单
  store.commit('saveCurrActiveMenu', to.name)
  let CurrActiveSubMenu: string = ''
  let CurrActiveSubMenuChild: string = ''
  if (to.matched.length > 1) {
    CurrActiveSubMenu = to.matched[0].name as string
  }
  // 保存：当前选中菜单的父级subMenu(若有)
  if (to.matched.length > 2) {
    CurrActiveSubMenuChild = to.matched[1].name as string
  }
  // 保存：submenu
  store.commit('saveCurrActiveSubMenu', CurrActiveSubMenu)
  store.commit('saveCurrActiveSubMenuChild', CurrActiveSubMenuChild)
}
// *********************************************router-loading*********************************************
function routerLoading(menu: Array<MenuInfoInterface>): Array<RouteRecordRaw> {
  // 保存主菜单
  store.commit('saveMenuRoutes', menu)
  // 过滤无需动态挂载的菜单router
  // 初步处理：过滤主页index页面
  const menuFilter = menu.filter((item) => {
    return !['index'].includes(item.alias)
  })
  // 重置router
  routerReset()
  // 创建路由表
  const routes = routerCreate(menuFilter)
  // 挂载路由addRoutes
  router.options.routes = router.options.routes.concat(routes)
  // router重置状态（完成）
  store.commit('setRouterRequestStatus', true)
  //
  return routes
}
// *********************************************router-create*********************************************
function routerCreate(menu: Array<MenuInfoInterface> = [], deep = 1): Array<RouteRecordRaw> {
  const newRoutes = []
  for (let i = 0; i < menu.length; i++) {
    // 菜单项数据format
    const obj = getRouterInfo(menu[i])
    // 如果本地没有维护该router，跳出当前循环，不做format处理
    if (!obj) continue
    // 如果该遍历项没有subMenuList属性，则无子路由
    const { subMenuList } = menu[i]
    if (subMenuList) {
      // 如果有子路由：添加重定向，默认取children[0]
      // 如果没有子路由：添加重定向到菜单404页面
      obj.redirect = ENUM_DYNAMIC_ROUTE[subMenuList[0]?.alias]?.path || '' // 此处加上兼容，方便测试环境时改动菜单，防止router构造出错
      obj.children = routerCreate(subMenuList, deep + 1)
      /* webpack */
      // obj.component = () => import('@/components/layout/frame.vue')
      /* vite */
      if (obj.redirect) {
        const frameName = deep === 1 ? 'layout-frame' : 'layout-frame-child'
        obj.component = () => layoutFrame[`../components/layout/${frameName}.vue`]()
      } else {
        obj.component = () => notFoundPage[`../views/404/not-found-permit.vue`]()
      }
    } else {
      // 后端返回值是驼峰，需要去驼峰处理
      const path = obj.path.replace(/([A-Z])/g, '-$1').toLowerCase()
      /* webpack */
      // obj.component = () => import('@/views' + path + '/index.vue')
      /* vite */
      const pages = deep === 3 ? pages3Level : pages2Level
      obj.component = () => pages[`../views${path}/index.vue`]()
    }
    // 添加到路由数组
    newRoutes.push(obj)
    // router-api: 动态挂载route (4.0x使用addRoute,已经废弃addRoutes)
    router.addRoute(obj)
  }
  return newRoutes
}
function getRouterInfo(route: MenuInfoInterface): any {
  // 如果本地没有维护该动态route
  if (!ENUM_DYNAMIC_ROUTE[route.alias]) return false
  return {
    path: ENUM_DYNAMIC_ROUTE[route.alias].path,
    name: route.alias,
    meta: {
      title: route.name,
      icon: route.icon
    }
  }
}
// *********************************************router-reset*********************************************
function routerReset() {
  // TODO: 即将验证
  // const newRouter = createRouter({
  //   routes, // 加载本地route
  //   // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  //   history: createWebHashHistory()
  // })
  // router.matcher = newRouter.matcher
}
// *********************************************router-to*********************************************
// function routerTo(routesFormate: Array<RouteRecordRaw>, next: NavigationGuardNext, to: RouteLocation, init: boolean): void {
//   // 请求的路由未配置到就跳转到首页
//   const toDefault = routesFormate.some((route) => {
//     // 无children，则无二级菜单，默认跳过
//     if (!route.children) return true
//     // 否则
//     return route.children.some((child: RouteRecordRaw) => {
//       if (!route.children) return child.path === to.path
//       return route.children.some((childSon: RouteRecordRaw) => {
//         return childSon.path === to.path
//       })
//     })
//   })
//   // 当前的path未匹配到routes
//   if (!toDefault) {
//     next(ENUM_STATIC_ROUTE.index)
//   } else {
//     // 是否挂载动态routes后的第一次跳转
//     init ? next(to) : next()
//   }
// }

export default router
