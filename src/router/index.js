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
  history: createWebHistory('/vue-planets-fact-site/'),
  routes,
});

window.addEventListener('load', function() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('p')) {
    const redirectPath = params.get('p');
    window.history.replaceState(null, null, '/vue-planets-fact-site' + redirectPath);
    router.push(redirectPath);
  }
});

export default router;
