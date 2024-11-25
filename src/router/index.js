import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeSMT.vue'),
    },
    {
      path: '/',
      component: LayoutFull,
      children: [
        {
          path: 'Ranking',
          name: 'Ranking',
          component: () => import('@/views/RankingSMT.vue'),
        },
        {
          path: 'Chat',
          name: 'Chat',
          component: () => import('@/views/ChatSMT.vue'),
        },
        {
          path: 'Historico',
          name: 'Historico',
          component: () => import('@/views/HistoricoSMT.vue'),
        },
        {
          path: 'Trabalhadores',
          name: 'Trabalhadores',
          component: () => import('@/views/TrabalhadoresSMT.vue'),
        },
        {
          path: 'Login',
          name: 'Login',
          component: () => import('@/views/LoginSMT.vue'),
        },
        {
          path: 'Register',
          name: 'Register',
          component: () => import('@/views/RegisterSMT.vue'),
        },
        {
          path: 'Logout',
          name: 'Logout',
          component: () => import('@/views/LogoutSMT.vue'),
        },
        {
          path: 'Perfil',
          name: 'Perfil',
          component: () => import('@/views/PerfilSMT.vue'),
        },
      ],
    },
  ],
});

export default router;
