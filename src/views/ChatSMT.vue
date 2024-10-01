<script setup></script>
<template>
  <div id="container">
    <div class="tabela-container">
      <p>AMIGOS</p>
        <div class="tabela">
            
        </div>
    </div>
    <div class="chat">
      <div class="demonio"> <div class="bolinha">IMG</div>  <h3>Fulano</h3></div>
     
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
.historico{
  background-color: rgb(221, 221, 221);
  box-shadow: 0.5vh 2vh 3vh 0.5vh black;
  height: 70vh;
  width: 50vh;
  display: none;
  
  
}



.demonio{
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 170vh;
  height:5vh;
  text-align: center;
  font-size: 30px;
  border-radius: 10px;


  
}


.tabela-container {
            height:  70vh;
            width: 50px; /* Largura inicial da tabela */
            overflow: hidden; /* Esconde o conteúdo que não cabe */
            position: relative;
            transition: width 0.3s; /* Suaviza a transição */
            background-color: #00173d;
            border-radius: 5px;
            text-align: center;
        }

        .tabela {
            width: 100%; /* Largura da tabela */
            background-color: #2980b9;
            transition: all 0.3s ease; /* Suaviza a transição da tabela */
        }

        .tabela-container:hover {
            /* Largura da tabela ao passar o mouse */
            width: 40vh;
            height: 70vh;
        }

        .tabela-container:hover .tabela {
            transform: translateX(-100%); /* Move a tabela para a esquerda */
        }

        .conteudo {
            padding: 10px;
            color: black;
            /* Começa invisível */
            transition: opacity 0.3s ease; /* Suaviza a transição da opacidade */
        }

        .tabela-container:hover .conteudo {
            opacity: 1; /* Torna o conteúdo visível ao passar o mouse */
        }

.bolinha {
  background-color: rgb(0, 153, 255);
  border: 1px solid black;
  width: 4vh;
  height: 4vh;
  border-radius: 20vh;
}


h4 {
  font-size: 3vh;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: #00173d;
    
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
