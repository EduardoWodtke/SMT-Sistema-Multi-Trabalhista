<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login, setAuthToken } from '@/service/auth'

const router = useRouter()

const username = ref('')
const password = ref('')
const loading = ref(false)

async function handleLogin() {
  loading.value = true
  try {
    const response = await login(username.value, password.value)
    setAuthToken(response.access)
    alert('Login realizado com sucesso!')
    console.log('Token JWT:', response.access)
    router.push('/trabalhadores')
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    alert('Erro ao fazer login. Verifique suas credenciais.')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div id="container">
    <div class="login">
      <h1>Login</h1>
      <div class="caixinha">
        <span class="mdi mdi-account" />
        <input type="text" class="form-control" placeholder="Email" v-model="username" required />
      </div>
      <div class="caixinha">
        <span class="mdi mdi-lock" />
        <input
          type="password"
          class="form-control"
          placeholder="Senha"
          v-model="password"
          required
        />
      </div>
      <div class="botoes">
        <router-link to="Register" class="butao">
          REGISTRAR
        </router-link>
        <button @click="handleLogin" class="butao">ENTRAR</button>
      </div>
      <a href="">Esqueceu a senha?</a>
    </div>
  </div>
</template>

<style scoped>
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  border: 0px solid white;
  outline: none;
  /* border-bottom: 1px solid white;   */
  -webkit-text-fill-color: white !important;
  -webkit-box-shadow: 0 0 0px 1000px #00173d inset;
  transition: background-color 5000s ease-in-out 0s;
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 65vh;
  align-items: center;
  .login {
    display: flex;
    flex-direction: column;
    background-color: #00173d;
    width: 50vh;
    align-items: center;
    height: 40vh;
    border-radius: 3vh;
    .botoes {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 1vh;
      .butao {
        background: none;
        width: 13vh;
        height: 4vh;
        font-size: 2.5vh;
        border: 1px solid white;
        border-radius: 1vh;
        text-align: center;
        text-decoration: none;
      }
      .butao:hover {
        background-color: white;
        color: #00173d;
      }
    }
    h1 {
      font-size: 5vh;
    }
    .caixinha {
      input {
        background: none;
        border: none;
        border-bottom: 2px solid white;
        height: 4vh;
        font-size: 2.5vh;
        width: 40vh;
        margin: 2vh;
      }
      span {
        font-size: 3vh;
      }
    }
  }
}
</style>
