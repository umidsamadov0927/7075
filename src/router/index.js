import Home from "../pages/Home.vue";
import About from "../pages/about.vue";
import Services from "../pages/Services.vue";
import {createRouter, createWebHistory} from "vue-router";
import Common from "../layouts/Common.vue";
import Contact from "../pages/Contact.vue";
import notFound from "../pages/notFound.vue";

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
            }
        ],

    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/services',
        component: Services,
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound,
    }

]
let router = createRouter({
    history: createWebHistory(),
    routes: routes,
})
export default router;