<script setup>
// On définit les "props" : les données que le parent va envoyer
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="engagement_item">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>


<style scoped>
.engagement_item {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 107, 62, 0.45);
  
  /* 2. L'effet de flou magique */
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px); /* Compatibilité Safari */
  
  /* 3. Une bordure fine et semi-transparente pour simuler le rebord du verre */
  border: 1px solid rgba(255, 255, 255, 0.18);
  
  /* Dimensions et forme */
  width: 320px;
  padding: 30px;
  border-radius: 25px;
  
  /* Alignement */
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  
  /* Ombre portée plus douce pour l'effet de profondeur */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  
  /* Transition pour un effet fluide au survol */
  transition: transform 0.3s ease, border-color 0.3s ease;
}

/* Petit effet au survol pour rendre le site vivant */
.engagement_item:hover {
  transform: translateY(-5px);

}

.engagement_item h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  min-height: 3.5rem;
  display: flex;
  align-items: center;
  /* Ombre portée sur le texte pour garantir la lisibilité sur le flou */
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.item_image_placeholder {
  width: 100%;
  height: 180px;
  /* Un blanc très légèrement transparent pour s'accorder au reste */
  background-color: rgba(255, 250, 250, 0.9); 
  border-radius: 20px;
  margin-bottom: 25px;
}

.engagement_item p {
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: justify;
  /* Légère ombre pour que le texte "pop" sur le fond flou */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
</style>