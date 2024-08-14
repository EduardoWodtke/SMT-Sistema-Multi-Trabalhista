<script setup></script>
<template>
  <div class="slide">
    <img src="@/assets/trabalhadores.jpeg" alt="" />
    <h3>O que teu marido não faz nós fazemos...</h3>
  </div>
  <div class="map">
    <img src="@/assets/mapa.jpeg" alt="" />
  </div>
</template>
<style>

.map img {
  width: 35%;
  display: block;
  margin: 5vh auto;
  box-shadow: 3px 0.3vh 2vh black;
  border: solid black 3px;
}
.slide {
  display: flex;
}
.slide img {
  border: solid black 3px;
  width: 100%;
  box-shadow: 3px 0.3vh 2vh black;
}
h3 {
  color: rgb(0, 0, 0);
  position: absolute;
  margin: 12% 0 0 23%;
  text-shadow: black 3px 3px 3px;
  font-size: 7vh;
  -webkit-text-stroke: 2px white;
  font-family: 'New Amsterdam', sans-serif;
}
</style>
