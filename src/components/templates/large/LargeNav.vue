<script setup>
import { ref } from 'vue'

// const isPrestador = ref(false)

const servicos = ref(false)

const clickHamburguer = () => {
  servicos.value = !servicos.value
}
</script>
<template>
  <nav>
    <div id="info" :class="servicos" ? >
      <div v-if="servicos" @click="clickHamburguer()">
        <button class="butao mdi mdi-alpha-x"></button>
      </div>
      <Menu v-else @click="clickHamburguer()" class="mdi mdi-menu" size="5vh"/>
      <ul>
        <!-- <template v-if> -->
          <router-link to="Ranking" class="underline">
            <li>Ranking</li>
          </router-link>
          <router-link to="Chat" class="underline">
            <li>Bate-papo</li>
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
        <!-- </template> -->
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
