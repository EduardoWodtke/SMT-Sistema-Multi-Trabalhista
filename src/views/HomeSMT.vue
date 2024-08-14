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
  margin: 15% 0 0 23%;
  text-shadow: black 3px 3px 3px;
  font-size: 7vh;
  -webkit-text-stroke: 2px white;
  font-family: 'New Amsterdam', sans-serif;
}

@media screen and (max-width: 1024px) {
  h3 {
    font-size: 3.7vh; 
    -webkit-text-stroke: 0.7px white;
    margin: 15% 15%;
  }
  .map img {
    width: 50%;
    margin-top: 2.5vh;
  }
}
@media screen and (max-width: 430px) {
  h3{
    font-size: 2.3vh;
    -webkit-text-stroke: 0.13;
    margin-top: 30%;
  }
  .map img{
    width: 60%;
    margin: 5% 0 0 20%;
  }
  .slide img {
    width: 100%;
    height: 25vh;
  }
}
</style>
