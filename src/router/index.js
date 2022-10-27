import Vue from 'vue';
import VueRouter from 'vue-router';
import Tabbar from '../pages/tabbar/tabbar.vue';
import Page8 from '../pages/Page8/index.vue'
import Page9 from '../pages/Page9/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'tabbar',
    component: Tabbar,
    children: [
      {
        path: '/',
        name: 'Home1',
        component: Page8,
      },
      {
        path: '/home2',
        name: 'Home2',
        component: Page8,
      },
      {
        path: '/home3',
        name: 'Home3',
        component: Page9,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
