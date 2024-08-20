<script setup></script>
<template>
  <div id="container">
    <div class="historico">
      <h4>Histórico de conversas</h4>
    </div>
    <div class="chat">
      <h3>Fulano</h3>
      <div class="conversar">
        <input size="50" type="text" v-model="chat" id="conversar" placeholder="Digitar..." />
      </div>
    </div>
  </div>
</template>
<style>
#conversar {
  width: 45vh;
  height: 30px;
  font-size: 20px;
  margin: 33% 0 0 30%;
  text-align: center;    
  border: 3px solid;
  color: rgb(44, 44, 44);
}
.conversar {
  display: block;
  bottom: 0;
  align-items: center;
}
#container {
  display: flex;
  flex-direction: row;
}
.historico {
  background-color: rgb(221, 221, 221);
  box-shadow: 0.5vh 2vh 3vh 0.5vh black;
  height: 68vh;
  width: 25vh;
}
.chat {
  width: 100%;
}
h4 {
  font-size: 3vh;
  text-align: center;
  margin-top: 1vh;
  color: black;
}
 h3 {
  font-size: 3vh;
  text-align: center;
  margin-top: 1vh;
  color: black;
  padding-right: 12vh;
}
</style>
