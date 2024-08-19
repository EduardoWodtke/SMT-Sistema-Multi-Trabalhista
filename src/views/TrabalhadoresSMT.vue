<script setup></script>
<template>
    <div id="container">
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
        <div class="trabalhador"><div class="bolinha">IMG</div><p>Nome</p></div>
    </div>
</template>
<style scoped>
#container{
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 5vh;
}
.trabalhador{
    background-color: blueviolet;
    width: 54vh;
    font-size: 5vh;
    text-align: center;
    margin: 3vh;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 5vh;
    border-bottom-left-radius: 10vh;
    border-top-left-radius: 10vh;
}
.bolinha{
    background-color: yellow;
    border: 3px solid black;
    width: 20vh;
    border-radius: 20vh;
}

@media screen and (max-width: 1024px) {
    #container{
        display: grid;
        grid-template-columns: auto auto;
    }
    .trabalhador{
        width: 30vh;
        height: 10vh;
        margin: 2vh;
        font-size: 3vh;
    }
    .bolinha{
        width: 10vh;
    }
}
</style>