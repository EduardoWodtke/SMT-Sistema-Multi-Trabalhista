<script setup>

</script>
<template>
<header >
  <div class="logo">
    <img class="logo-img" src="https://th.bing.com/th/id/R.add2ab6c33f2a2ac37bd7ad0639831b3?rik=QKxNLnIOQxyNHQ&riu=http%3a%2f%2fsmt-kyoto.com%2fimages%2flogo.png&ehk=rXnG73oUS6XtQxqGKU12cHFlZkCvdBMmi6oyXyZFvGA%3d&risl=&pid=ImgRaw&r=0" alt="SMT">
  </div>
  <div class="log">
    <div class="butao">
      Entrar
    </div>
    <div class="butao">
      Cadastrar
    </div>  
  </div>
</header>
</template>

<style scoped>
header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(255, 235, 50);
  width: 100%;
  align-items: center;
  box-shadow: 0 3px 14px 1px rgb(165, 140, 0);
  height: 30%;
}

.logo-img{
  width: 9vh;
}

.log{
  display: flex;
  flex-direction: row;
}

.butao{
  background-color: rgb(0, 0, 0);
  box-shadow: 3px 3px 3px rgb(95, 95, 95);
  margin:0 1vh 0 0;
  width: 12vh;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 3px;
}

.butao:hover{
  transition: 0.5s;
  background-color: rgb(248, 166, 12);
  cursor: pointer;
}
</style>

