<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useCategoriaStore } from '@/stores/categoria'

const menu = ref(false)
const servicos = ref(false)
const categoriaStore = useCategoriaStore()

const clickServicos = () => {
  servicos.value = !servicos.value
}

const clickHamburguer = () => {
  menu.value = !menu.value
}

onBeforeRouteUpdate(() => {
  menu.value = false
})

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
  <div v-if="menu" class="menu">
    <div class="logox">
      <img src="@/assets/logo.png" alt="" />
      <button
        class="butao mdi mdi-alpha-x"
        style="font-size: 10vh"
        @click="clickHamburguer()"
      ></button>
    </div>
    <ul>
      <router-link to="Ranking" class="underline">
        <li>Ranking</li>
      </router-link>
      <router-link to="Chat" class="underline">
        <li>Conversas</li>
      </router-link>
      <router-link to="Trabalhadores" class="underline">
        <li>Trabalhadores</li>
      </router-link>
      <router-link to="Historico" class="underline">
        <li>Histórico</li>
      </router-link>
      <router-link to="Favoritos" class="underline">
        <li>Favoritos</li>
      </router-link>
    </ul>
  </div>
  <div v-if="servicos" class="servicos">
    <div class="logox">
      <img src="@/assets/logo.png" alt="" />
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
li{
  list-style: none;
  line-height: 330%;
}
.underline{
  text-decoration: none;
}
.menu {
  background-color: #00173d;
  font-size: 5vh;
  top: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  padding-left: 5vh;
}
.logox {
  display: flex;
  flex-direction: row;
}
.logox img {
  width: 15vh;
  height: 15vh;
}
button {
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
