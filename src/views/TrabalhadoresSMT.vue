<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter() 

const userStore = useUserStore()

onMounted(async () => {
  await userStore.buscarTodosOsUsers(2)
})
function goToUser(id) {
  router.push({ name: 'Perfil', params: { id } })
}
</script>
<template>
  <div id="body">
    <div class="topo">
      <div class="pesquisa">
        <router-link to="/" class="logout">Logout</router-link>
       <input type="search" placeholder="Procurar trabalhadores" /> 
      </div>
      <div class="icons" style="color: black">
        <router-link to="Chat" class="mdi mdi-chat-processing-outline" />
        <router-link to="Historico" class="mdi mdi-clock-time-eight-outline" />
      </div>
    </div>
    <!-- <h1>Trabalhadores</h1> -->
    <div id="container">
      <div v-for="user in userStore.users" :key="user.id" class="trabalhador">
        <div class="bolinha">
          <img src="@/assets/imagens/teste-perfil.jpg" alt="foto do usuário" class="user-foto" />
        </div>
        <div class="info">
          <p  
          class="user-item"
        >
          {{ user.name }}
        </p>
          <router-link to="/contratar" class="btn-contratar">Contratar</router-link>
        </div>
      </div>
    </div>
    <div class="rank-page">
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
  </div>
</template>

<style scoped>
.topo {
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
  margin-left: 32.5%;
  margin-right: 2vh;
  .pesquisa {
    display: flex;
    justify-content: center;
    margin: 2vh;
    input {
      text-align: center;
      border: 1px solid black;
      width: 70vh;
      color: black;
      height: 4vh;
      font-size: 2vh;
    }
  }
  .icons {
    display: flex;
    flex-direction: column;
    a {
      margin-bottom: -4vh;
      font-size: 5vh;
      color: #00173d;
    }
  }
  a:hover {
    text-shadow: #616161 0px 0px 3vh;
  }
}
#body {
  min-height: 65vh;
}
h1 {
  color: black;
  text-align: center;
  font-size: 7vh;
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
  h1 {
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

.btn-contratar {
  display: inline-block;
  padding: 10px 20px;
  background-color: #00173d; 
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}


.btn-contratar:hover {
  background-color: #5061ff; 
  transform: scale(1.05);
}


.btn-contratar:active {
  background-color: #3e8e41;
  transform: scale(1);
}

.logout{
  display: inline-block;
  padding: 10px 20px;
  background-color: #00173d; 
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.logout:hover {
  background-color: #5061ff; 
  transform: scale(1.05);
}


.logout:active {
  background-color: #3e8e41;
  transform: scale(1);
}


@media screen and (max-width: 1024px) {
  
  #container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 20px; 
    margin: 0 auto; 
  }
  .trabalhador {
    width: 100%; 
    max-width: 300px; 
    height: auto; 
    margin: 10px auto; 
    font-size: 1rem; 
    padding: 10px; 
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }
  .bolinha {
    width: 80px;
    height: 80px;
    background-color: #e0e0e0;
    border-radius: 50%; 
    margin: 0 auto 10px;
  }
  .icons {
    flex-direction: row; 
    justify-content: space-around; 
    a {
      font-size: 3vh; 
    }
  }
  button {
    font-size: 1rem; 
    width: 100%; 
    margin: 0;
    
  }
  .topo{
    
    margin: 0 !important;
    width: 20vh;
  }
  .pesquisa{
    width: 66vh;
  }
  .logout{
  display: block;
  padding: 1px 20px;
  height: 4vh;
  background-color: #00173d; 
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}
}

@media screen and (max-width: 430px) {
  #container {
    display: flex;
    flex-direction: column; 
    gap: 15px; 
    margin: 0 auto; 
    padding: 10px; 
  }
  .trabalhador {
    width: 100%;
    max-width: 280px;
    height: auto; 
    margin: 0 auto; 
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .bolinha {
    width: 60px; 
    height: 60px;
    background-color: #e0e0e0; 
    border-radius: 50%; 
    margin: 0 auto 10px;
  }
  .icons {
    flex-direction: row; 
    justify-content: space-around; 
    a {
      font-size: 2.5vh; 
    }
  }
  button {
    font-size: 0.9rem; 
    width: 100%;
    align-items: center;
    margin: 0;
  }
  
  img{
    width: 60px; 
    height: 60px;
    background-color: #e0e0e0; 
    border-radius: 50%; 
    margin: 0 auto 10px;
  }
  .pesquisa{
    width: 37vh;
  }
}

</style>
