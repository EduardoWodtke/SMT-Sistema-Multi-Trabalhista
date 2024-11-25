<script setup>
import { onMounted } from 'vue'
// import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const authStore = useAuthStore()

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token')
    // const passageUser = new PassageUser(authToken);
    // const user = await passageUser.userInfo(authToken);
    // if (user) {
    await authStore.setToken(authToken)
    // } else {
    //   authStore.unsetToken();
    // }
  } catch (error) {
    authStore.unsetToken()
  }
}

onMounted(() => {
  getUserInfo()
  userStore.buscarTodosOsUsers()
})
</script>
<template>

  <div class="slide">
    <img src="../assets/gg.jpeg" alt="" />
    <h3>O que teu marido não faz, nós fazemos!</h3>
    <router-link to="Perfil" class="butãoGettingStart">Começar agora!</router-link>
  </div>
  <!-- <div class="map">
    <img src="@/assets/mapa.jpeg" alt="" />
  </div>
  <div class="avaliados">
    <h4>Melhores avaliados</h4>
  </div>
  <div class="servicos-principes">
    <div v-for="user in userStore.users" :key="user.id">
      <div class="servico">
        <img src="@/assets/userPhoto.png" alt="" class="trabalhadoresImagem"/>
      </div>
    </div> -->
  <!-- </div> -->
</template>
<style>
*{
  overflow-x: hidden;
}
.trabalhadoresImagem{
  width: 30vh;
  border-radius: 50%;
}

.avaliados h4 {
  color: black;
  font-size: 7vh;
  text-align: center;
}
.servicos-principes {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.servico {
  border-radius: 50%;
  width: 30vh;
  height: 30vh;
  background-color: rgb(70, 17, 194);
  border: solid 1px black;
  margin-bottom: 2vh;
  text-align: center;
}
.map img {
  width: 50%;
  display: block;
  margin: 5vh auto;
  box-shadow: 3px 0.3vh 2vh black;
  border: solid black 3px;
  height: 35vh;
}
.slide {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 92vh;
  background-color: #00173d;
  height: 100vh;
  img{
    width: 135%;
    max-height: 108.5%;
  }
}
.logo{
  /* display: grid; */
  justify-content: space-evenly;
  position: absolute;
  grid-column: 2;
}
.backgroundPessoas {
  border: solid black 3px;
  width: 128%;
  box-shadow: 3px 0.3vh 2vh black;
  opacity: 0.3;
}
h3 {
  color: #fff;
  position: absolute;
  margin: 25% 0 0 23%;
  text-shadow: black 3px 3px 3px;
  font-size: 6vh;
  font-weight: bold;
  -webkit-text-stroke: 1px white;
  text-shadow: 3px 3px 10px rgb(65, 65, 65);
  font-family: 'Poppins', sans-serif;
  text-align: justify;
}
.butãoGettingStart{
  position: absolute;
  margin: 32% 0% 0 44%;
  font-size: 3vh;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: #ffffff;
  border-radius: 15px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
  border: solid 2px #ffffff;
  background-color: #31313146;
  /* -webkit-text-stroke: 0.3px rgb(0, 0, 0); */
  /* text-shadow: black 5px 4px 10px; */
}

.butãoGettingStart:hover{
  background-color: #ffffff;
  color: black;
  transition: 0.5s;
}

@media screen and (max-width: 1024px) {
  .avaliados h4 {
    font-size: 10vh;
    text-align: center;
  }
  .servicos-principes {
    margin-bottom: 19%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .servico {
    width: 40vh;
    height: 40vh;
  }
  h3 {
    font-size: 3.7vh;
    -webkit-text-stroke: 0.7px white;
    margin: 20% 15%;
  }
  .map img {
    width: 80%;
    margin-top: 2.5vh;
  }
  .slide img {
    width: 100%;
    height: 30vh;
  }
}
@media screen and (max-width: 430px) {
  h3 {
    font-size: 2.5vh;
    -webkit-text-stroke: 0.13;
    margin-top: 30%;
  }
  .map img {
    width: 80%;
    margin: 5% 0 0 10%;
  }
  .slide img {
    width: 100%;
    height: 25vh;
  }
  .avaliados h4 {
    margin-top: 5%;
    font-size: 6vh;
  }
  .servico {
    width: 25vh;
    height: 25vh;
  }
  .servicos-principes {
    margin-bottom: 35%;
  }
}
</style>
