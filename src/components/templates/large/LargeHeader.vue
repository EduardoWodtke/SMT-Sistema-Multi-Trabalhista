<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import debounce from 'lodash.debounce'

import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const { isLoggedIn, username, login, logout } = useAuthStore()

const search = ref('')

watch(
  search,
  debounce(() => {
    router.push({ name: 'search', query: { search: search.value } })
  }, 600)
)
</script>
<template>
  <header>
    <router-link to="/" class="logo">
      <img class="logo-img" src="@/assets/logo.png" alt="SMT" />
      <h1>SMT</h1>
    </router-link>
    <div class="barra-pesquisa">
      <input size="100" type="text" v-model="search" id="barra-pesquisa" placeholder="Procurar trabalhadores" />
      <Router-Link :to="{ name: 'search', query: { search } }" class="botaoSearch">
        <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="" />
      </Router-Link>
    </div>
    <div class="icons">
      <div v-if="loggedIn">
        <router-link to="/Logout">Logout</router-link>
      </div>
      <router-link v-else to="/Login">
        <i class="mdi mdi-account-hard-hat-outline" />
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.logo {
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.logo h1 {
  font-size: 7vh;
  font-weight: bold;
  color: #ffffff;
  margin-left: 2vh;
  margin-top: 10px;
}

.icons {
  font-size: 5vh;
  padding-right: 2vh;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(0, 23, 61);
  width: 100%;
  align-items: center;
  height: 8vh;
}

.logo-img {
  width: 9vh;
  height: 9vh;
  margin-top: 16px;
}

#barra-pesquisa {
  width: 600px;
  height: 35px;
  border-radius: 8px;
  font-size: 20px;
  margin-right: 5vh;
  text-align: center;
  border: 3px solid;
  font-family: 'Ubunto' sans-serif;
  color: rgb(44, 44, 44);
}

.botaopesquisa {
  height: 20px;
  width: 100px;
}
</style>
