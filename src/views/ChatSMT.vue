<script setup>
import { ref } from 'vue';
const messages = ref([]);
const chat = ref('');

const sendMessage = () => {
  if (chat.value.trim() !== '') {
    messages.value.push(chat.value);
    chat.value = '';
  }
};
</script>
<template>
  <div id="container">
    <div class="tabela-container">
      <p class="mdi mdi-chat-processing-outline">CONVERSAS</p>
    </div>
    <div class="chat">
      <div class="perfil">
        <div class="bolinha">IMG</div>
        <h3>Fulano</h3>
      </div>
      <div class="tabela">
        <div v-for="(message, index) in messages" :key="index" class="conteudo">
          <h4>{{ message }}</h4>
        </div>
      </div>
      <div class="oi">
        <input
          size="50"
          type="text"
          v-model="chat"
          @keyup.enter="sendMessage"
          id="conversar"
          placeholder="Digitar..."
        />
      </div>
    </div>
  </div>
</template>
<style>
.oi{
  display: flex;
  flex-direction: column;
  background-color: #002566;
  width: 100vh;
  height: 5vh;
  align-items: center;
}
.tabela {
  padding: 10px;
  overflow-y: auto; 
  height: 55vh; 
}
.chat {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 45vh;
  position: absolute;
}

#conversar {
  width: 70vh;
  height: 30px;
  font-size: 20px;
  text-align: center;
  border: 3px solid;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;

}

#container {
  display: flex;
  flex-direction: row;
}

.historico {
  background-color: rgb(221, 221, 221);
  box-shadow: 0.5vh 2vh 3vh 0.5vh black;
  height: 70vh;
  width: 50vh;
  display: none;


}

.perfil h3{
  justify-content: center;
  align-items: center;
  margin-right: 80vh;
  margin-top: 2vh;
}



.perfil {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #002566;
  height: 10vh;
  width: 100vh;
  text-align: center;
  font-size: 30px;
  text-align: center;
 



}


.tabela-container {
  height: 70vh;
  width: 50px;
  overflow: hidden;
  position: relative;
  transition: width 0.3s;
  background-color: #00173d;

}

.tabela {
  width: 100%;
  background-color: #1b34a5;
  transition: all 0.3s ease;
}

.tabela-container:hover {
  width: 40vh;
  height: 70vh;
}

.tabela-container:hover .tabela {
  transform: translateX(-100%);
}

.conteudo {
  padding: 10px;
  color: black;
  transition: opacity 0.3s ease;
}

.tabela-container:hover .conteudo {
  opacity: 1;
}

.bolinha {
  background-color: rgb(0, 153, 255);
  border: 1px solid black;
  width: 10vh;
  height: 10vh;
  border-radius: 20vh;
}


h4 {
  font-size: 3vh;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: #002869;
  border-radius: 10px;

}



@media screen and (max-width: 1024px) {
  #conversar {
    margin: 0 0 2vh 0;
    height: 3vh;
    font-size: 2vh;
  }

  h3 {
    margin-left: 13vh;
  }

  h4 {
    font-size: 2.5vh;
  }
}

@media screen and (max-width: 430px) {
  #container {
    display: flex;
    flex-direction: column;
    margin: 0;
    align-items: center;
  }

  #conversar {
    width: 30vh;
    margin: 150% 0 0 0;
  }

  h3 {
    margin: 0;
    padding: 0;
  }

  .historico {
    height: 0vh;
    box-shadow: none;
  }

  h4 {
    font-size: 0;
  }
}
</style>
