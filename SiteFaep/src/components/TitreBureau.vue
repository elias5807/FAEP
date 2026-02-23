<script setup>
defineProps({
  title: {
    type: String,
    default: 'Titre'
  }
})
</script>

<template>
  <div class="titre_container">
    <h2 class="titre_texte">{{ title }}</h2>
  </div>
</template>

<style scoped>
/* --- Le Conteneur du Titre (Taille Réduite) --- */
.titre_container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* Largeur maximale réduite (était à 650px) */
  max-width: 450px; 
  /* Hauteur minimale réduite (était à 90px) */
  min-height: 55px; 
  
  /* Marge basse un peu réduite (était à 40px) */
  margin: 0 auto 25px auto; 
  /* Padding réduit pour affiner la boîte */
  padding: 5px 20px; 
  box-sizing: border-box;

  background: linear-gradient(90deg, rgba(14, 193, 116, 0.95) 0%, #007040 40%, #007040 60%, rgba(14, 193, 116, 0.95) 100%);
  border: 2px solid rgba(255, 255, 255, 0.8); 
  border-radius: 40px; /* Légèrement ajusté pour la nouvelle hauteur */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2); /* Ombre légèrement adoucie */
}

/* --- Le Texte du Titre (Taille Réduite) --- */
.titre_texte {
  margin: 0; 
  color: white;
  
  /* Police plus petite : de ~20px sur mobile jusqu'à ~36px sur grand écran (était de 32px à 64px) */
  font-size: clamp(1.2rem, 4vw, 2.2rem); 
  
  font-weight: 800; 
  letter-spacing: 1.5px; /* Espacement réduit pour s'adapter à la petite taille */
  text-transform: uppercase; 
  text-align: center;
  
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); 
}
</style>