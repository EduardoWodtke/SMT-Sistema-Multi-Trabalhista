import axios from 'axios';

export default class CategoriaService {
  async buscarTodasAsCategorias() {
    const response = await axios.get('/categorias/');
    return response.data.results;
  }
}