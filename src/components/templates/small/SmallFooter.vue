<script setup></script>
<template>
    <footer>
        <div class="icones">
            <router-link to="/"> <i class="mdi mdi-account-outline"></i></router-link>
            <router-link to="/"><i class="mdi mdi-home-outline"></i></router-link>
            <router-link to="/"><i class="mdi mdi-hammer-wrench"></i></router-link>           
            <i class="mdi mdi-menu"></i>
        </div>
    </footer>
</template>
<style scoped>
footer {
    display: flex;
    position: fixed ;
    width: 100%;
    bottom: 0;
    border: #00173d solid 5px;
    background-color: black;
    padding: 20px;
    text-align: center;
}
.icones {
    display: flex;
    justify-content: space-around;
    font-size: 6.5vh;
    width: 50vh;
}
</style>