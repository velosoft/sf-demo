import Vue from 'vue';
import VueRouter from 'vue-router';
import Tabbar from '../pages/tabbar/tabbar.vue';
import Home1 from '../pages/Home1/Home1.vue';
import Home1_1 from '../pages/Home1_1/Home1_1.vue';
import Home2_2 from '../pages/Home2_2/Home2_2.vue';
import Home2 from '../pages/Home2/Home2.vue';
import Page8 from '../pages/Page8/index.vue'


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
        component: Page8,
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
