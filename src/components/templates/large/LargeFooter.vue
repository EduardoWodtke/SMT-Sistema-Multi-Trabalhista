<script setup></script>
<template>
    <footer>
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
#termos{
    list-style: none;
    font-size: 23px;
    font-family: "Ubuntu" sans-serif;
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
    font-family: "Ubuntu", sans-serif;
}

#redes-sociais {
    display: flex;
    flex-direction: row;
    font-size: 5vh;
}

#redes-sociais i {
    padding: 2vh;
}
</style>