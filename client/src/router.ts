import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const LOGIN_ROUTE = 'login'
export const REGISTER_ROUTE = 'register'
export const HOME_ROUTE = 'home'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: HOME_ROUTE,
      component: () => import(/* webpackChunkName: "homeView" */ './views/HomeView.vue')
    },
    {
      path: '/login',
      name: LOGIN_ROUTE,
      component: () => import(/* webpackChunkName: "loginView" */ './views/LoginView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
