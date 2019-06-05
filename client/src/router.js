import Vue from 'vue'
import router from 'vue-router'
import Home from '@/components/Home.vue'
import Skills from '@/components/Skills.vue'
//import Notfound from '@/components/Notfound.vue'

Vue.use(router)

let Router = new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/skills',
            name: 'Skills',
            component: Skills
        }
    ]

})

export default Router;