<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCategoriaStore } from '@/stores/categoria'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const categoriaStore = useCategoriaStore()
const categoria = ref({})
const userStore = useUserStore()
const users = ref([])

onMounted(async () => {
  const categoriaId = route.params.id
  await categoriaStore.buscarCategoriaPorId(categoriaId)
  categoria.value = categoriaStore.categoria

  await userStore.buscarTodosOsUsers(2)
  // await userStore.buscarUserPorCategoria(categoriaId)
  // users.value = userStore.filteredUsers
})

function goToUser(id) {
  router.push({ name: 'Perfil', params: { id } })
}
</script>

<template>
  <div class="container">
    <h1>{{ categoria.nome }}</h1>
    <hr />
    <div class="trabalhadores">
      <div class="trabalhador" v-for="user in userStore.users" :key="user.id">
        <img :src="user.foto" alt="Foto de {{ user.name }}" />
        <p>{{ user.name }}</p>
        <!-- <p>{{ user.foto.description }}</p> -->
        <p>{{ user.categoria.nome }}</p>
        <button @click="goToUser">Contratar</button>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  min-height: 65vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    text-align: center;
    font-size: 3vh;
  }

  hr {
    width: 90%;
    align-items: center;
    /* text-align: center; */
  }

  .trabalhadores {
    display: grid;
    /* grid-row: auto auto auto; */
    grid-template-columns: auto auto auto;

    .trabalhador {
      margin: 5vh;
      /* width: 50vh; */
      /* height: 20vh; */
      border: 1px solid black;
      /* background-color: #00173d; */
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }

      p {
        margin-left: 2vh;
        font-size: 5vh;
        color: black;
      }

      button {
        font-size: 2vh;
        margin: 2vh;
        width: 20vh;
        background-color: #00173d;
        height: 5vh;
        justify-content: center;
        /* align-items: center; */
        border: none;
      }

      button:hover {
        background-color: rgb(58, 81, 102);
      }
    }
  }
}

h1 {
  color: black;
}

/* tablet */
@media screen and (max-width: 1024px) {
  .container {
  min-height: 65vh;
  cursor: pointer;
  display: flex;
  flex: auto;
  flex-direction: column;

  align-items: center;

  h1 {
    text-align: center;
    font-size: 3vh;
  }

  hr {
    width: 90%;
    align-items: center;
    /* text-align: center; */
  }

  .trabalhadores {
    display: grid;
    /* grid-row: auto auto auto; */
    grid-template-columns: auto auto auto;

    .trabalhador {
      margin: 5vh;
      /* width: 50vh; */
      /* height: 20vh; */
      border: 1px solid black;
      /* background-color: #00173d; */
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }

      p {
        margin-left: 2vh;
        font-size: 5vh;
        color: black;
      }

      button {
        font-size: 2vh;
        margin: 2vh;
        width: 20vh;
        background-color: #00173d;
        height: 5vh;
        justify-content: center;
        /* align-items: center; */
        border: none;
      }

      button:hover {
        background-color: rgb(58, 81, 102);
      }
    }
  }
}

h1 {
  color: black;
}
}

/* celular */
@media screen and (max-width: 430px) {
  .container {
  min-height: 65vh;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  h1 {
    text-align: center;
    font-size: 3vh;
  }

  hr {
    width: 90%;
    align-items: center;
    /* text-align: center; */
  }

  .trabalhadores {
    display: grid;
    /* grid-row: auto auto auto; */
    grid-template-columns: auto auto auto;

    .trabalhador {
      margin: 5vh;
      /* width: 50vh; */
      /* height: 20vh; */
      border: 1px solid black;
      /* background-color: #00173d; */
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
      }

      p {
        margin-left: 2vh;
        font-size: 5vh;
        color: black;
      }

      button {
        font-size: 2vh;
        margin: 2vh;
        width: 20vh;
        background-color: #00173d;
        height: 5vh;
        justify-content: center;
        /* align-items: center; */
        border: none;
      }

      button:hover {
        background-color: rgb(58, 81, 102);
      }
    }
  }
}

h1 {
  color: black;
}
}
</style>
