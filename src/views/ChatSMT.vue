<script setup>
import { ref } from 'vue';

const friends = ref([
  { id: 1, name: 'João', messages: [{ from: 'João', text: 'Oi!' }] },
  { id: 2, name: 'Maria', messages: [{ from: 'Maria', text: 'Como vai?' }] },
  { id: 3, name: 'Pedro', messages: [{ from: 'Pedro', text: 'Tudo bem?' }] }
]);

const activeFriend = ref(null);
const chat = ref('');

const selectFriend = (friend) => {
  activeFriend.value = friend;
};

const sendMessage = () => {
  if (chat.value.trim() !== '') {
    activeFriend.value.messages.push({ from: 'Você', text: chat.value });
    chat.value = '';
  }
};

const exitChat = () => {
  activeFriend.value = null;
};
</script>

<template>
  <div class="chat-app">
   
    <div v-if="!activeFriend" class="friends-list">
      <h2>Escolha um amigo:</h2>
      <ul>
        <li
          v-for="friend in friends"
          :key="friend.id"
          @click="selectFriend(friend)"
        >
          {{ friend.name }}
        </li>
      </ul>
    </div>

   
    <div v-if="activeFriend" class="chat-window">
      <div class="chat-header">
        <button @click="exitChat" class="back-button">Voltar</button>
        <h2>{{ activeFriend.name }}</h2>
      </div>
      <div class="chat-messages">
        <div
          v-for="(message, index) in activeFriend.messages"
          :key="index"
          class="message"
        >
          <strong>{{ message.from }}:</strong> {{ message.text }}
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
.chat-app {
  height: 100vh;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}


.friends-list {
  padding: 20px;
  text-align: center;
}

.friends-list ul {
  list-style: none;
  padding: 0;
}

.friends-list li {
  padding: 15px;
  margin: 10px 0;
  background-color: #0a0024;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

.friends-list li:hover {
  background-color: #9c67ff;
  transition: 0.3s;
}

.friends-list h2 {
  margin-bottom: 20px;
}


.chat-window {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #09003b;
  padding: 20px;
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
}

.chat-header .back-button {
  padding: 10px 15px;
  background-color: #2e1ffc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-header .back-button:hover {
  background-color: #924ee0;
}

.chat-messages {
  flex-grow: 1;
  margin-top: 20px;
  overflow-y: auto;
}

.message {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #6163c9;
  border-radius: 8px;
  max-width: 80%;
}

.chat-input {
  display: flex;
  border-top: 1px solid #000000;
  padding-top: 10px;

}

.chat-input input {
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000000;
  font-size: 16px;
  margin-right: 10px;
  color: rgb(0, 0, 0);
}

.chat-input button {
  padding: 10px 15px;
  background-color: #2e1ffc;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #924ee0;
  transition: 0.3s;
}


@media (max-width: 768px) {
  .chat-app {
    flex-direction: column;
  }

  .friends-list,
  .chat-window {
    width: 100%;
  }

  .chat-header h2 {
    font-size: 18px;
  }

  .chat-input input {
    font-size: 14px;
    
  }
}
</style>
