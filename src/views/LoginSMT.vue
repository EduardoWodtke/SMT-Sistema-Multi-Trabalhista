<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '@/stores/user' // Importe a store
import UserService from '@/service/user' // Importe o UserService

const userStore = useUserStore() // Instancia a store

// Dados do formulário
const nome = ref('')
const email = ref('')
const cpf = ref('')

// Função para limpar os campos do formulário
function limpar() {
  nome.value = ''
  email.value = ''
  cpf.value = ''
}

// Função para salvar os dados do usuário
async function salvar() {
  // Verificação de campos obrigatórios
  if (!nome.value || !email.value || !cpf.value) {
    alert('Por favor, preencha todos os campos obrigatórios.')
    return
  }

  const usuario = {
    nome: nome.value,
    email: email.value,
    cpf: cpf.value
  }

  try {
    // Chama o método adicionarUsuario da store
    await userStore.adicionarUsuario(usuario)
    limpar() // Limpa os campos após salvar
    this.$router.push({ name: 'Trabalhadores' })
  } catch (error) {
    console.error('Erro ao salvar usuário:', error)
    alert('Erro ao salvar o usuário')
  }
}
</script>

<template>
  <div id="container">
    <div class="login">
      <h1>Login</h1>
      <div class="form">
        <div class="caixas">
          <input type="text" v-model="nome" placeholder="Nome" />
          <input type="email" v-model="email" placeholder="Email" />
          <input type="text" v-model="cpf" placeholder="CPF" />
        </div>
        <button @click="salvar">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  .caixas {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2vh;
    /* border-bottom: 1px white solid; */
  }
  button {
    width: 15vh;
    height: 5vh;
    margin-bottom: 5vh;
    margin-top: 2vh;
    font-size: 2.5vh;
    /* border-top: 1px solid white; */
    background: none;
    border: solid 2px white;
    border-radius: 1vh;
  }
  button:hover{
    background-color: white;
    color: #00173d;
  }
}
input {
  color: black;
  width: 40vh;
  height: 4vh;
  margin: 2vh;
  border-radius: 1vh;
  padding-left: 1vh;
  font-size: 2vh;
  border-bottom: 1px white solid;
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 65.8vh;
}
.login {
  display: flex;
  flex-direction: column;
  background-color: #00173d;
  width: 50vh;
  height: 50vh;
  border-radius: 2vh;
  margin-top: 5vh;
  justify-content: space-between;
  h1 {
    margin: 2vh;
    text-align: center;
    border-bottom: 1px white solid;
  }
}
</style>
