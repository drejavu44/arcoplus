import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import Products from "../views/products/Products.vue"
import LoginView from "../views/auth/LoginView.vue"
import SignupView from "../views/auth/SignupView.vue"
import ProjectsView from "../views/projects/ProjectsView.vue"

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
            component: Products
        },
        {
            path:"/login",
            name:"login",
            component: LoginView
        },
        {
            path:"/signup",
            name:"signup",
            component: SignupView
        },
        {
            path:"/projects",
            name:"projects",
            component: ProjectsView
        }
    ]
})

export default router