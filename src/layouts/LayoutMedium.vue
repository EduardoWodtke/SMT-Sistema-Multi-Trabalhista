<script setup>
import MediumHeader from "@/components/templates/medium/MediumHeader.vue";
import MediumFooter from "@/components/templates/medium/MediumFooter.vue";
import MediumNav from "@/components/templates/medium/MediumNav.vue";
</script>

<template>
  <div id="layout-medium">
    <header>
      <medium-header />
    </header>
    <nav>
      <medium-nav />
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      <medium-footer />
    </footer>
  </div>
</template>
<style scoped>
</style>
