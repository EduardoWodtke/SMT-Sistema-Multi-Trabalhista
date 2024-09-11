<script setup>
import { useTrabalhoStore } from '@/stores/trabalho'
import { onMounted } from 'vue'

const trabalhoStore = useTrabalhoStore(
    onMounted(async () => {
  trabalhoStore.buscarTodasAsTrabalhos()
}))
</script>
<template>
  <p v-for="trabalho in trabalhoStore.trabalhos" :key="trabalho.id">
    {{ trabalho.nome }}
  </p>
</template>
