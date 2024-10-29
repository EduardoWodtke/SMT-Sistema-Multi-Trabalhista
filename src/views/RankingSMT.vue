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
  height: 100vh;
  background-color: #e0e0e0;
}

.rank-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 90vw;
  margin-bottom: 20px;
  position: relative;
}

.column {
  flex: 1; 
  text-align: center;
  position: relative;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  margin: 0 10px;
  bottom: 0;
  min-width: 80px; 
}

.column-first {
  height: 25vh; 
}

.column-second {
  height: 20vh;
}

.column-third {
  height: 15vh;
}

.column-title {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 5px;
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
  bottom: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
}

.first {
  background-color: #ffd700;
}

.second {
  background-color: #c0c0c0;
}

.third {
  background-color: #cd7f32;
}

.participants {
  margin-top: 20px;
  width: 100%;
  max-width: 90vw;
  list-style-type: none;
  padding: 0;
  color: black !important;
}

.participants li {
  background-color: white;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

li {
  color: rgb(85, 85, 85);
}


@media (max-width: 600px) {
  .column {
    margin: 0 5px;
  }

  .position-ball {
    width: 40px;
    height: 40px;
  }

  .column-title {
    font-size: 0.8rem;
  }

  .participants li {
    font-size: 0.9rem;
  }
}
</style>
