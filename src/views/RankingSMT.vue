<script setup>


</script>
<template>
 <div class="rank-page">
    <div class="rank-container">
      <div class="column column-third">
        <div class="column-title">Bronze</div>
        <div class="position-ball third">3</div>
      </div>
      <div class="column column-second">
        <div class="column-title">Prata</div>
        <div class="position-ball second">2</div>
      </div>
      <div class="column column-first">
        <div class="column-title">Ouro</div>
        <div class="position-ball first">1</div>
      </div>
    </div>

    <ul class="participants">
      <li>Participante 4</li>
      <li>Participante 5</li>
      <li>Participante 6</li>
      <li>Participante 7</li>
      <li>Participante 8</li>
    </ul>
  </div>
</template>
<style scoped>
.rank-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ocupa a altura total da tela */
  background-color: #e0e0e0; /* Cor de fundo */
}

.rank-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  position: relative;
}

.column {
  width: 100px; /* Largura fixa para todas as colunas */
  text-align: center;
  position: relative;
  background-color: #007bff; /* Azul */
  color: white;
  border-radius: 8px;
  margin: 0 10px; /* Espaçamento entre as colunas */
  bottom: 0; /* Base fixa na parte inferior */
}

.column-first {
  height: 200px; /* Altura do primeiro lugar */
}

.column-second {
  height: 160px; /* Altura do segundo lugar */
}

.column-third {
  height: 120px; /* Altura do terceiro lugar */
}

.column-title {
  position: absolute;
  bottom: 100%; /* Coloca o título acima da coluna */
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px; /* Espaçamento entre o título e a coluna */
}

.position-ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  position: absolute;
  bottom: calc(100% + 5px); /* Coloca a bola acima da coluna */
  left: 50%;
  transform: translateX(-50%);
}

.first {
  background-color: #ffd700; /* Bola de ouro */
}

.second {
  background-color: #c0c0c0; /* Bola de prata */
}

.third {
  background-color: #cd7f32; /* Bola de bronze */
}

.participants {
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  list-style-type: none;
  padding: 0;
}

.participants li {
  background-color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

</style>