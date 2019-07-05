import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './pages/home'),
    },
    {
      path: '/homePc',
      name: 'homePc',
      component: () => import(/* webpackChunkName: "homePc" */ './pages/homePc'),
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import(/* webpackChunkName: "activity" */ './pages/activity'),
    },
  ],
});
