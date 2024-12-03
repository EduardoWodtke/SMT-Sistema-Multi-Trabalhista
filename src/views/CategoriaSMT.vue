<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' // Para acessar os parâmetros da rota
import { useCategoriaStore } from '@/stores/categoria'

const route = useRoute() // Usando o Vue Router para acessar os parâmetros da rota
const categoriaStore = useCategoriaStore() // Usando a store de categorias
const categoria = ref({}) // Variável para armazenar os dados da categoria

onMounted(async () => {
  const categoriaId = route.params.id // Pega o ID da categoria da URL
  await categoriaStore.buscarCategoriaPorId(categoriaId) // Chama a store para buscar a categoria
  categoria.value = categoriaStore.categoria // Atribui os dados da categoria à variável local
})
</script>
<template>
  <div class="container">
    <h1>Hello word</h1>
    <h1>Categoria: {{ categoria.nome }}</h1>
    <p>{{ categoria.descricao }}</p>
    <!-- Exiba mais informações da categoria aqui -->
  </div>
</template>
<style>
.container {
  min-height: 65vh;
  cursor: pointer;
}
h1 {
  color: black;
}
/* tablet */
@media screen and (max-width: 1024px) {
}
/* celular */
@media screen and (max-width: 430px) {
}
</style>
