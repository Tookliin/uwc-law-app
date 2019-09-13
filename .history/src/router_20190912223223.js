import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Article from './views/Article.vue'
import CreateArticle from './views/CreateArticle.vue'

Vue.use(Router)

const router = new Router({
    /**** Ignoring the # sign   ********/
    mode: 'history',
    /****************/
    routes: [


        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/',
            component: Home
        },

        {
            path: '/articles/create',
            component: CreateArticle
        },
        {
            path: '/article/:id',
            component: Article
        },
    ]
})

export default router;