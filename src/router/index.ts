import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import moment from 'moment';
let days = Array<number>();
const actualDate: number = parseInt(moment().format("YYYYMMDD")); 
const dayDate: number = parseInt(moment().format("DD"));
const christmasDate = 20221225;

actualDate <= christmasDate ? days = [...Array(dayDate).keys()] : days = [...Array(25).keys()];
days = days.map((day) => day + 1);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "dayinProgress" */ '../views/HomeView.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'Dayinprogress',
    component: () => import(/* webpackChunkName: "dayinProgress" */ '../views/days/DayInProgressView.vue')
 }

  
  /*{
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( webpackChunkName: "about"  '../views/AboutView.vue')
  }*/
  
]
days.forEach((day) => {
  routes.push({
    path: `/day${day}`,
    name: `Day${day}`,
    component: () => import(/* webpackChunkName: "day${day}" */ `../views/days/Day${day}View.vue`),
  })
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
