import axios from 'axios';

export default class TrabalhoService {
  async buscarTodosOsTrabalhos() {
    const response = await axios.get('/trabalhos/');
    return response.data.results;
  }
}