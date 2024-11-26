<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'

const defaultUsuario = { id: null, descricao: "" };
const usuarios = ref([]);
const usuario = reactive({ ...defaultUsuario });
// Usando a store de usuário
const userStore = useUserStore()

// Definindo as variáveis para o formulário
const nome = ref('')
const email = ref('')
const cpf = ref('')

function limpar() {
  Object.assign(usuario, { ...defaultUsuario });
}

async function salvar() {
  if (usuario.id) {
    await usuariosApi.atualizarUsuario(usuario);
  } else {
    await usuariosApi.adicionarUsuario(usuario);
  }
  usuarios.value = await usuariosApi.buscarTodasAsUsuarios();
  limpar();
}

  try {
    // Chama a ação da store para salvar o usuário
    await userStore.salvarUsuario(usuario)
    alert('Usuário salvo com sucesso!')
  } catch (error) {
    alert('Erro ao salvar o usuário!')
  }

</script>

<template>
  <div id="container">
    <div class="login">
      <h1>Login</h1>
      <div class="form">
        <input type="text" v-model="nome" placeholder="Nome"/>
        <input type="email" v-model="email" placeholder="Email"/>
        <input type="text" v-model="cpf" placeholder="CPF"/>
        <!-- <input type="text" v-model="usuario" placeholder="Usuario"/> -->
        <button @click="salvar">Login</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        color: black;
        width: 40vh;
        height: 4vh;
        margin: 1vh;
        border-radius: 1vh;
        padding-left: 1vh;
        font-size: 2vh;
    }
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 65.8vh;
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
    .passage {
      text-decoration: none;
      text-align: center;
      font-size: 2vh;
      border: solid 1px white;
      width: 20vh;
      border-radius: 1vh;
      margin-bottom: 2vh;
      margin-left: 15vh;
    }
    .passage:hover {
      background-color: #ffffff;
      color: black;
    }
  }
}
</style>
