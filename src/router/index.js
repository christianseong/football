import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../components/Main.vue')
  },
  {
    path: '/business',
    name: 'Business',
    component: () => import('../components/Business.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../components/Service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../components/Apply.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
