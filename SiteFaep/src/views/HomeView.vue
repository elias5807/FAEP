<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// On enregistre le plugin
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const triggerRef = ref(null)

onMounted(() => {
  const pin = gsap.fromTo(sectionRef.value, 
    { x: 0 }, 
    {
      x: "-200vw", // On fait glisser de 2 fois la largeur de l'écran
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.value,
        start: "top top",
        end: "2000 top", // Vitesse du scroll (plus c'est grand, plus c'est lent)
        scrub: 0.6,      // Effet de lissage (très important pour le côté fluide)
        pin: true,       // Bloque la page verticalement
        anticipatePin: 1,
      }
    }
  )
  
  // Nettoyage quand on quitte la page
  return () => pin.kill()
})

//engagements
import EngagementCard from '../components/EngagementCard.vue'

// On crée une liste propre avec tes données
const engagements = [
  {
    id: 1,
    titre: "La lutte contre la précarité",
    texte: "Nous mettons en place des épiceries solidaires et des aides d'urgence pour tous les étudiants."
  },
  {
    id: 2,
    titre: "Défense des droits",
    texte: "Représentation et accompagnement des étudiants face aux problématiques académiques."
  },
  {
    id: 3,
    titre: "Animation du campus",
    texte: "Organisation d'événements culturels et sportifs pour dynamiser la vie étudiante."
  }
]

// les associations
import AssoCard from '../components/AssoCard.vue'

const associations = [
  { id: 1, nom: "InfoContact", image: "../assets/BDElogo/infocontact.png", insta: "https://..." },
];
</script>

<template>
  <div class="scroll-wrapper">
    <section class="intro">
      <h1 class="intro_titre">FAEP</h1>
      <p class="intro_text">Fédération des Associations Étudiantes Problématiques</p>
    </section>


    <section class="engagement">
      <h1 class="engagement_titre">Nos engagements</h1>
      
      <div class="engagement_content">
        <EngagementCard 
          v-for="item in engagements" 
          :key="item.id"
          :title="item.titre"
          :description="item.texte"
        />
      </div>
    </section>

    <div ref="triggerRef">
      <div ref="sectionRef" class="horizontal-container">
        <div class="panel section-1">
          <h2>Nos associations</h2>
        </div>

        <div class="asso_grid">
          <AssoCard 
            v-for="asso in associations" 
            :key="asso.id"
            :title="asso.nom"
            :image-url="asso.image"
            :instagram-url="asso.insta"
          />
        </div>

        <div class="panel section-3">
          <h2>Projet 03</h2>
        </div>
      </div>
    </div>

    <section class="outro">
      <h1>Fin de l'expérience</h1>
    </section>
  </div>
</template>

<style scoped>
.outro {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  color: white;
}

.intro {
  height: 100vh;
  display: flex;
  flex-direction: column; /* Force l'un en dessous de l'autre */
  justify-content: center; /* Centre verticalement */
  align-items: center;    /* Centre horizontalement */
  background: #007040;
  color: white;
  text-align: center;     /* Sécurité pour le texte multi-ligne */
}

.intro_titre {
  font-size: 16rem;
  margin: 0;              /* Supprime la marge par défaut qui casse le centrage */
  line-height: 1;         /* Évite un grand espace vide sous les lettres */
}

.intro_text {
  font-size: 2rem;
  margin-top: 20px;       /* Petit espace contrôlé entre le titre et le texte */
}

.engagement {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 50px 0;
  background-image:url('../assets/JAE.png');
  background-size: 100%;

}

.engagement_titre {
  color: white;
  font-size: 3rem;
  margin-bottom: 50px;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 107, 62, 0.45);
  border-radius: 30px;
  padding: 20px 40px;
}

.engagement_content {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.horizontal-container {
  display: flex;
  width: 300vw; /* 3 sections de 100vw chacune */
  height: 100vh;
}

.panel {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5rem;
}

.section-1 { background-color: #ff4757; }
.section-2 { background-color: #2f3542; }
.section-3 { background-color: #2f3542; }

.scroll-wrapper {
  overflow-x: hidden; /* Empêche le scroll horizontal moche du navigateur */
}

/* --- MODIFICATIONS DANS TON <style> --- */

.horizontal-container {
  display: flex;
  width: 300vw; /* Tes 3 sections */
  height: 100vh;
}

.asso_grid {
  width: 100vw; /* Chaque "page" doit faire exactement cette taille */
  height: 100vh;
  display: grid;
  /* On ajuste pour que ça respire */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
  /* ESSENTIEL : Si les 39 dépassent, on permet de scroller verticalement 
     à l'intérieur de ce panneau précis */
  overflow-y: auto; 
  background-color: #2f3542; /* Remplace section-2 */
}
</style>