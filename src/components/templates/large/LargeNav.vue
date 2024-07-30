<script setup>
import Menu from "vue-material-design-icons/Menu.vue";
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
@import url('https://fonts.googleapis.com/css2?family=Lakki+Reddy&display=swap');
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: black;
  width: 100%;
  align-items: center;
  height: 35px;
  padding-top: 1vh;
  margin-top: 0;
  font-family: "Lakki Reddy", serif;
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

</style>