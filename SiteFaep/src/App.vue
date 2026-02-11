<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue' // On importe notre composant
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
/* Style global pour toute l'application */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
</style>