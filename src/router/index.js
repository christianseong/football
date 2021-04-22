import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('../views/Notice.vue')
  },
  {
    path: '/apply',
    name: 'Apply',
    component: () => import('../views/Apply.vue')
  },
  {
    path: '/mbti',
    name: 'Mbti',
    component: () => import('../views/Mbti.vue')
  },
  {
    path: '/terms-service',
    name: 'TermsService',
    component: () => import('../components/TermsService.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../components/PrivacyPolicy.vue')
  },
  {
    path: '/youth-policy',
    name: 'YouthPolicy',
    component: () => import('../components/YouthPolicy.vue')
  },
  {
    path: '/article-remove-policy',
    name: 'ArticleRemovePolicy',
    component: () => import('../components/ArticleRemovePolicy.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
