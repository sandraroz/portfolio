import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const Home = () => import('@/views/Home.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Resume = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-pink-500',
});

export default router;
