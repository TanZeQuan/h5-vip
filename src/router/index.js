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
    path: '/forget',
    name: 'forget',
    component: () => import('../views/forget/forget.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/my-account',
    name: 'my-acc',
    component: () => import('../views/my-account/my-acc.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/nickname',
    name: 'nickname',
    component: () => import('../views/account/nickname.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/acc-record',
    name: 'acc-record',
    component: () => import('../views/account/acc-record.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/security-center',
    name: 'sec',
    component: () => import('../views/security-center/sec.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/betting-record',
    name: 'bet',
    component: () => import('../views/betting-record/bet.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login/login.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/Register',
    name: 'register',
    component: () => import('../views/Register/register.vue'),
    meta: { hideNavBottom: true }
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
    path: '/deposit-record',
    name: 'dep-record',
    component: () => import('../views/deposit/dep-record.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/profit',
    name: 'profit',
    component: () => import('../views/profit/profit.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/mail',
    name: 'mail',
    component: () => import('../views/mail-record/mail.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/withdraw',
    name: 'withdraw',
    component: () => import('../views/withdraw/withdraw.vue'),
    meta: { hideNavBottom: true }
  },
  {
    path: '/jili',
    name: 'jili',
    component: () => import('../views/index/jili.vue')
  },
  {
    path: '/fish',
    name: 'fish',
    component: () => import('../views//index/fish.vue')
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
