  <script setup>
// import { useRouter } from 'vue-router';

// const router = useRouter()
</script>
<template>
  <nav>
    <div class="info">
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
nav{
  background-color: black;
  display: flex;
  justify-content: space-around;
}

.underline {
  text-decoration: none;
}
.mdi {
  font-size: 5vh;
}

ul {
  display: flex;
  flex-direction: row;
}

li {
  text-align: center;
  padding: 0 4vh;
  list-style: none;
  font-size: 2vh;
}
</style>
