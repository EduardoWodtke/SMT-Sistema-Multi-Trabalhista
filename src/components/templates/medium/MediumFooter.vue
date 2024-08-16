<script setup></script>
<template>
  <footer>
    <div class="icones">
      <router-link to="/"> <i class="mdi mdi-account-outline"></i> </router-link>
      <router-link to="/"> <i class="mdi mdi-home-outline"></i> </router-link>
      <i class="mdi mdi-menu"></i>
    </div>
  </footer>
</template>
<style scoped>
* {
  margin: 0 0 0 0;
}
footer {
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  align-items: center;
  bottom: 0;
  border: #00173d solid 5px;
  background-color: black;
  padding: 20px;
  text-align: center;
}
.icones {
  display: flex;
  justify-content: space-around;
  font-size: 6.5vh;
  width: 70vh;
}
</style>
