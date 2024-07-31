<script setup>
</script>
<template>
    <nav>
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
    </nav>
</template>
<style scoped>

.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  width: 100%;
  align-items: center;
  height: 35px;
  margin-top: 0;
  font-family: "Ubuntu", sans-serif;
}
.mdi{
padding-top: 0.3%;  
font-size: 5vh;
}
ul {
  display: flex;
  flex-direction: row;
}
li {
  font-size: 2vh;
  text-align: center;
  padding: 0 10vh;
  list-style: none;
}

</style>