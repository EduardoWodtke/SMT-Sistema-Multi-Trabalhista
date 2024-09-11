import axios from 'axios';

export default class UserService {
  async buscarTodosOsUsers() {
    const response = await axios.get('/users/');
    return response.data.results;
  }
}