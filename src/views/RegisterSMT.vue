<script setup>
import { useRouter } from 'vue-router'
import '@passageidentity/passage-elements/passage-auth'

const router = useRouter()

const handleloginSuccess = () => {
  router.push({ name: 'Login' })
}
</script>

<template>
  <div class="conteiner">
    <h1>Login</h1>
    <div class="authContainer">
      <passage-auth app-id="Lgg0H2jX9eM2ZIRkAsJgfIqW" @authenticated="handleloginSuccess" />
    </div>
  </div>
</template>

<style>
.conteiner {
  margin-top: 5vh;
  min-height: 60.8vh;
}

@media (max-width: 1240px) {
  .conteiner {
    margin: 0 0 10% 0;
  }
}
</style>
