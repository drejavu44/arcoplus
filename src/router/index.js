import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import Supaproducts from "@/components/supaproducts.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name: "home",
            component: HomeView
        },
        {
            path:"/about",
            name: "about",
            component: AboutView
        },
        {
            path:"/products",
            name:"products",
            component: Supaproducts
        }
    ]
})

export default router