<script setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const servicos = ref(false)

const clickHamburguer = () => {
  servicos.value = !servicos.value
}

onBeforeRouteUpdate(() => {
  servicos.value = false
})
</script>
<template>
  <nav>
    <div id="info">
      <div v-if="servicos" class="hamburguer">
        <p>Limpador de vidro</p>
        <p>Engenheiro</p>
        <p>Encanador</p>
        <p>Eletricista</p>
        <p>Jardineiro</p>
        <p>Arquiteto</p>
        <p>Pedreiro</p>
        <p>Diarista</p>
        <p>Pintor</p>
        <p>Baba</p>
        <div>
          <button class="butao mdi mdi-alpha-x" @click="clickHamburguer()"></button>
        </div>
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
p {
  text-shadow: gray 3px 3px 5px;
}
.butao {
  display: flex;
  font-size: 5vh;
  position: relative;
  background: none;
  border: none;
  left: 20vh;
  bottom: 1vh;
}
.hamburguer {
  display: block;
  background-color: #00173d;
  position: absolute;
  padding: 2vh 0 0 3vh;
  width: 15%;
  line-height: 6vh;
  bottom: 21%;
  border: solid black 3px;
  font-size: 3vh;
  box-shadow: rgb(29, 29, 29) 3px 4px 10px;
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
  margin-left: 10.05vh;
}

li {
  font-size: 2vh;
  text-align: center;
  padding: 0 14vh;
  list-style: none;
}
</style>
