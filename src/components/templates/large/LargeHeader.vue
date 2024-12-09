<script setup></script>
<template>
  <header>
    <div class="conteiner">
      <router-link to="/trabalhadores" class="logo">
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
 
}

.logo h1 {
  margin-top: 6vh;
  font-size: 12vh;
  font-weight: bold;
  color: #ffffff;
  text-shadow: rgb(78, 84, 104) 2px 2px 0px;
  
}
.icons {
  display: block;
  font-size: 5vh;
 
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
