import { ref } from 'vue';
import { defineStore } from 'pinia';
import CategoriaService from '@/service/categoria';

const categoriaService = new CategoriaService();

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([]);  // Lista de todas as categorias
  const categoria = ref(null);  // Categoria específica (para buscar por ID)

  // Função para buscar todas as categorias
  async function buscarTodasAsCategorias() {
    categorias.value = await categoriaService.buscarTodasAsCategorias();
  }

  // Função para buscar uma categoria específica por ID
  async function buscarCategoriaPorId(id) {
    categoria.value = await categoriaService.buscarCategoriaPorId(id);  // Assumindo que o serviço retorna uma categoria
  }

  return { categorias, categoria, buscarTodasAsCategorias, buscarCategoriaPorId };
});
