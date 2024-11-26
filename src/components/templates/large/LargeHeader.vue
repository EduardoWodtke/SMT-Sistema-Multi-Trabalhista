<script setup></script>
<template>
  <header>
    <div class="conteiner">
      <router-link to="/" class="logo">
        <!-- <img class="logo-img" src="@/assets/logo.png" alt="SMT" /> -->
        <h1>SMT</h1>
      </router-link>
    </div>
    <!-- <div class="icons">
      <div v-if="loggedIn">
        <router-link to="/Logout">Logout</router-link>
      </div>
      <router-link v-else to="/Login">
        <i class="mdi mdi-account-hard-hat-outline" />
      </router-link>
    </div> -->
  </header>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center; 
  /* justify-content: center; */
}

.logo h1 {
  font-size: 7vh;
  font-weight: bold;
  color: #ffffff;
  /* margin-left: 2vh; */
  /* margin-top: 10px; */
}
.icons {
  display: block;
  font-size: 5vh;
  /* right: 0; */
  /* padding-right: 2vh; */
}
.conteiner {
  display: flex;
  flex-direction: row;
}
header {
  justify-content: center;
  display: flex;
  flex-direction: row;
  background-color: rgb(0, 23, 61);
  width: 100%;
  align-items: center;
  height: 8vh;
  /* justify-content: space-around; */
}

.logo-img {
  width: 9vh;
  height: 9vh;
  margin-top: 16px;
}

#barra-pesquisa {
  width: 600px;
  height: 35px;
  border-radius: 8px;
  font-size: 20px;
  margin-right: 5vh;
  text-align: center;
  border: 3px solid;
  font-family: 'Ubunto' sans-serif;
  color: rgb(44, 44, 44);
}

.botaopesquisa {
  height: 20px;
  width: 100px;
}
</style>
