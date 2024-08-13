<script setup>
</script>
<template>
  <header>
    <div class="logo">
      <img class="logo-img" src="@/assets/logoSMT.png" alt="SMT" />
      <h1>SMT</h1>
    </div>
    <div class="barra-pesquisa">
      <input size="100" type="text" v-model="search" id="barra-pesquisa" placeholder="Procurar serviços"  />
      
    </div>
    <div class="icons">
      <i class="mdi mdi-account-hard-hat-outline" />
      <!-- <img style="width: 10vh;" src="@/assets/perfil.png" alt=""> -->
    </div>
  </header>
</template>

<style scoped>
.logo{
  display: flex;
  flex-direction: row;
}
.logo h1 {
  font-size: 6vh;
  font-weight: bold;
  color: #ffffff;
  margin-left: 2vh;
}
.icons {
  font-size: 5vh;
  padding-right: 2vh;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00173d;
  width: 100%;
  align-items: center;
  height: 8vh;
}

.logo-img {
  width: 9vh;
}

#barra-pesquisa {
  width: 600px;
  height: 35px;
  border-radius: 8px;
  font-size: 20px;
  margin-right: 5vh;
  text-align: center;    
  border: 3px solid;
  
  font-family: "Ubunto" sans-serif;
  color: rgb(44, 44, 44);
}

.botaopesquisa {
  height: 20px;
  width: 100px;
  
}
</style>  