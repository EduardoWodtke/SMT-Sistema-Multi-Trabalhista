<script setup></script>
<template>
    <footer>
        <div class="footer">
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
    </div>
        <div class="smt">
            <div>
            <p>©SistemaMultiTrabalhista, LLF</p>
        </div>
    </div>
    </footer>
</template>
<style scoped>
.smt {
  display: flex;
  justify-content: center;
  width: 100%;
}

.smt div {
  width: 50%;
  border-top: 0.1vh solid white;
  display: flex;
  justify-content: center;
  font-size: 1.5vh;
}
ul{
    list-style: none;
    font-size: 23px;
    margin-top: 3vh;
}
footer{
    padding-top: 2vh;
    border-top: 1vh #00173d solid;
    background-color: black;
    display: block;
    width: 100%;
    bottom: 0;
    position: relative;
}
.footer {
    display: flex;
    flex-direction: row;
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