import axios from 'axios';

export default class UserService {
  async buscarTodosOsUsers() {
    const response = await axios.get('/usuarios/?tipo=2');
    return response.data.results;
  }
}