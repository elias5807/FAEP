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
</script>

<template>
  <div class="scroll-wrapper">
    <section class="intro">
      <h1 class="intro_titre">FAEP</h1>
      <p class="intro_text">Fédération des Associations d'Étudiants de Picardie</p>
    </section>

    <section class="engagement">
      <h1 class="engagement_titre">Nos engagements</h1>
      <div class="engagement_content">
        <div class="engagement_item">
          <h2>Engagement 01</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.</p>
        </div>
        <div class="engagement_item">
          <h2>Engagement 02</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.</p>
        </div>
        <div class="engagement_item">
          <h2>Engagement 03</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius.</p>
        </div>
      </div>

    </section>

    <div ref="triggerRef">
      <div ref="sectionRef" class="horizontal-container">
        <div class="panel section-1"><h2>Nos associations</h2></div>
        <div class="panel section-2"><h2>Projet 02</h2></div>
        <div class="panel section-3"><h2>Projet 03</h2></div>
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
  background: green;
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
  height: 100vh;
  display: flex;
  flex-direction: column; /* Force l'un en dessous de l'autre */
  align-items: center;
  background: #111;
  color: white;  
}

.engagement_titre {
  font-size: 4rem;
  margin-bottom: 40px;    /* Espace entre le titre et les engagements */
  margin-top: 5%;         /* Espace entre le haut de la section et le titre */
}

.engagement_content {
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
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
.section-3 { background-color: #ffa502; }

.scroll-wrapper {
  overflow-x: hidden; /* Empêche le scroll horizontal moche du navigateur */
}
</style>