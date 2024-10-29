<script setup></script>
<template>
    <div class="app-container">
        <div class="content">
            <!-- Conteúdo principal vai aqui -->
            <h1>Bem-vindo ao Sistema Multi Trabalhista</h1>
            <p>Conteúdo da página.</p>
        </div>
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
                    <li>Política de privacidade</li>
                    <li>Termos de uso</li>
                </ul>
            </div>
            <div class="smt">
                <div>
                    <h5>©SistemaMultiTrabalhista, LLF</h5>
                </div>
            </div>
        </footer>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body, html {
    height: 100%; /* Garante que o corpo ocupe toda a altura */
}

.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Faz com que o contêiner ocupe toda a altura da tela */
}

.content {
    flex: 1; /* Permite que o conteúdo ocupe o espaço restante */
    padding: 20px; /* Adicione um pouco de preenchimento ao conteúdo */
}

footer {
    padding-top: 2vh;
    border-top: 1vh #00173d solid;
    background-color: black;
    width: 100%; /* O rodapé ocupa toda a largura da tela */
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

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

ul {
    list-style: none;
    font-size: 23px;
    margin-top: 3vh;
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
