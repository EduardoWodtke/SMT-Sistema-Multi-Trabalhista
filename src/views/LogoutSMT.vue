<script setup>
import { onMounted} from 'vue'
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router'
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
  authStore.unsetToken()
  localStorage.removeItem('psg_auth_token')
  router.push({ name: 'home' })
})
</script>

<template>
  <h1>Logging out..</h1>
  <p>dfjkhasesgfhuagfhiu</p>
</template>

<style>
h1{
  color: black;
}
p{
  color: black;
}
</style>