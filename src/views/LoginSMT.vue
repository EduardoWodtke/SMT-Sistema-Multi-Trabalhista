<script setup></script>
<template>
    <div id="container">
        <div class="login">
            <h1>Login</h1>
            <router-link to="Register" class="passage">Register</router-link>
        </div>
    </div>
</template>
<style scoped>
#container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 65vh;
    .login {
        display: flex;
        flex-direction: column;
        background-color: #00173d;
        width: 50vh;
        height: 50vh;
        border-radius: 2vh;
        margin-top: 5vh;
        justify-content: space-between;
        h1{
            margin: 2vh;
            text-align: center;
            border-bottom: 1px white solid;
        }
        .passage{
            text-decoration: none;
            text-align: center;
            font-size: 2vh;
            border: solid 1px white;
            width: 20vh;
            border-radius: 1vh;
            margin-bottom: 2vh;
            margin-left: 15vh;
        }
        .passage:hover{
                background-color: #083070;
            }
    }
}
</style>