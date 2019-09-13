import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About/index.vue'
import Contact from './views/Contact/index.vue'
import Services from './views/Services/index.vue'


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
    ]
})

export default router;