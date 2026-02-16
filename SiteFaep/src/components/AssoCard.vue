<script setup>
// Définition des props
const props = defineProps({
  title: String,
  imageUrl: String,
  instagramUrl: String
})

// Fonction pour résoudre dynamiquement le chemin des images dans src/assets
// Note : Si tu déplaces tes images dans le dossier 'public', cette fonction n'est plus nécessaire,
// tu pourras juste utiliser :src="imageUrl"
const getImageUrl = (path) => {
  return new URL(path, import.meta.url).href
}
</script>

<template>
  <div class="asso_item">
    <h2>{{ title }}</h2>
    
    <div class="item_container">
      <img :src="getImageUrl(imageUrl)" :alt="title" class="asso_img" />     
      
      <div v-if="instagramUrl" class="instagram_overlay">
        <a :href="instagramUrl" target="_blank" class="insta_button">
          Voir le profil Instagram
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.asso_item {
  background-color: black;
  border: 5px solid #006b3e;
  width: 320px;
  height: 320px;
  min-height: 350px; 
  padding: 25px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  color: white;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.asso_item:hover {
  transform: translateY(-5px);
  border-color: #00a862; /* On éclaircit un peu le vert au survol */
}

.asso_item h2 {
  font-size: 1.4rem;
  font-weight: 700;
  min-height: 3.5rem;
  display: flex;
  justify-content: center;
  color:#00a862;
}

.item_container {
  position: relative;
  width: 100%;
  flex-grow: 1; /* Prend l'espace restant dans la carte */
  height: 220px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #1a1a1a; /* Fond sombre en attendant le chargement */
}

.asso_img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  transition: filter 0.3s ease, transform 0.5s ease;
}

.instagram_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 107, 62, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}

.asso_item:hover .instagram_overlay {
  opacity: 1;
}

.asso_item:hover .asso_img {
  filter: blur(3px);
  transform: scale(1.1); /* Petit effet de zoom sur l'image au survol */
}

.insta_button {
  background-color: white;
  color: #006b3e;
  padding: 12px 20px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.insta_button:hover {
  background-color: #f0f0f0;
  transform: scale(1.1);
}
</style>