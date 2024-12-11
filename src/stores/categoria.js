import { ref } from 'vue';
import { defineStore } from 'pinia';
import CategoriaService from '@/service/categoria';

const categoriaService = new CategoriaService();

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([]); 
  const categoria = ref(null); 

  async function buscarTodasAsCategorias() {
    categorias.value = await categoriaService.buscarTodasAsCategorias();
  }

  async function buscarCategoriaPorId(id) {
    categoria.value = await categoriaService.buscarCategoriaPorId(id); 
  }

  return { categorias, categoria, buscarTodasAsCategorias, buscarCategoriaPorId };
});
