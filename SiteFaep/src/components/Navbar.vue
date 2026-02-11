<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <div class="logo">FAEP</div>
    <ul class="nav-links">
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to="/about">À propos</RouterLink></li>
        <li><RouterLink to="#">Page</RouterLink></li>
        <li><RouterLink to="#">Page</RouterLink></li>
        <li><RouterLink to="#">Page</RouterLink></li>
        <li><RouterLink to="#">Page</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Le mot "scoped" garantit que ce style ne s'applique qu'à ce composant */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

/* Style pour le lien de la page où l'on se trouve actuellement */
.router-link-active {
  color: #42b883; /* Le vert de Vue ! */
  border-bottom: 2px solid #42b883;
}
</style>