
<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(async () => {
  userStore.buscarTodosOsUsers()
})
</script>
<template>
  <div id="container">
    <div v-for="user in userStore.users" :key="user.id" class="trabalhador">
      <div class="bolinha">{{ user.foto }}</div>
      <div class="info">
        <p>{{ user.name }}</p>
        <p>{{ user.categoria }}</p>
        <p>{{ user.nota }}</p>
      </div>
    </div>
    <div v-for="user in userStore.users" :key="user.id" class="trabalhador">
      <div class="bolinha">{{ user.foto }}</div>
      <div class="info">
        <p>{{ user.name }}</p>
        <p>{{ user.categoria }}</p>
        <p>{{ user.nota }}</p>
      </div>
    </div>
    <div v-for="user in userStore.users" :key="user.id" class="trabalhador">
      <div class="bolinha">{{ user.foto }}</div>
      <div class="info">
        <p>{{ user.name }}</p>
        <p>{{ user.categoria }}</p>
        <p>{{ user.nota }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.info {
  font-size: 3vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}
#container {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  margin: 5vh;
}
.trabalhador {
  background-color: #00173d;
  width: 54vh;
  text-align: center;
  margin: 3vh;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 5vh;
  border-bottom-left-radius: 10vh;
  border-top-left-radius: 10vh;
  border-top-right-radius: 1vh;
  border-bottom-right-radius: 1vh;
  border: 3px black solid;
  box-shadow: 10px 10px 40px black;
}
.bolinha {
  background-color: rgb(0, 255, 13);
  border: 1px solid black;
  width: 20vh;
  border-radius: 20vh;
}

@media screen and (max-width: 1024px) {
  #container {
    display: grid;
    grid-template-columns: auto auto;
    margin: 0 0 25% 0;
  }
  .trabalhador {
    width: 30vh;
    height: 15vh;
    margin: 3vh 0 0vh 8%;
    font-size: 3vh;
  }
  .bolinha {
    width: 15vh;
    background-color: red;
  }
}

@media screen and (max-width: 430px) {
  #container{
    display: flex;
    flex-direction: column;
    margin: 0 0 40% 0;
  }
  .bolinha{
    width: 15vh;
    background-color: pink;
  }
  .trabalhador{
    margin: 5% 0 2% 0;
    width: 40vh;
    height: 15vh;
  }
}
</style>