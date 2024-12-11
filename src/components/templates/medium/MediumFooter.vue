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
button {
  display: flex;
  position: relative;
  background: none;
  border: none;
}

.hamburguer {
  background-color: #00173d;
  width: 40%;
  text-align: end;
  padding-right: 2vh;
  bottom: calc(5vh + 20px); 
  right: 0;
  display: flex;
  position: fixed;
  font-size: 3vh;
  flex-direction: column;
  border: black 0.5vh solid;
  margin: 0; 

* {
  margin: 0;
}
}
footer {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  bottom: 0;
  border: #00173d solid 5px;
  background-color: black;
  padding: 20px;
  text-align: center;
}

.icones {
  display: flex;
  justify-content: space-around;
  font-size: 6.5vh;
  width: 70vh;
}


@media screen and (max-width: 1024px) {
  .hamburguer {
    width: 60%;
    font-size: 2.5vh;
    padding-right: 2vh;
    bottom: calc(5vh + 10px); 
  }

  footer {
    padding: 10px;
    font-size: 5vh;
  }

  .icones {
    width: 90%;
    font-size: 5vh;
  }

  button {
    font-size: 6vh;
  }
}
</style>

