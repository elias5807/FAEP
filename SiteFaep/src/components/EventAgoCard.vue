<script setup>
const props = defineProps({
  titre: String,
  lienUrl: String,
  imageUrl: String // Ici tu passeras juste "agoraemagasin.png"
})

// Cette fonction va chercher l'image spécifiquement dans src/assets/
const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}

const openLink = () => {
  if (props.lienUrl) window.open(props.lienUrl, '_blank');
}
</script>

<template>
  <div class="card">
    <div class="titre_item"><h2>{{ titre }}</h2></div>

    <div 
      class="img_container" 
      :style="{ backgroundImage: `url('${getAssetUrl(imageUrl)}')` }"
    > 
      <button class="hover_button" @click="openLink">En savoir plus</button>
    </div>
  </div>
</template>

<style scoped>
.card {
    background-color: #C3F1FE;
    border: 2px solid white;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
    overflow: hidden;
    box-sizing: border-box; 
    height: 320px;
    width: 30%;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.titre_item {
  text-align: center;
  background: #15A995;
}

.titre_item h2 {
  font-size: 1.2rem;
  margin: 15px 0;
  font-weight: 700;
  color: white;
}

.img_container {
  flex: 1; /* Remplit tout le reste de la carte */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f0f0f0; /* Couleur de secours si l'image ne charge pas */
}

/* On peut ajouter un petit overlay sombre au survol pour mieux voir le bouton */
.img_container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .img_container::before {
  opacity: 1;
}

.hover_button {
  position: relative; /* Pour passer au dessus du before */
  z-index: 1;
  background-color: #15A995;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(10px);
}

.card:hover .hover_button {
  opacity: 1;
  transform: translateY(0);
}

.hover_button:hover {
  background-color: #00a862;
  transform: scale(1.05);
}
</style>