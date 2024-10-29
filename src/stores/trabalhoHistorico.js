import { ref } from 'vue';
import { defineStore } from 'pinia';

import TrabalhoHistoricoService from '@/service/trabalhoHistorico';
const trabalhoHistoricoService = new TrabalhoHistoricoService();

export const useTrabalhoHistoricoStore = defineStore('trabalhoHistorico', () => {
  const trabalhosHistoricos = ref([]);

  async function buscarTodosOsTrabalhosHistoricos() {
    trabalhosHistoricos.value = await trabalhoHistoricoService.buscarTodosOsTrabalhosHistoricos();
  }

  return { trabalhosHistoricos, buscarTodosOsTrabalhosHistoricos };
});