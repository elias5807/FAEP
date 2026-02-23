<script setup>
// On définit les "props" : les données que le parent va envoyer
defineProps({
  nom: String,
  imageUrl: String,
  titre: String
})

const getImageUrl = (path) => {
  if (!path) return ''; // Petite sécurité si l'image n'est pas chargée
  return new URL(path, import.meta.url).href;
}
</script>

<template>
    <div class="card">  
        <h2 class="titre_item">{{ titre }}</h2>
        
        <div class="img_container">
            <img :src="getImageUrl(imageUrl)" :alt="nom" class="asso_img" /> 
        </div>
        
        <div class="nom_item">
            {{ nom }}
        </div>
    </div>
</template>

<style scoped>
/* --- La Carte --- */
.card {
    background-color: #107c41; /* Le vert foncé de ton image */
    border-radius: 40px; /* Bords très arrondis (effet squircle) */
    padding: 25px 20px;
    border: 1px solid #00EC87;
    
    /* Layout Flexbox centré */
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between;
    
    /* Dimensions */
    width: 240px; 
    min-height: 300px;
    box-sizing: border-box;
    
    /* Effets visuels */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
    color: white;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

/* Effet au survol de la carte */
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.35);
}

/* --- Le Nom (en haut) --- */
.nom_item {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 800;
    text-align: center;
    letter-spacing: 0.5px;
    color: white;
}

/* --- L'Anneau Autour de la Photo --- */
.img_container {
    width: 145px;
    height: 145px;
    border-radius: 50%;
    
    /* Le fameux dégradé de l'anneau : Blanc en haut, Vert clair en bas */
    background: linear-gradient(160deg, #ffffff 10%, #8bd2a8 85%);
    padding: 6px; /* C'est ce padding qui crée l'épaisseur de l'anneau */
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0; /* Espace autour de l'image */
}

/* --- La Photo --- */
.asso_img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Remplit le rond sans écraser la photo */
    border-radius: 50%; /* Rend la photo ronde */
    background-color: #f0f0f0; /* Fond clair par défaut avant chargement */
}

/* --- Le Titre / Rôle (en bas) --- */
.titre_item {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 700;
    text-align: center;
    color: white;
}
</style>