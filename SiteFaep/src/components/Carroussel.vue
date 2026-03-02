<script setup>
import { ref, computed } from 'vue';
import ProjetCard from './ProjetCard.vue';

// 1. Tes données dans un tableau pour pouvoir les manipuler
const projets = ref([
  { id: 1, titre: "Agora en magasin", img: "agoraemagasin.png", desc: "Sensibilisation à la consommation responsable." },
  { id: 2, titre: "Journée d'accueil", img: "JAE.png", desc: "Activités et conférences environnementales." },
  { id: 3, titre: "Distribution de repas", img: "distribution.png", desc: "Solidarité pour les étudiants en difficulté." },
  { id: 4, titre: "Collecte de vêtements", img: "collecte.png", desc: "Points de collecte sur le campus." },
  { id: 5, titre: "Santé mentale", img: "santementale.png", desc: "Ateliers sur le bien-être mental." }
]);

const currentIndex = ref(0);

// 2. Logique pour la boucle infinie
const next = () => {
  // On déplace le premier élément à la fin du tableau
  const first = projets.value.shift();
  projets.value.push(first);
  // On met à jour l'index du point actif
  currentIndex.value = (currentIndex.value + 1) % projets.value.length;
};

const prev = () => {
  // On déplace le dernier élément au début du tableau
  const last = projets.value.pop();
  projets.value.unshift(last);
  // On met à jour l'index du point actif
  currentIndex.value = (currentIndex.value - 1 + projets.value.length) % projets.value.length;
};
</script>

<template>
  <div class="carousel-container">
    <div class="carousel-wrapper">
      <button class="nav-btn prev" @click="prev"><span>&#10094;</span></button>

      <div class="viewport">
        <transition-group name="list" tag="section" class="outro">
          <ProjetCard 
            v-for="projet in projets" 
            :key="projet.id"
            :titre="projet.titre"
            :description="projet.desc"
            :image-url="projet.img"
          />
        </transition-group>
      </div>

      <button class="nav-btn next" @click="next"><span>&#10095;</span></button>
    </div>

    <div class="dots">
      <span 
        v-for="(p, index) in projets.length" 
        :key="index"
        :class="['dot', { active: index === currentIndex }]"
      ></span>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  max-width: 1100px; /* (300px * 3) + (20px * 2 gap) + padding */
  margin: 50px auto;
  text-align: center;
  background-color: #007040;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.viewport {
  width: 940px; /* Largeur exacte pour 3 cartes de 300px + gaps */
  overflow: hidden; /* Cache les autres cartes */
  margin: 0 auto;
}

.outro {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}

/* On s'assure que ProjetCard garde ses 300px */
.outro > * {
  flex: 0 0 300px; 
}

/* --- Animation de transition --- */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* --- Flèches --- */
.nav-btn {
  background: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 10;
  font-size: 1.2rem;
  margin: 2%;
}

/* --- Dots --- */
.dots {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  background: #ccc;
  border-radius: 50%;
  transition: all 0.3s;
}

.dot.active {
  background: #ffffff;
  transform: scale(1.3);
}

@media (max-width: 1000px) {
  .viewport { width: 620px; } /* 2 cartes */
}
@media (max-width: 650px) {
  .viewport { width: 300px; } /* 1 carte */
}
</style>