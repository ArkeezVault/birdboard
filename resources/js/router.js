import Vue from "vue";
import Vuex from 'vuex';
import Router from "vue-router";

import Login from './components/Login.vue';
import Dashboard from './components/ProjectDashboard';




Vue.use(Router);
Vue.use(Vuex);


const router = new Router({
//    mode: "history",
//     scrollBehavior() {
//         return { x: 0, y: 0 };
//     },
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
        {
            path: "/login",
            name: "login",
            component: Login

        },
        {
            path: "/register",
            name: "register",
            component: () => import("./components/Register.vue")
        },
        {
            path: "/Dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "/ProjectDetails",
            name: "ProjectDetails",
            component: () => import("./components/ProjectDetails.vue")
        },
        {
            path: "/members",
            name: "members",
            component: () => import("./components/Members.vue")
        },
    ]
});

export default router;
