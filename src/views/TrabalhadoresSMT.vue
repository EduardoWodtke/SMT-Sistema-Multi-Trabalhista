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
      <div class="bolinha">
        <img :src="user.foto" alt="foto do usuário" class="user-foto" />
      </div>
      <div class="info">
        <p>{{ user.name }}</p>
        <p>{{ user.categoria }}</p>
        <p>{{ user.email }}</p>
        <p>{{ user.nota }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bolinha {
  border: 5px solid black;
  width: 19vh;
  height: 19vh;
  border-radius: 20vh;
}
.user-foto {
  height: 18vh;   
  width: 17.7vh;
  border-radius: 20vh;
  padding: 0;
}

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
  min-height: 56vh;
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
  border-top: 3px black solid;
  border-right: 3px black solid;
  border-bottom: 3px black solid;
  box-shadow: 10px 10px 40px black;
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
