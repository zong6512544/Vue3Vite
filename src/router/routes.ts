import { RouteRecordRaw } from 'vue-router'
import { ENUM_STATIC_ROUTE } from './enum'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/test',
    name: 'test',
    meta: {
      ignore: true // 白名单
    },
    component: () => import('@/views/page-test.vue')
  },
  {
    path: ENUM_STATIC_ROUTE.login.path,
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: ENUM_STATIC_ROUTE.index.path,
    name: 'home',
    component: () => import('@/views/home/index.vue')
  }
]

export default routes
