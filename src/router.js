import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about/index.vue'
import Contact from './views/contact/index.vue'
import Policies from './views/policies/index.vue'
import Services from './views/services/index.vue'


Vue.use(Router)

const router = new Router({
    /**** Ignoring the # sign   ********/
    mode: 'history',
    /****************/
    routes: [


        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/services',
            component: Services
        },
        {
            path: '/policies',
            component: Policies
        }
    ]
})

export default router;