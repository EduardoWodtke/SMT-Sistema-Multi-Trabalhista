import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeSMT.vue'),
        },
        {
          path: '',
          name: 'Ranking',
          component: () => import('@/views/RankingSMT.vue'),
        },
        {
          path: '',
          name: 'Chat',
          component: () => import('@/views/ChatSMT.vue'),
        },
        {
          path: '',
          name: 'Favoritos',
          component: () => import('@/views/FavoritosSMT.vue'),
        },
        {
          path: '',
          name: 'Historico',
          component: () => import('@/views/HistoricoSMT.vue'),
        },
        {
          path: '',
          name: 'Trabalhadores',
          component: () => import('@/views/TrabalhadoresSMT.vue'),
        },
      ],
    },
  ],
});

export default router;