import { ref } from 'vue';
import { defineStore } from 'pinia';

import TrabalhoService from '@/service/trabalho';
const trabalhoService = new TrabalhoService();

export const useTrabalhoStore = defineStore('trabalho', () => {
  const trabalhos = ref([]);

  async function buscarTodosOsTrabalhos() {
    trabalhos.value = await trabalhoService.buscarTodosOsTrabalhos();
  }

  return { trabalhos, buscarTodosOsTrabalhos };
});