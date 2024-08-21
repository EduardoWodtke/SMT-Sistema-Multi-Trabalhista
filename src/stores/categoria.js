import { ref } from 'vue';
import { defineStore } from 'pinia';

import CategoriaService from '@/service/categoria';
const categoriaService = new CategoriaService();

export const useCategoriaStore = defineStore('categoria', () => {
  const categorias = ref([]);

  async function buscarTodasAsCategorias() {
    categorias.value = await categoriaService.buscarTodasAsCategorias();
  }

  return { categorias, buscarTodasAsCategorias };
});