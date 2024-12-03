<script>
import { login, setAuthToken } from '@/service/auth'

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async handleLogin() {
      this.loading = true
      try {
        const response = await login(this.username, this.password)
        setAuthToken(response.access)
        alert('Login realizado com sucesso!')
        console.log('Token JWT:', response.access)
        this.$router.push('/trabalhadores')
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        alert('Erro ao fazer login. Verifique suas credenciais.')
      } finally {
        this.loading = false
      }
    }
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
        <button type="submit" class="butao">REGISTRAR</button>
        <button type="submit" class="butao">ENTRAR</button>
      </div>
      <a href="">Esqueceu a senha?</a>
    </div>
  </div>
</template>

<style scoped>
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
        width: 10vh;
        height: 3vh;
        font-size: 2vh;
        border: 1px solid white;
        border-radius: 2vh;
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
        font-size: 2vh;
        width: 40vh;
        margin: 2vh;
      }
    }
  }
}
</style>
