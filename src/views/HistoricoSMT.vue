<script setup></script>

<template>
    
    <div class="container">
        <div >
      <input size="100" type="text" v-model="search" class="barra-pesquisa" placeholder="Procurar trabalhadores"  />
    </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
    
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
        <div class="trabalhador">
            <div class="bolinha">IMG</div>
            <p>Nome</p>
            <button class="apagar">Excluir</button>
        </div>
    </div>
</template>

<style scoped>


.container {
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5vh;
    
}
.barra-pesquisa {
  width: 600px;
  height: 35px;
  border-radius: 8px;
  font-size: 20px;
  margin-right: 5vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10vh;


  
     
  border: 3px solid;
  font-family: "Ubunto" sans-serif;
  color: rgb(44, 44, 44);
}

.apagar{
    background-color: rgb(58, 61, 255);
    height: 50px;
    width: 100px;
    border-radius: 15px;
    border: none;
    margin-top: 120px ;
    font-size: 20px;
    
}
.apagar:hover{
    background-color: #6771ff;
    transition: 0.5s;
}
.trabalhador {
    background-color: #00173d;
    width: 54vh;
    font-size: 5vh;
    text-align: center;
    margin: 5vh;
    height: 20vh;
    width: 100vh;
    display: flex;
    flex-direction: column center ;
    justify-content: space-between;
    padding-right: 5vh;
    border-bottom-left-radius: 10vh;
    border-top-left-radius: 10vh;
    border-top-right-radius: 1vh;
    border-bottom-right-radius: 1vh;
    border: 3px black solid;
    box-shadow: 5px 5px 20px black;
    text-align: center;
}

.bolinha {
    background-color: rgb(0, 153, 255);
    border: 1px solid black;
    width: 20vh;
    border-radius: 20vh;
}

@media screen and (max-width: 1024px) {
    #container {
        display: grid;
        grid-template-columns: auto auto;
    }

    .trabalhador {
        width: 30vh;
        height: 10vh;
        margin: 2vh;
        font-size: 3vh;
    }

    .bolinha {
        width: 10vh;
    }
}
@media screen and (max-width: 430px) {
     #container {
       grid-template-columns: auto; 

    }
}
</style>