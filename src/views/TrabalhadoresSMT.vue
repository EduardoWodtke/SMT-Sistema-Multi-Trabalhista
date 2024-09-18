
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
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <div class="trabalhador">
      <div class="bolinha">IMG</div>
      <p>Nome</p>
    </div>
    <p v-for="user in userStore.users" :key="user.id" class="user">
      {{ user.nome }}
    </p>
  </div>
</template>

<style scoped>
.user {
  font-size: 500vh;
  background-color: #00173d;
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
  font-size: 5vh;
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
  box-shadow: 5px 5px 20px black;
}
.bolinha {
  background-color: yellow;
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