<script setup>
import { ref } from 'vue'

const friends = ref([
  { id: 1, name: 'João', messages: [{ from: 'João', text: 'Oi!' }] },
  { id: 2, name: 'Maria', messages: [{ from: 'Maria', text: 'Como vai?' }] },
  { id: 3, name: 'Pedro', messages: [{ from: 'Pedro', text: 'Tudo bem?' }] }
])

const activeFriend = ref(null)
const chat = ref('')

const selectFriend = (friend) => {
  activeFriend.value = friend
}

const sendMessage = () => {
  if (chat.value.trim() !== '') {
    activeFriend.value.messages.push({ from: 'Você', text: chat.value })
    chat.value = ''
  }
}

const exitChat = () => {
  activeFriend.value = null
}
</script>

<template>
  <div class="chat-app">
    <div class="cabecalho">
      <router-link to="Trabalhadores" class="mdi mdi-arrow-left-bold" />
      <div v-if="!activeFriend" class="friends-list">
        <h2>Escolha um amigo:</h2>
        <ul>
          <li v-for="friend in friends" :key="friend.id" @click="selectFriend(friend)">
            {{ friend.name }}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="activeFriend" class="chat-window">
      <div class="chat-header">
        <button @click="exitChat" class="back-button">Voltar</button>
        <h2>{{ activeFriend.name }}</h2>
      </div>
      <div class="chat-messages">
        <div v-for="(message, index) in activeFriend.messages" :key="index" class="message">
          <h3>{{ message.from }}:</h3>
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="chat-input">
        <input
          v-model="chat"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Digite sua mensagem..."
        />
        <button @click="sendMessage">Enviar</button>
      </div>
    </div>
  </div>
</template>

<style>
  a{
    font-size: 3vh;
  }
  a:hover{
    color: rgb(102, 102, 102);
    /* -webkit-text-stroke: #ffffff 0.5px; */
    text-shadow: #ffffff 1px 1px 0px ;
  }
.chat-app {
  font-family: Arial, sans-serif;
  /* max-width: 600px; */
  margin: 2vh auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgb(0, 23, 61);
  width: 120vh;
  min-height: 65vh;
}

.friends-list {
  text-align: center;
}

.friends-list h2 {
  margin-bottom: 20px;
  color: rgb(255, 255, 255);
}

.friends-list ul {
  list-style-type: none;
  padding: 0;
}

.friends-list li {
  margin: 10px 0;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  transition: background-color 0.3s;
  color: black;
}

.friends-list li:hover {
  background-color: rgb(0, 23, 61);
  color: #fff;
}
.chat-window {
  display: flex;
  flex-direction: column;
  height: 400px;
  min-height: 60vh;
  border-radius: 20vh;
  width: 100%;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: rgb(0, 23, 61);
}

.back-button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: rgb(206, 206, 206);
  color: #000000;
  border: none;
  border-radius: 4px;
}

.chat-header h2 {
  margin: 0;
  color: rgb(255, 255, 255);
}

.chat-messages {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  border-bottom: 1px solid #ddd;
  background-color: #ffffff;
  color: black;
}

.message {
  margin-bottom: 10px;
}

.message h3 {
  margin: 0;
  font-weight: bold;
  color: rgb(0, 23, 61);
}
.message p {
  margin: 0;
  color: rgb(0, 23, 61);
}

.chat-input {
  display: flex;
  padding: 10px;
  background-color: #fff;
  color: #000000;
}

.chat-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  color: #000000;
}

.chat-input button {
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background-color: rgb(0, 23, 61);
  color: #fff;
  transition: background-color 0.3s;
}

.chat-input button:hover {
  background-color: rgb(0, 15, 41);
}

@media screen and (max-width: 1024px) {
  .chat-app {
    padding: 15px;
    width: 60vh;
  }
  .chat-window {
    height: 350px;
  }
  .back-button {
    padding: 5px;
  }
  .chat-input button {
    padding: 10px 15px;
  }
}
@media screen and (max-width: 430px) {
  .chat-app {
    padding: 10px;
    width: 40vh;
    height: 77vh;
  }
  .friends-list h2 {
    font-size: 18px;
  }
  .friends-list li {
    padding: 8px;
  }
  .chat-window {
    height: 300px;
  }
  .chat-header {
    flex-direction: row;
  }
  .chat-header h2 {
    margin: 10px 0;
    font-size: 20px;
  }
  .chat-messages {
    padding: 5px;
  }
  .chat-input input {
    margin-right: 5px;
  }
  .chat-input button {
    padding: 8px 10px;
  }
}
</style>
