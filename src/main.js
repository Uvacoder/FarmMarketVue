import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
// import VueRouter from "vue-router";

// import Main from "@/views/Main";
// import CreateAccount from "@/views/CreateAccount";
// import MyAccount from "@/views/MyAccount";
// import NotFound from "@/views/NotFound";
// import Shop from "@/views/Shop";
//
// Vue.use(VueRouter)

import './scss/main.scss'

Vue.config.productionTip = false

// const routes = new VueRouter({
//   router: [
//     { path: '/', component: Main },
//     { path: '/create_account', component: CreateAccount },
//     { path: '/my_account', component: MyAccount },
//     { path: '/shop', component: Shop },
//     { path: '*', component: NotFound }
//   ]
// })

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
