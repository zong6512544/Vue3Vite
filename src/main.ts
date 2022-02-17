import { createApp } from 'vue'
import web from './index.vue'
// 
const app = createApp(web)
// router
import router from './router/index'
app.use(router)
// vuex
import store from './store/index'
app.use(store)
// mount
app.mount('#web')