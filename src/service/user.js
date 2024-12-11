import axios from "axios";

export default class UserService {
  async buscarTodosOsUsers(tipo = 2) {
    const { data } = await axios.get(`/usuarios/?tipo=${tipo}`);
    return data.results; 
  }

  async buscarUsersPorCategoria(categoriaId) {
    const { data } = await axios.get(`/usuarios/?categoriaId=${categoriaId}`);
    return data.results;
  }

  async adicionarUsuario(usuario) {
    const { data } = await axios.post("/usuarios/", usuario);
    return data;
  }

  async atualizarUsuario(usuario) {
    const { data } = await axios.put(`/usuarios/${usuario.id}/`, usuario);
    return data;
  }
  async excluirUsuario(id) {
    await axios.delete(`/usuarios/${id}/`);
    return { success: true }; 
  }
}
