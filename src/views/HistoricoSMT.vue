<script setup>
import { onMounted } from 'vue'
import { useTrabalhoHistoricoStore } from '@/stores/trabalhoHistorico'
import { useUserStore } from '@/stores/user'

const trabalhoHistoricoStore = useTrabalhoHistoricoStore()
const userStore = useUserStore()

onMounted(async () => {
  trabalhoHistoricoStore.buscarTodosOsTrabalhosHistoricos()
})
onMounted(async () => {
  userStore.buscarTodosOsUsers()
})
</script>

<template>
  <main>
    <div class="container">
      <router-link to="Trabalhadores" class="mdi mdi-arrow-left-bold" />
      <div
        v-for="trabalhoHistorico in trabalhoHistoricoStore.trabalhosHistoricos"
        :key="trabalhoHistorico.id"
        class="trabalhador"
      >
        <div class="info">
          <div class="bolinha"></div>
          <div class="text">
            <p>Pedro De Alcantra</p>
            <p>Data de encerramento: {{ trabalhoHistorico.DataTermino }}</p>
            <p>Valor: {{ trabalhoHistorico.preco }}</p>
            <p></p>
          </div>
        </div>
        <button class="apagar">Excluir</button>
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  display: block;
  font-size: 5vh;
  color: black;
  margin-top: -5vh;
  margin-left: -200vh;
}
a:hover {
  color: rgb(102, 102, 102);
  /* -webkit-text-stroke: #ffffff 0.5px; */
  text-shadow: #000000 1px 1px 0px;
}
main {
  min-height: 61vh;
}
.info {
  display: flex;
  flex-direction: row;
}
.text {
  padding: 2vh;
  font-size: 3vh;
  display: flex;
  flex-direction: column;
  text-align: start;
}

.barra {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh;
}

.barra-pesquisa {
  width: 600px;
  height: 35px;
  border-radius: 8px;
  font-size: 20px;
  text-align: center;
  border: 3px solid;
  font-family: 'Ubunto' sans-serif;
  color: rgb(44, 44, 44);
}

.apagar {
  background-color: rgb(58, 61, 255);
  height: 50px;
  width: 100px;
  border-radius: 15px;
  border: none;
  text-align: center;
  font-size: 20px;
  margin-top: 13%;
}

.apagar:hover {
  background-color: #6771ff;
  transition: 0.5s;
}

.trabalhador {
  display: flex;
  /* flex-direction: column; */
  background-color: #00173d;
  width: 54vh;
  text-align: center;
  margin: 5vh;
  height: 20vh;
  width: 100vh;
  justify-content: space-between;
  padding-right: 5vh;
  border-bottom-left-radius: 10vh;
  border-top-left-radius: 10vh;
  border-top-right-radius: 1vh;
  border-bottom-right-radius: 1vh;
  border: 3px black solid;
  box-shadow: 5px 5px 20px black;
  text-align: center;
}

.bolinha {
  background-color: rgb(0, 153, 255);
  border: 1px solid black;
  width: 20vh;
  border-radius: 20vh;
}

@media screen and (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: auto auto;
    margin: 5vh 1vh 20% 1vh;
  }

  .trabalhador {
    width: 33vh;
    height: 15vh;
    margin: 0 1vh 10% 1vh;
  }
  .text {
    font-size: 2vh;
  }

  .bolinha {
    width: 20vh;
    background-color: yellow;
  }

  .apagar {
    margin: 10vh 0 0 26vh;
    width: 5vh;
    height: 3vh;
    position: absolute;
  }
}

@media screen and (max-width: 430px) {
  .container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30%;
  }

  .text {
    font-size: 2vh;
  }

  .barra-pesquisa {
    width: 90%;
  }

  .trabalhador {
    display: flex;
    flex-direction: column;
    width: 95%;
    height: 20vh;
  }

  .bolinha {
    width: 25vh;
    height: 19vh;
  }

  .apagar {
    margin: 15vh 0 0 32vh;
    width: 10vh;
    font-size: 1.5vh;
    height: 3vh;
    align-items: center;
    position: absolute;
  }
}
</style>
