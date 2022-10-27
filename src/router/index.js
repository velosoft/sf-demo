import Vue from 'vue';
import VueRouter from 'vue-router';
import Tabbar from '../pages/tabbar/tabbar.vue';
import Page8 from '../pages/Page8/index.vue'
import Page9 from '../pages/Page9/index.vue'
import SearchPage from '../pages/SearchPage/SearchPage.vue'
import Page1 from '../pages/Index/Index.vue'

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
        component: Page1,
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
  {
    path: '/search',
    name: 'SearchPage',
    component: SearchPage,
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
