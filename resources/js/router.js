import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: "",
            component: () => import("./layouts/Main.vue"),
            children: [
                {
                    path: "/",
                    name: "home",
                    component: () => import("./components/Home.vue")
                }
            ]
        }
    ]
});

export default router;
