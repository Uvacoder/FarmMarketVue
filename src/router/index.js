import Vue from 'vue'

import VueRouter from "vue-router";

import Main from "@/views/Main";
import CreateAccount from "@/views/CreateAccount";
import MyAccount from "@/views/MyAccount";
import NotFound from "@/views/NotFound";
import Shop from "@/views/Shop";

Vue.use(VueRouter)



const routes = [
        { path: '/', component: Main },
        { path: '/create_account', component: CreateAccount },
        { path: '/my_account', component: MyAccount },
        { path: '/shop', component: Shop },
        { path: '*', component: NotFound }
    ]

const router = new VueRouter({
    routes
})

export default router