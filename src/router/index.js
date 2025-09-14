import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import {createRouter, createWebHistory} from "vue-router";
import Common from "../layouts/Common.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";
import Data from "../pages/Data.vue";
import Api from "../pages/Api.vue";
import Login from "../pages/Login.vue";
import {useLogin} from "../store/login.js";

let routes = [
    {
        path: "/",
        component: Common,
        children: [
            {
                path: '/',
                component: Home,
                name: "Home",
                meta:{
                    requiresAuth: true,
                }
            },
            {
                path: '/contact',
                component: Contact,
                name: 'Contact',
                meta:{
                    requiresAuth: true,
                }
            },
            {
                path: '/services',
                component: Services,
                name: 'Services',
                meta:{
                    requiresAuth: true,
                }
            },
            {
                path: 'services/:id',
                component: Data,
                name:"Data",
                meta:{
                    requiresAuth: true,
                }
            },
        ],

    },
    {
        path: '/about',
        component: About,
        name: 'About',
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/api',
        component: Api,
        name: 'Api',
        meta:{
            requiresAuth: true,
        }
    },
    {
        path: '/login',
        component: Login,
        name:'Login',
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
        name: 'NotFound',
    },

]
let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, from, next) => {
    let loginSecury = useLogin()
    if (!loginSecury.isAuthenticated && to.meta.requiresAuth ) {
        next({name: 'Login'})
    }else if (loginSecury.isAuthenticated && to.path === '/login') {
        next({name: 'Home'})
    }
    else {
        next()
    }
})

export default router;