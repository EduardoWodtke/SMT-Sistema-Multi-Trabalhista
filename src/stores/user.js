import { defineStore } from 'pinia';
import UserService from '@/service/user'; // Importe o UserService

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [], // Lista de trabalhadores
    currentUser: null, // Usado para armazenar o usuário logado (opcional)
  }),
  actions: {
    // Buscar todos os usuários através do UserService
    async buscarTodosOsUsers(tipo = 2) {
      try {
        const userService = new UserService(); // Cria uma instância do UserService
        const users = await userService.buscarTodosOsUsers(tipo); // Chama o método do serviço
        this.users = users; // Armazena os usuários no estado da store
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Trata o erro caso ocorra
      }
    },

    // Ação para salvar um novo usuário
    async salvarUsuario(usuario) {
      try {
        const userService = new UserService(); // Cria uma instância do UserService
        const savedUser = await userService.salvarUsuario(usuario); // Chama o método para salvar
        this.users.push(savedUser); // Adiciona o usuário salvo à lista de usuários na store
        this.currentUser = savedUser; // Opcional: Armazena o usuário atual se necessário
      } catch (error) {
        console.error("Erro ao salvar usuário:", error); // Trata o erro caso ocorra
      }
    }
  },
});
