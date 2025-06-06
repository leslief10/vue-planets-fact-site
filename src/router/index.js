import { createRouter, createWebHistory } from 'vue-router';
import PlanetView from '../views/PlanetView.vue';

const routes = [
  {
    path: '/',
    redirect: '/mercury',
  },
  {
    path: '/:planet',
    name: 'planet',
    component: PlanetView,
  },
];

const router = createRouter({
  history: createWebHistory('/planets-facts/'),
  routes,
});

export default router;
