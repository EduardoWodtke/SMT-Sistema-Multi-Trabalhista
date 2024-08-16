<script setup></script>
<template>
    <footer>
        <ul id="suporte">
            <li>Ajuda</li>
            <li>Perguntas</li>
            <li>Sobre Nós</li>
        </ul>
        <div class="contatos">
            <h2>Contate-nos</h2>
            <ul id="redes-sociais">
                <i class="mdi mdi-whatsapp"></i>
                <i class="mdi mdi-gmail"></i>
                <i class="mdi mdi-phone"></i>
                <i class="mdi mdi-instagram"></i>
                <i class="mdi mdi-twitter"></i>
            </ul>
        </div>
        <ul id="termos">
            <li>Cookies</li>
            <li>Politica de privacidade</li>
            <li>Termos de uso</li>
        </ul>
    </footer>
</template>
<style scoped>
ul{
    list-style: none;
    font-size: 23px;
    margin-top: 3vh;
}

footer {
    background-color: black;
    display: flex;
    flex-direction: row;
    padding-top: 2vh;
    border-top: 1vh #00173d solid;
    justify-content: space-around;
    
}

.contatos h2 {
    text-align: center;
    font-size: 4vh;
}

#redes-sociais {
    display: flex;
    flex-direction: row;
    font-size: 5vh;
    margin-top: 5px;
}

#redes-sociais i {
    padding: 1vh;
}
</style>