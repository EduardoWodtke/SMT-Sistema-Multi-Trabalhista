import axios from 'axios';

export default class TrabalhoHistoricoService {
  async buscarTodosOsTrabalhosHistoricos() {
    const response = await axios.get('/trabalhoshistorico/');
    return response.data.results;
  }
}