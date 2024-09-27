import { ref } from 'vue';
import { defineStore } from 'pinia';

import UserService from '@/service/user';
const userService = new UserService();

export const useUserStore = defineStore('user', () => {
  const users = ref([]);

  async function buscarTodosOsUsers() {
    users.value = await userService.buscarTodosOsUsers();
  }

  return { users, buscarTodosOsUsers };
});