<script setup>
const props = defineProps({
  title: String,
  imageUrl: String,
  instagramUrl: String
})

// Fonction pour résoudre dynamiquement le chemin des images dans Vite
const getImageUrl = (path) => {
  // On s'assure que path n'est pas vide pour éviter l'erreur au chargement
  if (!path) return '';
  return new URL(`${path}`, import.meta.url).href;
}
</script>

<template>
  <div class="asso_item">
    <div class="instagram_overlay" v-if="instagramUrl">
      <a :href="instagramUrl" target="_blank" class="insta_button">
        Voir le profil Instagram
      </a>
    </div>

    <h2 class="asso_title">{{ title }}</h2>
    
    <div class="item_container">
      <img :src="getImageUrl(imageUrl)" :alt="title" class="asso_img" />     
    </div>

    <div class="more_info">
      En savoir Plus
    </div>
  </div>
</template>

<style scoped>
/* --- Conteneur Principal : Carré et Petit --- */
.asso_item {
  position: relative;
  
  /* --- LA NOUVELLE TAILLE DU CARRÉ --- */
  width: 200px !important;
  height: 200px !important;
  min-width: 200px !important;
  max-width: 200px !important;
  min-height: 200px !important;
  max-height: 200px !important;
  
  flex: none !important; 
  /* ----------------------------------- */

  background: black;
  border: 2px solid #00a862; 
  border-radius: 16px; 
  padding: 15px; /* Un peu plus d'air à l'intérieur */
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  transition: transform 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

/* --- Titre --- */
.asso_title {
  color: #00a862;
  font-size: 0.8rem; /* Très compact */
  font-weight: 900;
  margin: 0 0 5px 0; /* Marge sous le titre réduite */
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 1;
  transition: filter 0.3s ease;
}

/* --- Zone de l'image (Prend tout l'espace carré restant) --- */
.item_container {
  position: relative;
  flex: 1; /* Occupe l'espace disponible */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0; /* Important pour que flex fonctionne bien dans un petit espace */
  margin-bottom: 5px; /* Laisse un tout petit peu d'espace pour le badge en bas */
}

.asso_img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* L'image s'adapte sans être coupée dans le carré */
  transition: transform 0.3s ease, filter 0.3s ease;
}

/* --- Overlay Instagram --- */
.instagram_overlay {
  position: absolute;
  inset: 0; 
  background: rgba(0, 0, 0, 0.8); /* Fond un peu plus sombre pour le contraste */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10; 
  padding: 10px; /* Pour éviter que le bouton ne touche les bords */
}

/* --- Bouton Instagram (Adapté au petit carré) --- */
.insta_button {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  color: white;
  /* Padding très fin pour faire rentrer le texte */
  padding: 6px 10px; 
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.6rem; /* Police minuscule obligatoire pour faire tenir le texte */
  border: 1px solid white;
  transform: translateY(15px);
  transition: transform 0.3s ease;
  text-align: center;
  line-height: 1.1;
  max-width: 100%; /* Empêche le bouton de dépasser du carré */
  white-space: normal; /* Autorise le texte à passer sur 2 lignes si vraiment nécessaire */
}

/* --- Badge "En savoir plus" --- */
.more_info {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #004d2c;
  border: 2px solid #00a862;
  border-bottom: none;
  border-right: none;
  padding: 2px 6px; /* Ultra minimaliste */
  border-top-left-radius: 8px; 
  font-size: 0.5rem; /* Quasi illisible mais présent pour le style */
  font-weight: bold;
  color: #00ff8c;
  z-index: 5;
}

/* --- ÉTATS AU SURVOL (HOVER) --- */
.asso_item:hover {
  transform: scale(1.05); 
  border-color: #00ff8c;
}

.asso_item:hover .instagram_overlay {
  opacity: 1;
}

.asso_item:hover .insta_button {
  transform: translateY(0); 
}

.asso_item:hover .asso_img {
  transform: scale(1.1); /* Zoom légèrement réduit pour rester dans le carré */
  filter: blur(3px) brightness(0.4);
}

.asso_item:hover .asso_title {
  filter: blur(2px);
  opacity: 0.5; /* On efface un peu le titre au survol pour focaliser sur le bouton */
}
</style>