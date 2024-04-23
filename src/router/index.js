import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ApplicationView from "../views/ApplicationView.vue"
import Products from "../views/products/Products.vue"
import LoginView from "../views/auth/LoginView.vue"
import SignupView from "../views/auth/SignupView.vue"
import ProjectsView from "../views/projects/ProjectsView.vue"
import SignupSuccessView from "@/views/auth/SignupSuccessView.vue"
import AdminHomeView from "@/views/AdminHomeView.vue"
import Loader from "@/Loader/Loader.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name: "home",
            component: HomeView
        },
        {
            path:"/application",
            name: "application",
            component: ApplicationView
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
        },
        {
            path:"/signup-success",
            name:"signup-success",
            component: SignupSuccessView
        },
        {
            path:"/adminhome",
            name:"adminhome",
            component: AdminHomeView
        },
        {
            path:"/loader",
            name:"loader",
            component: Loader
        }
    ]
})

export default router