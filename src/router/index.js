import { createRouter, createWebHashHistory } from "vue-router";

const routes = [    
  {
    path: '/',
    redirect:'index'
  },
  {
    path: '/index',
    name: 'home',
    component: () => import('../views/index/home.vue') 
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/account/acc.vue') ,
    meta: { hideNavBottom: true }
  },
  {
    path: '/promotion',
    name: 'promo',
    component: () => import('../views/promotion/promo.vue') 
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/share/share.vue') ,
    meta: { hideNavBottom: true }
  },
  {
    path: '/reward',
    name: 'reward',
    component: () => import('../views/reward/rew.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login/login.vue') 
  },
  {
    path: '/Register',
    name: 'register',
    component: () => import('../views/Register/register.vue') 
  },
  {
  path: '/more-games',
  name: 'MoreGames',
  component: () => import('@/views/index/more-games.vue') // Adjust the path accordingly
  },
  {
    path: '/deposit',
    name: 'deposit',
    component: () => import('../views/deposit/dep.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import('../views/withdraw/withdraw.vue'),
    meta: { hideNavBottom: true }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass: 'selected'
})

// ✅ Global navigation guard
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

  if (to.meta.requiresAuth && !isLoggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router;
