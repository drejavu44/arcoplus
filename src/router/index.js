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
import UnauthorizedView from "@/views/auth/UnauthorizedView.vue"
import { getUserSession } from "@/supabase/supabase"

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
            component: Products,
            meta: {requiresAuth: true}
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
            component: ProjectsView,
            meta: {requiresAuth: true}
        },
        {
            path:"/signup-success",
            name:"signup-success",
            component: SignupSuccessView,
            meta: {requiresAuth: true}
        },
        {
            path:"/adminhome",
            name:"adminhome",
            component: AdminHomeView,
            meta: {requiresAuth: true}
        },
        {
            path:"/loader",
            name:"loader",
            component: Loader
        },
        {
            path:"/unauthorized",
            name:"unauthorized",
            component: UnauthorizedView
        }
    ]
})

const getUser = async(next) => {
    const localUser = await getUserSession();
    if(!localUser.session){
        router.push("/unauthorized")
    }else{
        next();
    }
}

router.beforeEach(async(to, from, next)=> {
    if(to.meta.requiresAuth){
        await getUser(next);
    }else{
        next()
    }
})

export default router