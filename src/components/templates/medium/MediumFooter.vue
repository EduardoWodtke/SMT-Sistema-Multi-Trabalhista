<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useCategoriaStore } from '@/stores/categoria'

const servicos = ref(false)
const categoriaStore = useCategoriaStore()

const clickHamburguer = () => {
  servicos.value = !servicos.value
}

onBeforeRouteUpdate(() => {
  servicos.value = false
})

onMounted(async () => {
  categoriaStore.buscarTodasAsCategorias()
})
</script>
<template>
  <footer>
    <div class="icones">
      <router-link to="Login"> <i class="mdi mdi-account-outline"></i> </router-link>
      <router-link to="/"> <i class="mdi mdi-home-outline"></i> </router-link>
      <Menu @click="clickHamburguer()" class="mdi mdi-menu" size="5vh" />
    </div>
  </footer>
  <div v-if="servicos" class="hamburguer">
    <div class="xis">
      <button
        class="butao mdi mdi-alpha-x"
        style="font-size: 8vh"
        @click="clickHamburguer()"
      ></button>
    </div>
    <p v-for="categoria in categoriaStore.categorias" :key="categoria.id">
      {{ categoria.nome }}
    </p>
  </div>
</template>
<style scoped>
/* Reseta estilos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Botão de menu */
button {
  display: flex;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
}

/* Estilo do menu hamburguer */
.hamburguer {
  background-color: #00173d;
  width: 40%;
  text-align: end;
  padding-right: 4vh;
  bottom: 15%;
  right: 0;
  display: flex;
  position: fixed;
  font-size: 3vh;
  flex-direction: column;
  border: black 0.5vh solid;
  z-index: 1000;
}

/* Estilo do rodapé */
footer {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  bottom: 0;
  border: #00173d solid 5px;
  background-color: black;
  padding: 15px;
  text-align: center;
  z-index: 999;
}

.icones {
  display: flex;
  justify-content: space-around;
  font-size: 6.5vh;
  width: 70vh;
}


@media (max-width: 768px) {
  .hamburguer {
    width: 60%; 
    padding-right: 2vh;
    font-size: 2.5vh; 
  }

  footer {
    padding: 10px; 
    flex-direction: column; 
  }

  .icones {
    width: 100%; 
    font-size: 5vh; 
    justify-content: space-between; 
    padding: 0 15px;

  button {
    font-size: 6vh; 
  }
}
}
</style>
