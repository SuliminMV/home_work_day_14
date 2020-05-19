import Vue from 'vue'
import VueRouter from 'vue-router'

import ClotnesInfo from '../components/ClothesInfo.vue'
import ClotnesSection from '../components/ClothesSection.vue'
import CartSection from '../components/CartSection'
import LoadingSection from '../components/LoadingSection.vue'
import Caps from '../components/Caps.vue'
import T_shirts from '../components/T-shirts.vue'
import Sweatshirts from '../components/Sweatshirts.vue'
import OutOfService from '../components/OutOfService.vue'
import PurchaseCompleted from '../components/PurchaseCompleted.vue'




Vue.use(VueRouter)


const routes = [
    { path: '/', component: LoadingSection },
    { path: '/clothes', component: ClotnesSection },
    { path: '/cart', component: CartSection},
    { path: '/clothes/:name', name:'clothes-info', component: ClotnesInfo},
    { path: '/caps', component: Caps},
    { path: '/t-shirts', component: T_shirts},
    { path: '/sweatshirts', component: Sweatshirts},
    { path: '/outOfService', component: OutOfService},
    { path: '/purchaseCompleted', component: PurchaseCompleted},



]

const router = new VueRouter({
    routes:routes
})

export default router;