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
  margin: 33% 10vh 0 0;
  text-align: center;
  border: 3px solid;
  color: rgb(44, 44, 44);
}
#container {
  display: flex;
  flex-direction: row;
}
.historico {
  background-color: rgb(221, 221, 221);
  box-shadow: 0.5vh 2vh 3vh 0.5vh black;
  height: 70vh;
  width: 30vh;
}
.chat {
  display: flex;
  flex-direction: column;
  justify-content: space-between ;
  align-items: center;
  width: 100%;
  margin: 2vh;
}
h4 {
  font-size: 3vh;
  text-align: center;
  margin-top: 1vh;
  color: black;
}
h3 {
  font-size: 3vh;
  margin: 1vh 3vh 0 0;
  color: black;
  padding-right: 12vh;
}
@media screen and (max-width: 1024px) {
  #conversar {
    margin: 0 0 2vh 0;
    height: 3vh;
    font-size: 2vh;
  }
  h3{
    margin-left: 13vh;
  }
  h4{
    font-size: 2.5vh;
  }
}
@media screen and (max-width: 430px) {
  #container{
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
  }
  #conversar{
    width: 30vh;
    margin: 150% 0 0 0;
  }
  h3{
    margin: 0;
    padding: 0;
  }
  .historico{
    height: 0vh;
    box-shadow: none;
  }
  h4{
    font-size: 0;
  }
}
</style>
