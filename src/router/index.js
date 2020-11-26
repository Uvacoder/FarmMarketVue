import Vue from 'vue'

import VueRouter from "vue-router";

import Main from "@/views/Main";
import CreateAccount from "@/views/CreateAccount";
import MyAccount from "@/views/MyAccount";
import NotFound from "@/views/NotFound";
import Shop from "@/views/Shop";
import AddProduct from "@/views/AddProduct";

Vue.use(VueRouter)


const routes = [
    {path: '/', component: Main},
    {path: '/create_account', component: CreateAccount},
    {path: '/my_account', component: MyAccount},
    {path: '/shop', component: Shop},
    {path: '*', component: NotFound},
    {path: '/add_product', component: AddProduct}
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router