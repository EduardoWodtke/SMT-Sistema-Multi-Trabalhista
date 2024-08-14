<script setup>
</script>
<template>
<div class="container">
    <div class="quadrado1"></div>
    <div class="quadrado2"></div>
    <div class="quadrado3"></div>
</div>
    
</template>
<style scoped>
*{
    background-color: rgb(255, 255, 255);
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  /* margin-top: 150px; */
}

.quadrado1 {
  width: 250px;
  height: 350px;
  background-color: rgb(32, 63, 197);
  border-radius: 15px;
  /* margin-top: 150px; */
  /* margin-left: 350px; */
  }

  .quadrado2 {
  width: 250px;
  height: 500px;
  background-color: rgb(32, 63, 197);
  border-radius: 15px;
  
  }

  .quadrado3 {
  width: 250px;
  height: 450px;
  background-color: rgb(32, 63, 197);
  border-radius: 15px;
  /* margin-top: 60px; */
  /* margin-right: 350px; */
  }

@media (max-width: 1024px) {
    .container{
        display: flex;
        flex-wrap: wrap;
        
    }
  .quadrado1 {
    width:  200px;
    height: 200px;
  }
  .quadrado2 {
    width: 200px;
    height: 200px;
  }
  .quadrado3 {
    width: 200px;
    height: 200px;
  }
}


</style>