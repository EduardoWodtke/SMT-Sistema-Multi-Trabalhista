import axios from "axios";

export default class UserService {
  // Método para buscar todos os usuários
  async buscarTodosOsUsers(tipo = 2) {
    const { data } = await axios.get(`/usuarios/?tipo=${tipo}`);
    return data.results; // Certifique-se de que a API retorna `results` ou ajuste para `data` se necessário
  }

  // Método para buscar usuários por categoria
  async buscarUsersPorCategoria(categoriaId) {
    const { data } = await axios.get(`/usuarios/?categoriaId=${categoriaId}`);
    return data.results; // Certifique-se de que a API retorna os dados no formato esperado
  }

  // Método para adicionar um novo usuário
  async adicionarUsuario(usuario) {
    const { data } = await axios.post("/usuarios/", usuario);
    return data; // Geralmente, a API retorna o usuário adicionado diretamente
  }

  // Método para atualizar um usuário existente
  async atualizarUsuario(usuario) {
    const { data } = await axios.put(`/usuarios/${usuario.id}/`, usuario);
    return data; // Retorna os dados do usuário atualizado
  }

  // Método para excluir um usuário
  async excluirUsuario(id) {
    await axios.delete(`/usuarios/${id}/`);
    return { success: true }; // Não há necessidade de retornar `data.results` após um DELETE
  }
}
