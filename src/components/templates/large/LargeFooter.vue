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
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.content {
    flex: 1; /* Permite que o conteúdo ocupe o espaço restante */
    padding: 20px; /* Adicione um pouco de preenchimento ao conteúdo */
}

footer {
    padding-top: 2vh;
    border-top: 1vh #00173d solid;
    background-color: black;
    color: white;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap; /* Garante que o conteúdo se adapte em telas menores */
    gap: 20px; /* Espaçamento entre os elementos */
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
    text-align: center;
}

ul {
    list-style: none;
    font-size: 20px;
    margin-top: 3vh;
    text-align: center;
}

ul li {
    margin-bottom: 10px;
}

.contatos h2 {
    text-align: center;
    font-size: 2em; /* Usa unidades responsivas */
}

#redes-sociais {
    display: flex;
    flex-direction: row;
    font-size: 5vh;
    margin-top: 5px;
    justify-content: center;
    gap: 15px; /* Espaçamento entre os ícones */
}

#redes-sociais i {
    padding: 1vh;
    cursor: pointer;
    transition: transform 0.3s; /* Efeito de hover */
}

#redes-sociais i:hover {
    transform: scale(1.2); /* Amplia o ícone no hover */
}

/* Responsividade */
@media (max-width: 1200px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }

    ul {
        font-size: 18px;
    }

    .smt div {
        width: 80%;
        font-size: 1.2vh;
    }
}

@media (max-width: 768px) {
    .footer {
        gap: 10px;
    }

    ul {
        font-size: 16px;
    }

    .contatos h2 {
        font-size: 1.8em;
    }

    #redes-sociais {
        font-size: 4vh;
    }

    .smt div {
        width: 90%;
        font-size: 1vh;
    }
}
</style>

