import axios from "axios";

export default class UserService {
  // Método para buscar todos os usuários
  async buscarTodosOsUsers(tipo = 2) {
    const { data } = await axios.get(`/usuarios/?tipo=${tipo}`);
    return data.results;
  }

  // Método para adicionar um novo usuário
  async adicionarUsuario(usuario) {
    const { data } = await axios.post("/usuarios/", usuario);
    return data.results; // Retorna os dados do usuário adicionado
  }

  // Método para atualizar um usuário existente
  async atualizarUsuario(usuario) {
    const { data } = await axios.put(`/usuarios/${usuario.id}/`, usuario);
    return data.results; // Retorna os dados do usuário atualizado
  }

  // Método para excluir um usuário
  async excluirUsuario(id) {
    const { data } = await axios.delete(`/usuarios/${id}/`);
    return data.results; // Retorna os dados do usuário excluído
  }
}
