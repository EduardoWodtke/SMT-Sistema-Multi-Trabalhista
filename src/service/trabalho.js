import axios from 'axios';

export default class TrabalhoService {
  async buscarTodasAsTrabalhos() {
    const response = await axios.get('/trabalhos/');
    return response.data.results;
  }
}