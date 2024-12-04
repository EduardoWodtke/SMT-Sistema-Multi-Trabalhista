<script setup>
</script>
<template>
  <header>
    <router-link to="/trabalhadores" class="logo">
        <!-- <img class="logo-img" src="@/assets/logo.png" alt="SMT" /> -->
        <h1>SMT</h1>
      </router-link>
   
  </header>
</template>

<style scoped>
header {
  justify-content: center;
  display: flex;
  flex-direction: row;
  background-color: rgb(0, 23, 61);
  width: 100%;
  align-items: center;
  height: 8vh;
  font-size: 30px;
  /* justify-content: space-around; */
}

.logo {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  align-items: center; 
  /* justify-content: center; */
}




</style>