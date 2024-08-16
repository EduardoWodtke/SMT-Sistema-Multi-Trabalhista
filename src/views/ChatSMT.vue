<script setup></script>
<template>
  <div id="container">
    <div class="historico">
      <h4>Histórico de conversas</h4>
    </div>
    <div class="chat">
      <h4>Fulano</h4>
    </div>
  </div>
</template>
<style>
#container {
  display: flex;
  flex-direction: row;
}
.historico {
  background-color: rgb(221, 221, 221);
  box-shadow: 0.5vh 2vh 3vh 0.5vh black ;
  height: 68vh;
  width: 25vh;
}
.chat{
    width: 100%;
}
h4 {
  font-size: 3vh;
  text-align: center;
  margin-top: 1vh;
  color: black;
}
</style>
