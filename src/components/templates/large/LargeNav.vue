<script setup>
// import { useRouter } from 'vue-router';

// const router = useRouter()
</script>
<template>
  <nav>
    <div class="info">
      <Menu class="mdi mdi-menu" size="5vh" />
      <ul>
        <router-link to="/" class= "underline">
          <li>Ranking</li>
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
      </ul>
    </div>
  </nav>
</template>
<style scoped>
.underline {
  text-decoration: none;
}
.info {
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
}

li {
  font-size: 2vh;
  text-align: center;
  padding: 0 15vh;
  list-style: none;
}
</style>
