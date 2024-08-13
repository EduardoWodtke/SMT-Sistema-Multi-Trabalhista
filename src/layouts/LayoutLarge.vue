<script setup>
import LargeHeader from '@/components/templates/large/LargeHeader.vue'
import LargeNav from '@/components/templates/large/LargeNav.vue'
import LargeFooter from '@/components/templates/large/LargeFooter.vue'
</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
      <large-nav />
    </header>
    <!-- <aside></aside> -->
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
  </div>
</template>
<style scoped>
footer {
  margin: 35% 0 0 0;
}
</style>
