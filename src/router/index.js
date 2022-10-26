import Vue from 'vue';
import VueRouter from 'vue-router';
import Tabbar from '../pages/tabbar/tabbar.vue';
import Home1 from '../pages/Home1/Home1.vue';
import Home1_1 from '../pages/Home1_1/Home1_1.vue';
import Home2_2 from '../pages/Home2_2/Home2_2.vue';
import Home2 from '../pages/Home2/Home2.vue';


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
        component: Home1,
      },
      {
        path: '/Home2',
        name: 'Home2',
        component: Home2,
      },
    ],
  },
  {
    path: '/Home1_1',
    name: 'Home1_1',
    component: Home1_1,
  },
  {
    path: '/Home2_2',
    name: 'Home2_2',
    component: Home2_2,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;