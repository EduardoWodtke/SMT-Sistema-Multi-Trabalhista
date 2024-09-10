<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useCategoriaStore } from '@/stores/categoria'

const servicos = ref(false)
const categoriaStore = useCategoriaStore()

const clickServicos = () => {
  servicos.value = !servicos.value
}

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
      <router-link to="Login"> <i class="mdi mdi-account-outline"></i></router-link>
      <router-link to="/"><i class="mdi mdi-home-outline"></i></router-link>
      <Menu @click="clickServicos()" class="mdi mdi-hammer-wrench" size="5vh" />
      <Menu @click="clickHamburguer()" class="mdi mdi-menu" size="5vh" />
    </div>
  </footer>
  <div v-if="servicos" class="servicos">
    <div class="logox">
        <img src="@/assets/logo.png" alt="">
      <button
        class="butao mdi mdi-alpha-x"
        style="font-size: 10vh"
        @click="clickServicos()"
      ></button>
    </div>
    <p v-for="categoria in categoriaStore.categorias" :key="categoria.id">
      {{ categoria.nome }}
    </p>
  </div>
</template>
<style scoped>
.logox{
    display: flex;
    flex-direction: row;
}
.logox img{
    width: 15vh;
    height: 15vh;
}
button{
    background: none;
    border: none;
    padding-left: 30%;
}
.servicos {
  width: 100%;
  background-color: #00173d;
  height: 100%;
  position: fixed;
  font-size: 5vh;
  padding-left: 5vh;
  bottom: 0;
}
footer {
  display: flex;
  position: fixed;
  width: 100%;
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
  width: 50vh;
}
</style>
