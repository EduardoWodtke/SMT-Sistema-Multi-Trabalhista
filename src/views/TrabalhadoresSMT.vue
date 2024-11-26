<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

onMounted(async () => {
  await userStore.buscarTodosOsUsers(2);
});
</script>
<template>
  <div class="pesquisa">
    <input type="search" placeholder="Procurar trabalhadores" />
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
  <div class="rank-page">
    <h1>Ranking</h1>
    <div class="rank-container">
      <div class="column column-second">
        <div class="position-ball second"></div>
        <p>2</p>
      </div>
      <div class="column column-first">
        <div class="position-ball first"></div>
        <p>1</p>
      </div>
      <div class="column column-third">
        <div class="position-ball third"></div>
        <p>3</p>
      </div>
    </div>

    <ul class="participants" v-for="user in userStore.users" :key="user.id">
      <li>{{ user.name }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: black;
  text-align: center;
  font-size: 7vh;
}
.pesquisa {
  display: flex;
  justify-content: center;
  margin: 2vh;
  input {
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
  justify-content: space-around;
}
.trabalhador {
  display: flex;
  width: 50vh;
  flex-direction: column;
  border: 1px rgb(158, 158, 158) solid;
  margin: 5vh;
}
.rank-page {
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  h1{
    font-size: 7vh;
  }
}

.rank-container {
  display: flex;
  margin-top: 10vh;
  width: 100%;
  margin-bottom: 20px;
  align-items: end;
}

.column {
  flex: 1;
  text-align: center;
  position: relative;
  background-color: #007bff;
  border-radius: 8px;
  margin: 0 10px;
  bottom: 0;
  p {
    align-items: end;
    font-size: 12vh;
    -webkit-text-stroke: #252525 0.5px;
    font-family: 'Times New Roman', Times, serif;
  }
}

.column-first {
  height: 25vh;
  p {
    margin-top: 3vh;
    color: #ffd700;
  }
}

.column-second {
  height: 20vh;
  p {
    color: #c0c0c0;
  }
}

.column-third {
  height: 15vh;
  p {
    margin-top: -2vh;
    color: #cd7f32;
  }
}
.position-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  p {
    font-size: 5vh;
  }
}

.first {
  background-color: #ffd700;
}

.second {
  background-color: #c0c0c0;
}

.third {
  background-color: #cd7f32;
}

.participants {
  margin-top: 20px;
  width: 100%;
  max-width: 90vw;
  list-style-type: none;
  padding: 0;
  color: black !important;
}

.participants li {
  background-color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li {
  color: rgb(85, 85, 85);
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
