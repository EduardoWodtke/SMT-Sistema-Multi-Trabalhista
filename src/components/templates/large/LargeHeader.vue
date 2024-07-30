<script setup>
import Menu from "vue-material-design-icons/Menu.vue";
</script>
<template>
  <header>
    <div class="logo">
      <img class="logo-img" src="@/assets/logoSMT.png" alt="SMT" />
    </div>
    <div class="barra-pesquisa">
      <input
        size="100"
        type="text"
        v-model="search"
        id="barra-pesquisa"
        placeholder="Procurar serviços"
      />
    </div>
    <div class="perfil">
      <img style="width: 10vh;" src="@/assets/perfil.png" alt="">
    </div>
  </header>
  <header>
    <div class="info">
      <Menu class="mdi mdi-menu" size="5vh" />
      <ul>
        <li>Ranking</li>
        <li>Suporte</li>
        <li>Perguntas</li>
        <li>Histórico</li>
        <li>Favoritos</li>
        <li>Configurações</li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00173d;
  width: 100%;
  align-items: center;
  height: 30%;
}
.menu {
  padding: 1.5vh 5vh 1vh 3vh;
}
ul {
  display: flex;
  flex-direction: row;
}
li {
  font-size: 2vh;
  text-align: center;
  padding: 0 7vh 0 7vh;
  list-style: none;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  width: 100%;
  align-items: center;
  height: 35px;
  margin: 1vh 0 0.5vh 0;
  font-family: "Lakki Reddy", serif;
}

.logo-img {
  width: 13vh;
}
#barra-pesquisa {
  width: 600px;
  height: 45px;
  border-radius: 10px;
  font-size: 22px;  
  margin-right: 5vh;
  text-align: center;
  border: 3px solid;
  box-shadow: 0 10px 30px 0 black;
}

</style>