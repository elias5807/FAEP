<script setup>
import TitreBureau from '../components/TitreBureau.vue'
import BureauCard from '../components/BureauCard.vue'
import Footer from '../components/Footer.vue'
</script>
    
<template>
    <div class="body">
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Présidence" />
            <div class="bureau_container">   
                <BureauCard nom="BERTRAND Florian" imageUrl="../assets/Bureau/president.png" titre="Président"/>
                <BureauCard nom="LECOMPTE Julia" imageUrl="../assets/Bureau/julia.png" titre="Secrétaire en charge de la Formation"/>
                <BureauCard nom="DOMBROWSKI Jean" imageUrl="../assets/Bureau/jean.png" titre="VPG en charge de la Communication"/>
                <BureauCard nom="MAHMOUD Lara" imageUrl="../assets/Bureau/lara.png" titre="Trésorière"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="AGORAé" />
            <div class="bureau_container">   
                <BureauCard nom="PHILIPPE Carla" imageUrl="../assets/Bureau/carlo.png" titre="CM AGORAé"/>
                <BureauCard nom="LEJEUNE Aurélien" imageUrl="../assets/Bureau/orel.png" titre="VP partenariat"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Réseau/Formation" />
            <div class="bureau_container">   
                <BureauCard nom="COTÉ Jeanne" imageUrl="../assets/Bureau/jeanne.png" titre="CM Réseau"/>
                <BureauCard nom="STRUZIK Thibaut" imageUrl="../assets/Bureau/thibault.png" titre="CM Formation"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Communication " />
            <div class="bureau_container">   
                <BureauCard nom="MERCIER Lux" imageUrl="../assets/Bureau/lux.png" titre="VP Communication"/>
                <BureauCard nom="SALEK Chaimaa" imageUrl="../assets/Bureau/chaima.png" titre="CM Communication"/>
                <BureauCard nom="SARMIENTO Paul" imageUrl="../assets/Bureau/pole.png" titre="CM SI"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Bien etre étudiant" />
            <div class="bureau_container">   
                <BureauCard nom="DUVERGER Ann-Klémence" imageUrl="../assets/Bureau/ak.png" titre="VP affaire social"/>
                <BureauCard nom="VANELSTLANDE Camille" imageUrl="../assets/Bureau/camille.png" titre="VP Affaires de santé"/>
                <BureauCard nom="ROUSSEL Émilien" imageUrl="../assets/Bureau/emilien.png" titre="VP Politique de jeunesse en charge de la lutte contre les discriminations"/>
                <BureauCard nom="Mcclure Jared" imageUrl="../assets/Bureau/jared.png" titre="VP Handicap en charge de la défense des droits"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Event" />
            <div class="bureau_container">   
                <BureauCard nom="ZMELTY Élisa" imageUrl="../assets/Bureau/elisa.png" titre="VP Évenmentiel"/>
                <BureauCard nom="RIDEAUX Audrey" imageUrl="../assets/bureau/president.jpg" titre="VP Évenmentiel"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Transition ecologique" />
            <div class="bureau_container">   
                <BureauCard nom="LEGRAND Laetitia" imageUrl="../assets/Bureau/laeticia.png" titre="VP transition écologique"/>
                <BureauCard nom="KIBONGÉ SACHA" imageUrl="../assets/Bureau/sacha.png" titre="CM transition écologique"/>
            </div>
        </div>
        <div class="bureau">
            <TitreBureau class="titre_bureau" title="Suivi des élus" />
            <div class="bureau_container">   
                <BureauCard nom="CHIÊU Margot" imageUrl="../assets/Bureau/margaux.png" titre="VP stratégie électorale"/>
                <BureauCard nom="CACHEUX Hana" imageUrl="../assets/Bureau/ana.png" titre="VP suivi des élus centraux"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
.body {
    /* Fond fixe */
    background-image: url('../assets/bureau/fond.png');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    
    /* On enlève le height: 100vh qui causait le scroll infini */
    min-height: 100vh; 
    width: 100%;
    
    /* Gestion de l'espacement */
    padding-top: 10%; /* Réduit pour éviter de pousser le contenu trop bas dès le début */
    /* Couleur de superposition */
    background-color: rgba(35, 123, 85, 0.85);
    background-blend-mode: multiply; /* Plus efficace que overlay pour assombrir le fond */
    
}

.bureau {
    margin-bottom: 10%; /* Réduit au lieu de 10% pour limiter la longueur totale */
}

.bureau_container {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px; /* Utilise gap au lieu de margins complexes */
    margin: 20px auto;
    max-width: 1200px;
}

/* Style des cartes pour qu'elles soient nettes sur le fond */
:deep(.bureau_card) {
    background: white;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    flex: 0 1 250px; /* Définit une taille de base pour les cartes */
}

/* On s'assure que le footer ne crée pas de vide inutile */
footer {
    margin-top: 20px;
}

@media (max-width: 768px) {
    .body {
        padding-top: 80px;
    }
    .bureau {
        margin-bottom: 30px;
    }
}
</style>