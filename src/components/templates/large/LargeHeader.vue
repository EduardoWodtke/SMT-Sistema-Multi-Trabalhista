<script setup>
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
  margin-right: 5vh;
  text-align: center;
  border: 3px solid;
  box-shadow: 0 10px 30px 0 black;
}

</style>