import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/test',
        name: 'test',
        component: () => import('@/views/test.vue')
    }
]

export default routes