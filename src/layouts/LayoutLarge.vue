<script setup>
  import LargeHeader from '@/components/templates/large/LargeHeader.vue';
  import LargeNav from '@/components/templates/large/LargeNav.vue';
  import LargeFooter from '@/components/templates/large/LargeFooter.vue';
</script>
<template>
  <div id="layout-large">
    <header>
      <large-header />
    </header>
    <aside>
      <large-nav />
    </aside>
    <main>
      <router-view />
    </main>
    <footer>
      <large-footer />
    </footer>
  </div>
</template>
<style scoped>
footer{
  margin: 50% 0 0 0;
}
</style>