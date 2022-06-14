import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SingleView from '../views/SingleView.vue';
import FavouritesView from '../views/FavouritesView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/single/:item',
    name: 'single',
    component: SingleView
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
