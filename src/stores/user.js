import { ref } from 'vue';
import { defineStore } from 'pinia';
import UserService from '@/service/user';

const userService = new UserService();

export const useUserStore = defineStore('user', () => {
  const users = ref([]);
  const filteredUsers = ref([]);
  const currentUser = ref(null);

  async function buscarTodosOsUsers(tipo = 2) {
    try {
      users.value = await userService.buscarTodosOsUsers(tipo);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }

  async function buscarUsersPorCategoria(categoriaId) {
    try {
      filteredUsers.value = await userService.buscarUsersPorCategoria(categoriaId);
    } catch (error) {
      console.error('Erro ao buscar usuários por categoria:', error);
    }
  }

  async function adicionarUsuario(usuario) {
    try {
      const novoUsuario = await userService.adicionarUsuario(usuario);
      users.value.push(novoUsuario);

      if (
        filteredUsers.value.length &&
        novoUsuario.categoriaId === filteredUsers.value[0]?.categoriaId
      ) {
        filteredUsers.value.push(novoUsuario);
      }
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  }

  async function atualizarUsuario(usuario) {
    try {
      const usuarioAtualizado = await userService.atualizarUsuario(usuario);

      const index = users.value.findIndex((user) => user.id === usuario.id);
      if (index !== -1) {
        users.value[index] = usuarioAtualizado;
      }

      const filteredIndex = filteredUsers.value.findIndex(
        (user) => user.id === usuario.id
      );
      if (filteredIndex !== -1) {
        filteredUsers.value[filteredIndex] = usuarioAtualizado;
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  }

  async function excluirUsuario(id) {
    try {
      await userService.excluirUsuario(id);

      users.value = users.value.filter((user) => user.id !== id);
      filteredUsers.value = filteredUsers.value.filter((user) => user.id !== id);
    } catch (error) {
      console.error('Erro ao excluir usuário:', error);
    }
  }

  return {
    users,
    filteredUsers,
    currentUser,
    buscarTodosOsUsers,
    buscarUsersPorCategoria,
    adicionarUsuario,
    atualizarUsuario,
    excluirUsuario,
  };
});
