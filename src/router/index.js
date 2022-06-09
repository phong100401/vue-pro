import Vue from 'vue'
import VueRouter from 'vue-router'
import {HomePage} from "../pages/Home";
import {Shop} from "../pages/Shop";
import {Cart} from "../pages/Cart";
import {Detail} from "../pages/Detail";
import {CheckOut} from "../pages/CheckOut";
import {About} from "../pages/About";
import {Contact} from "../pages/Contact";


Vue.use(VueRouter)

const routes = [
    ...HomePage,
    ...Shop,
    ...Cart,
    ...Detail,
    ...CheckOut,
    ...About,
    ...Contact
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();

})

export default router;