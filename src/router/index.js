import { createWebHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import About from './About.vue'
import Shop from './Shop.vue'
import Contact from './Contact.vue'
import Cart from './Cart.vue'

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/shop', component: Shop },
    { path: '/contact', component: Contact },
    { path: '/cart', component: Cart },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})