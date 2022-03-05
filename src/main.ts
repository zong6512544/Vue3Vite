import { createApp } from 'vue'
import web from './index.vue'
// router
import router from './router/index'
// vuex
import store from './store/index'
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//
const app = createApp(web)
app.use(router)
app.use(store)
app.use(ElementPlus)
// mount
app.mount('#web')
