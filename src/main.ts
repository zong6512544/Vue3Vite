import { createApp } from 'vue'
import web from './index.vue'
// router
import router from './router/index'
// vuex
import store from './store/index'
//
const app = createApp(web)
app.use(router)

app.use(store)
// mount
app.mount('#web')
