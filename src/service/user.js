import axios from 'axios';

export default class UserService {
  // Método para buscar todos os usuários com base no tipo
  async buscarTodosOsUsers(tipo = 2) {
    try {
      const response = await axios.get(`/usuarios/?tipo=${tipo}`);
      return response.data.results; // Retorna os resultados
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      throw error; // Lança o erro para ser tratado na store
    }
  }

  // Método para salvar ou criar um novo usuário
  async salvarUsuario(usuario) {
    try {
      const response = await axios.post('/usuarios/', usuario); // Envia os dados do usuário para o backend
      return response.data; // Retorna os dados da resposta
    } catch (error) {
      console.error("Erro ao salvar usuário:", error);
      throw error; // Lança o erro para ser tratado na store
    }
  }
}
