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
  // 登录页
  {
    path: ENUM_STATIC_ROUTE.login.path,
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  // 首页
  {
    path: ENUM_STATIC_ROUTE.index.path,
    redirect: ENUM_STATIC_ROUTE.home.path
  },
  {
    path: ENUM_STATIC_ROUTE.home.path,
    name: 'home',
    component: () => import('@/components/layout/layout-frame.vue'),
    children: [
      {
        path: ENUM_STATIC_ROUTE.index.path,
        component: () => import('@/views/home/index.vue')
      }
    ]
  },
  // 404
  {
    path: ENUM_STATIC_ROUTE.notFound.path,
    component: () => import('@/views/404/not-found.vue')
  }
]

export default routes
