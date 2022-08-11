import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory} from "vue-router"

import { createPinia } from 'pinia'

import test_comp1 from "./components/test_comp1"
import test_comp2 from "./components/test_comp2"
import test_comp3 from "./components/test_comp3"

const app = createApp(App)
const pinia = createPinia()

const routes = [
    {path: "/", component: test_comp1},
    {path: "/comp2", component: test_comp2},
    {path: "/comp3", component: test_comp3}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: "active"
})
app.use(router)
app.use(pinia)
app.mount('#app')
