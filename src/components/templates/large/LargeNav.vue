<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
  <nav>
    <div class="info">
      <Menu class="mdi mdi-menu" size="5vh" />
      <ul>
        <router-link to="/">
          <li>Ranking</li>
        </router-link>
        <router-link>
          <li>Suporte</li>
        </router-link>
        <router-link>
          <li>Perguntas</li>
        </router-link>
        <router-link>
          <li>Histórico</li>
        </router-link>
        <router-link>
          <li>Favoritos</li>
        </router-link>
        <router-link>
          <li>Configurações</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  align-items: center;
  height: 35px;
  margin-top: 0;
  font-family: "Ubuntu", sans-serif;
}

.mdi {
  padding-top: 0.3%;
  font-size: 5vh;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  font-size: 2vh;
  text-align: center;
  padding: 0 10vh;
  list-style: none;
}
</style>