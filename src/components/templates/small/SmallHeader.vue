<script setup>
</script>
<template>
  <header>
    <div class="logo">
      <img class="logo-img" src="@/assets/logo.png" alt="SMT" />
      <h1>SMT</h1>
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
  flex-direction: column;
  justify-content: space-between;
  background-color: #00173d;
  width: 100%;
  align-items: center;
  height: 25vh;
}
.logo{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 5vh;
    padding-right: 30px;
}
.logo h1{
font-weight: bold;
padding-top: 15px;
}
.logo-img {
  width: 15vh;
}
#barra-pesquisa {
  width: 40vh;
  height: 4vh;
  border-radius: 10px;
  font-size: 22px;  
  text-align: center;
  border: 3px solid;
  box-shadow: 0 10px 30px 0 rgb(0, 0, 0);
  margin-bottom: 10vh;
}

</style>