<script setup>
const props = defineProps({
  titre: String,
  description: String,
  imageUrl: String // Ici tu passeras juste "agoraemagasin.png"
})

// Cette fonction va chercher l'image spécifiquement dans src/assets/
const getAssetUrl = (name) => {
  return new URL(`../assets/${name}`, import.meta.url).href
}
</script>

<template>
    <div class="card">
        <h3>{{ titre }}</h3>

        <div class="card-image-container">
            <img :src="getAssetUrl(imageUrl)" alt="Image du projet">
        </div>

        <div class="card-body">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 300px; 
  height: 400px; /* On fixe la hauteur de la carte */
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  background-color: #222; /* Fond de secours */
}

/* Le conteneur de l'image prend toute la place de la carte */
.card-image-container {
  width: 100%;
  height: 100%;
}

.card img {
  width: 100%;
  height: 100%; /* L'image force sa hauteur à 100% de la carte */
  object-fit: cover; /* MAGIE : L'image remplit le cadre sans être écrasée */
  object-position: center; /* Centre l'image si elle est rognée */
  display: block;
  transition: transform 0.5s ease;
}

/* Le reste du style reste identique */
.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
}

.card:hover .card-body {
  transform: translateY(0);
}

.card:hover img {
  transform: scale(1.1);
}

h3 {
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 2;
  color: white;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}
</style>