import { ref } from 'vue';
import { defineStore } from 'pinia';

import UserService from '@/service/user';
const userService = new UserService();

export const useUserStore = defineStore('user', () => {
  const user = ref([]);

  async function buscarTodasAsUsers() {
    user.value = await userService.buscarTodosOsUsers();
  }

  return { user, buscarTodasAsUsers };
});