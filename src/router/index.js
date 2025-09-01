import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import {createRouter, createWebHistory} from "vue-router";
import Common from "../layouts/Common.vue";
import Contact from "../pages/Contact.vue";
import NotFound from "../pages/NotFound.vue";
import Data from "../pages/Data.vue";
import Api from "../pages/Api.vue";

let routes = [
    {
        path: "/",
        component: Common,
        children: [
            {
                path: '/',
                component: Home,
            },
            {
                path: '/contact',
                component: Contact,
            },
            {
                path: '/services',
                component: Services,
            },
            {
                path: 'services/:id',
                component: Data
            },
        ],

    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
    {
        path: '/api',
        component: Api,
    }

]
let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export default router;