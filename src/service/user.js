import axios from 'axios';

export default class UserService {
  async buscarTodosOsUsers() {
    const response = await axios.get('/usuarios/');
    return response.data.results;
  }
}