<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // Para acessar os parâmetros da rota
import { useCategoriaStore } from '@/stores/categoria';
import { useUserStore } from '@/stores/user';

const route = useRoute(); // Usando o Vue Router para acessar os parâmetros da rota
const categoriaStore = useCategoriaStore(); // Usando a store de categorias
const categoria = ref({}); // Variável para armazenar os dados da categoria
const userStore = useUserStore(); // Usando a store de usuários
const users = ref([]); // Variável para armazenar os usuários da categoria

onMounted(async () => {
  const categoriaId = route.params.id; // Pega o ID da categoria da URL
  await categoriaStore.buscarCategoriaPorId(categoriaId); // Chama a store para buscar a categoria
  categoria.value = categoriaStore.categoria; // Atribui os dados da categoria à variável local

  await userStore.buscarUserPorCategoria(categoriaId); // Busca os usuários pela categoria
  users.value = userStore.users; // Atribui os usuários à variável local
});
</script>

<template>
  <div class="container">
    <h1>{{ categoria.nome }}s</h1>
    <hr />
    <div class="trabalhadores">
      <div
        class="trabalhador"
        v-for="user in users"
        :key="user.id"
      >
        <img
          :src="user.profileImage || '@/assets/imagens/teste-perfil.jpg'"
          alt="Foto de {{ user.name }}"
        />
        <p>{{ user.name }}</p>
        <button>Contratar</button>
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
@media screen and (max-width: 1024px) {}

/* celular */
@media screen and (max-width: 430px) {}
</style>
