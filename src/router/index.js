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
    path: '/reward',
    name: 'reward',
    component: () => import('../views/reward/rew.vue') 
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/Login/login.vue') 
  },{
    path: '/Register',
    name: 'register',
    component: () => import('../views/Register/register.vue') 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // linkActiveClass:'selected' //navbottomlink 跳转颜色固定
});

export default router;
