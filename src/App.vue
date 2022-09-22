<script setup>
import navbarVue from './components/navbar.vue';
import footers from './components/footer.vue'
</script>

<template>
  <div class="">
    <navbarVue />
    <RouterView />
    <footers/>
  </div>
</template>

