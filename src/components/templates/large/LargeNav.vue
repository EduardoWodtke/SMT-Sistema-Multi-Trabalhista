<script setup>
import { ref, onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
import { useCategoriaStore } from '@/stores/categoria'

const servicos = ref(false)
const categoriaStore = useCategoriaStore()

const clickHamburguer = () => {
  servicos.value = !servicos.value
}
function closeHamburguer() {
  servicos.value = false
  document.getElementById('fechar').classList.remove('hamburguer').classList.add('close')
}

onBeforeRouteUpdate(() => {
  servicos.value = false
})

onMounted(async () => {
  categoriaStore.buscarTodasAsCategorias()
})
</script>
<template>
  <nav>
    <div id="info">
      <div v-if="servicos" class="hamburguer" id="fechar">
        <div class="logox">
          <img src="@/assets/logo.png" alt="" />
          <button class="butao mdi mdi-alpha-x" style="font-size: 10vh" @click="closeHamburguer()"></button>
        </div>
        <p v-for="categoria in categoriaStore.categorias" :key="categoria.id">
          {{ categoria.nome }}
        </p>
      </div>
      <Menu @click="clickHamburguer()" class="mdi mdi-menu" size="5vh" />
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

      <!-- <template v-else="isPrestador">
        <button  @click="isPrestador = !isPrestador"></button>
        <router-link to="/" class="underline">
          <li>Ranking trabalhador</li>
        </router-link>
        <router-link to="/" class="underline">
          <li>Bate-papo</li>
        </router-link>
        <router-link to="/" class="underline">
          <li>Trabalhadores</li>
        </router-link>
        <router-link to="/" class="underline">
          <li>Histórico</li>
        </router-link>
        <router-link to="/" class="underline">
          <li>Favoritos</li>
        </router-link>
      </template> -->
    </div>
  </nav>
</template>
<style scoped>
@keyframes closeAnimation {
  0% {
    left: 0%;
  }

  50% {
    left: 0%;
  }

  100% {
    left: -20%;
  }
}

@keyframes hamburguer {
  0% {
    left: -20%;
  }

  50% {
    left: 0%;
  }

  100% {
    left: 0%;
  }
}

.logox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -2vh;
}

.logox img {
  width: 12vh;
}

p {
  text-shadow: gray 3px 3px 5px;
}

.butao {
  display: flex;
  position: relative;
  background: none;
  border: none;
  padding-right: 3vh;
  top: 1vh;
}

.close {
  animation: closeAnimation 0.5s forwards;
}

.hamburguer {
  display: block;
  background-color: #00173d;
  position: fixed;
  padding-left: 5vh;
  width: 20%;
  line-height: 280%;
  border: solid black 3px;
  font-size: 3vh;
  box-shadow: rgb(29, 29, 29) 3px 4px 10px;
  top: 0;
  height: 100%;
  animation: hamburguer 2s;
}

.underline {
  text-decoration: none;
}

#info {
  display: flex;
  flex-direction: row;
  background-color: black;
  width: 100%;
  align-items: center;
  height: 35px;
  margin-top: 0;
}

.mdi {
  padding-top: 0.3%;
  font-size: 5vh;
}

ul {
  display: flex;
  flex-direction: row;
  margin-left: 5%;
}

li {
  font-size: 2vh;
  text-align: center;
  padding: 0 14vh;
  list-style: none;
}
</style>
