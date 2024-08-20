<script setup>
    import "@passageidentity/passage-elements/passage-auth";
</script>

<template>
    <div class="conteiner">
        <h1>Login</h1>
        <div class="authContainer">
          <passage-auth app-id="Lgg0H2jX9eM2ZIRkAsJgfIqW"></passage-auth>
        </div>
    </div>
</template>

<style>
.conteiner{
    margin: 8%;
}

@media (max-width: 1240px){
    .conteiner{
     margin: 0 0 10% 0;
    }
}
</style>