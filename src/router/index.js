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
    component: () => import('../views/account/acc.vue') 
  },
  {
    path: '/promotion',
    name: 'promo',
    component: () => import('../views/promotion/promo.vue') 
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/share/share.vue') 
  },
  {
    path: '/reward',
    name: 'reward',
    component: () => import('../views/reward/rew.vue'),
    // meta: { requiresAuth: true }
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
  }
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
