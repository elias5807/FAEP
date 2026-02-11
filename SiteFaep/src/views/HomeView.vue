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
      <h1>FAEP</h1>
      <p>Fédération des Associations d'Étudiants de Picardie</p>
    </section>

    <div ref="triggerRef">
      <div ref="sectionRef" class="horizontal-container">
        <div class="panel section-1"><h2>Projet 01</h2></div>
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
.intro, .outro {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  color: white;
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