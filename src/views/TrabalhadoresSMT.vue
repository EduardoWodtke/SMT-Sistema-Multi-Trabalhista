<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

onMounted(async () => {
  userStore.buscarTodosOsUsers()
})
</script>
<template>
  <div class="pesquisa">
    <input type="search" placeholder="Procurar trabalhadores">
  </div>
  <h1>Trabalhadores</h1>
  <div id="container">
    <div v-for="user in userStore.users" :key="user.id" class="trabalhador">
      <div class="bolinha">
        <img src="@/assets/teste-perfil.jpg" alt="foto do usuário" class="user-foto" />
      </div>
      <div class="info">
        <p>{{ user.name }}</p>
        <button>Contratar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1{
  color: black;
  text-align: center;
  font-size: 5vh;
}
.pesquisa{
  display: flex;
  justify-content: center;
  margin: 2vh;
  input{
    text-align: center;
    border: 1px solid black;
    width: 35%;
    color: black;
    height: 4vh;
    font-size: 2vh;
  }
}
button {
  height: 5vh;
  font-size: 3vh;
  text-align: center;
  border: 1px black solid;
  width: 20vh;
  margin: 2vh;
  background-color: rgb(0, 23, 61);
}
.user-foto {
  width: 100%;
}
.info {
  font-size: 3vh;
  display: flex;
  flex-direction: column;
  button:hover {
    background-color: #252525;
  }
  p {
    color: black;
    margin: 2vh;
  }
}

#container {
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  min-height: 67vh;
  justify-content: space-around;
}
.trabalhador {
  display: flex;
  width: 50vh;
  flex-direction: column;
  border: 1px rgb(158, 158, 158) solid;
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
  #container {
    display: flex;
    flex-direction: column;
    margin: 0 0 40% 0;
  }
  .bolinha {
    width: 15vh;
    background-color: pink;
  }
  .trabalhador {
    margin: 5% 0 2% 0;
    width: 40vh;
    height: 15vh;
  }
}
</style>
