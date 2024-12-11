import { defineStore } from "pinia";
import UserService from "@/service/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    filteredUsers: [],
    currentUser: null,
  }),

  actions: {
    async buscarTodosOsUsers(tipo = 2) {
      try {
        const userService = new UserService();
        const users = await userService.buscarTodosOsUsers(tipo);
        this.users = users;
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      }
    },

    async buscarUserPorCategoria(categoriaId) {
      try {
        const userService = new UserService();
        const users = await userService.buscarUsersPorCategoria(categoriaId);
        this.filteredUsers = users;
      } catch (error) {
        console.error("Erro ao buscar usuários por categoria:", error);
      }
    },

    async adicionarUsuario(usuario) {
      try {
        const userService = new UserService();
        const novoUsuario = await userService.adicionarUsuario(usuario);
        this.users.push(novoUsuario);
        if (this.filteredUsers.length && novoUsuario.categoriaId === this.filteredUsers[0]?.categoriaId) {
          this.filteredUsers.push(novoUsuario);
        }
      } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
      }
    },

    async atualizarUsuario(usuario) {
      try {
        const userService = new UserService();
        const usuarioAtualizado = await userService.atualizarUsuario(usuario);
        const index = this.users.findIndex((user) => user.id === usuario.id);
        if (index !== -1) {
          this.users[index] = usuarioAtualizado;
        }
        const filteredIndex = this.filteredUsers.findIndex((user) => user.id === usuario.id);
        if (filteredIndex !== -1) {
          this.filteredUsers[filteredIndex] = usuarioAtualizado;
        }
      } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
      }
    },

    async excluirUsuario(id) {
      try {
        const userService = new UserService();
        await userService.excluirUsuario(id);
        this.users = this.users.filter((user) => user.id !== id);
        this.filteredUsers = this.filteredUsers.filter((user) => user.id !== id);
      } catch (error) {
        console.error("Erro ao excluir usuário:", error);
      }
    },
  },
});
