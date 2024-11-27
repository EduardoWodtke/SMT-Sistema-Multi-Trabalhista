import { defineStore } from "pinia";
import UserService from "@/service/user"; // Importe o UserService

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [], // Lista de usuários
    currentUser: null, // Usado para armazenar o usuário logado
  }),

  actions: {
    // Buscar todos os usuários através do UserService
    async buscarTodosOsUsers(tipo = 2) {
      try {
        const userService = new UserService(); // Instancia o UserService
        const users = await userService.buscarTodosOsUsers(tipo); // Chama o método buscarTodosOsUsers
        this.users = users; // Armazena os usuários no estado da store
      } catch (error) {
        console.error("Erro ao buscar usuários:", error); // Tratamento de erro
      }
    },

    // Adicionar um novo usuário
    async adicionarUsuario(usuario) {
      try {
        const userService = new UserService(); // Instancia o UserService
        const novoUsuario = await userService.adicionarUsuario(usuario); // Chama o método para adicionar usuário
        this.users.push(novoUsuario); // Adiciona o novo usuário à lista de usuários
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error); // Tratamento de erro
      }
    },

    // Atualizar um usuário
    async atualizarUsuario(usuario) {
      try {
        const userService = new UserService(); // Instancia o UserService
        const usuarioAtualizado = await userService.atualizarUsuario(usuario); // Chama o método para atualizar usuário
        const index = this.users.findIndex((user) => user.id === usuario.id);
        if (index !== -1) {
          this.users[index] = usuarioAtualizado; // Atualiza o usuário na lista
        }
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error); // Tratamento de erro
      }
    },

    // Excluir um usuário
    async excluirUsuario(id) {
      try {
        const userService = new UserService(); // Instancia o UserService
        await userService.excluirUsuario(id); // Chama o método para excluir usuário
        this.users = this.users.filter((user) => user.id !== id); // Remove o usuário da lista de usuários
      } catch (error) {
        console.error("Erro ao excluir usuário:", error); // Tratamento de erro
      }
    },
  },
});
