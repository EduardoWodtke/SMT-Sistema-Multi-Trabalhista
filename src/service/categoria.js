import axios from 'axios';

export default class CategoriaService {
  async buscarTodasAsCategorias() {
    const response = await axios.get('/categorias/');
    return response.data.results;
  }
  async buscarCategoriaPorId(id) {
    const response = await axios.get(`/categorias/${id}`);  // Aqui você busca uma categoria específica pelo ID
    return response.data;
  }
}