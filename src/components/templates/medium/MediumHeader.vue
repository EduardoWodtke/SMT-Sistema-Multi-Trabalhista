<script setup>
</script>
<template>
  <header>
    <div class="logo">
      <router-link to="/">
        <img class="logo-img" src="@/assets/imagens/logo.png" alt="SMT" />
      </router-link>
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
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00173d;
  width: 100%;
  align-items: center;
  height: 30%;
}



.logo-img {
  width: 13vh;
}
#barra-pesquisa {
  width: 600px;
  height: 45px;
  border-radius: 10px;
  font-size: 22px;  
  margin-right: 12vh;
  text-align: center;
  border: 3px solid;
  box-shadow: 0 10px 30px 0 black;
}

</style>