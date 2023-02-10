<template>
  <header>
    <NavbarComponent />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterComponent />
  </footer>

</template>

<script setup>
import { RouterView } from 'vue-router'
import FooterComponent from "./components/FooterComponent.vue";
import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<style>

</style>
