<template>
  <nav class="navbar">
    <div class="logo">FAEP</div>
    
    <ul class="nav-links">
      <li><a href="/">Accueil</a></li>
      <li><a href="/bureau">Bureau</a></li>
      <li><a href="#">Agorae</a></li>

      <li 
        class="dropdown" 
        @mouseenter="isOpen = true" 
        @mouseleave="isOpen = false"
      >
        <button class="dropdown-trigger">
          Mon campus 
          <span :class="['arrow', { 'arrow-up': isOpen }]">▼</span>
        </button>

        <transition name="fade-slide">
          <ul v-if="isOpen" class="dropdown-menu">
            <li><a href="#">IUT</a></li>
            <li><a href="#">Ctadelle</a></li>
          </ul>
        </transition>
      </li>
  
      <li 
        class="dropdown" 
        @mouseenter="isOpen2 = true" 
        @mouseleave="isOpen2 = false"
      >
        <button class="dropdown-trigger">
          Innovations 
          <span :class="['arrow', { 'arrow-up': isOpen2 }]">▼</span>
        </button>

        <transition name="fade-slide">
          <ul v-if="isOpen2" class="dropdown-menu">
            <li><a href="#">Transition écologique</a></li>
            <li><a href="#">Santé</a></li>
          </ul>
        </transition>
      </li>

      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const isOpen2 = ref(false);
</script>

<style scoped>
/* 1. Fixer la navbar en haut de l'écran */
.navbar {
  position: fixed;
  top: 15px; /* Petit espacement du haut pour le style */
  left: 50%;
  transform: translateX(-50%); /* Centrage horizontal de la barre */
  width: 95%;
  max-width: 1200px;
  z-index: 99999; /* Priorité maximale sur GSAP */
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  
  /* Effet Glassmorphism */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px; /* Bords très arrondis comme l'image d'engagement */
  color: white;
}

.logo {
  font-weight: 900;
  font-size: 1.5rem;
  color: white; /* Vert FAEP */
  letter-spacing: 1px;
}

/* 2. Liens de navigation */
.nav-links {
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  align-items: center;
}

.nav-links a, .dropdown-trigger {
  color: white;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.6rem 1rem;
  transition: all 0.3s ease;
  border-radius: 20px;
}

.nav-links a:hover, .dropdown-trigger:hover {
  background: rgba(0, 128, 0, 0.2);
  color: #00ff00;
}

/* 3. Logique du Dropdown (Menu déroulant) */
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 15px); /* Espacement sous la barre */
  left: 50%;
  transform: translateX(-50%);
  
  /* Look Glassmorphism plus sombre pour le menu */
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  
  min-width: 220px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 10px;
  list-style: none;
  box-shadow: 0 15px 35px rgba(0,0,0,0.5);
}

.dropdown-menu li a {
  color: white;
  display: block;
  padding: 12px 20px;
  border-radius: 12px;
  text-align: left;
}

.dropdown-menu li a:hover {
  background-color: rgba(0, 128, 0, 0.4);
  color: white;
  padding-left: 25px; /* Petit effet de décalage au hover */
}

/* 4. Animations */
.arrow {
  font-size: 0.6rem;
  margin-left: 5px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
}

.arrow-up {
  transform: rotate(180deg);
  color: #00ff00;
}

/* Transition Vue (Fade + Slide) */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(20px); /* On garde le centrage X */
}
</style>