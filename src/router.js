import Vue from 'vue';
import HotelCard from './components/hotel/HotelCard';
import HotelDetail from './components/hotel/HotelDetail';
import Reservation from './components/hotel/Reservation';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const routes = [
  { path: '/', component: HotelCard },
  { path: '/hotel/:id', component: HotelDetail },
  { path: '/hotel/:id/reservation', component: Reservation },
  { path: '*', redirect: '/' },
];

export const router = new VueRouter({
  routes,
  mode: 'history', // hash default
});
