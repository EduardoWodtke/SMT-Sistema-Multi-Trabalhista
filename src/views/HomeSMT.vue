<script setup>
import { onMounted } from 'vue';
import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});
</script>
<template>
  <div class="slide">
    <img src="@/assets/trab.png" alt="" />
    <h3>O que teu marido não faz nós fazemos!</h3>
  </div>
  <div class="map">
    <img src="@/assets/mapa.jpeg" alt="" />
  </div>
  <div class="avaliados">
    <h4>Melhores avaliados</h4>
  </div>
  <div class="servicos-principes">
    <div class="servico"><p>1</p></div>
    <div class="servico"><p>2</p></div>
    <div class="servico"><p>3</p></div>
    <div class="servico"><p>4</p></div>
  </div>
</template>
<style>
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
  border-radius: 20vh;
  width: 30vh;
  height: 30vh;
  background-color: brown;
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
  display: flex;
}
.slide img {
  border: solid black 3px;
  width: 100%;
  box-shadow: 3px 0.3vh 2vh black;
  height: 45vh;
}
h3 {
  color: rgb(0, 0, 0);
  position: absolute;
  margin: 15% 0 0 31.5%;
  text-shadow: black 3px 3px 3px;
  font-size: 6vh;
  -webkit-text-stroke: 2px white;
  font-family: 'New Amsterdam', sans-serif;
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
