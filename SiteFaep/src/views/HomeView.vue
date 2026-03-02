<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// On enregistre le plugin
gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const triggerRef = ref(null)

onMounted(() => {
  // Un petit délai (nextTick) peut être nécessaire pour que le DOM soit rendu avec les 37 cartes
  setTimeout(() => {
    if (!sectionRef.value) return;

    // On calcule la largeur totale de la bande horizontale
    const totalWidth = sectionRef.value.offsetWidth + 150;
    // On calcule de combien on doit glisser (Largeur totale - 1 écran)
    const scrollAmount = totalWidth - window.innerWidth;

    gsap.to(sectionRef.value, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.value,
        start: "top top",
        // Ajuste 'end' pour la vitesse : plus le chiffre est grand, plus le scroll est lent
        end: () => `+=${totalWidth}`, 
        scrub: 0.6,
        pin: true,
        invalidateOnRefresh: true,
      }
    });
  }, 100); // 100ms de sécurité pour le rendu des composants
});

//Faep en chiffres
import FaepCard from '../components/FaepCard.vue'

const faepChiffres = [
  { chiffre: "1200", description: "Étudiants représentés" },
  { chiffre: "34", description: "Associations" },
  { chiffre: "15", description: "Événements par an" },
  { chiffre: "21", description: "Chromosome de Jared" }
]

// les associations
import AssoCard from '../components/AssoCard.vue'

const associations = [
  { id: 1, nom: "InfoContact", image: "../assets/BDElogo/infocontact.png", insta: "https://..." },
  { id: 2, nom: "AESA", image: "../assets/BDElogo/aesa.png", insta:"https://..."},
  { id: 3, nom: "Biomecitec", image: "../assets/BDElogo/biomecitec.png", insta:"https://..."},
  { id: 4, nom: "Génie Biologique", image: "../assets/BDElogo/gb.png", insta:"https://..."},
  { id: 5, nom: "Bule", image: "../assets/BDElogo/bule.png", insta:"https://..."},
  { id: 6, nom: "BED", image: "../assets/BDElogo/bed.png", insta:"https://..."},
  { id: 7, nom: "Miage plus", image: "../assets/BDElogo/miage.png", insta:"https://..."},
  { id: 8, nom: "AESFA", image: "../assets/BDElogo/aesfa.png", insta:"https://..."},
  { id: 9, nom: "Aadeis", image: "../assets/BDElogo/aadeis.png", insta:"https://..."},
  { id: 10, nom: "AESFI", image: "../assets/BDElogo/aepfi.png", insta:"https://..."},
  { id: 11, nom: "APEO", image: "../assets/BDElogo/apeo.png", insta:"https://..."},
  { id: 12, nom: "ASHPA", image: "../assets/BDElogo/ashap.png", insta:"https://..."},
  { id: 13, nom: "ASKA", image: "../assets/BDElogo/aska.png", insta:"https://..."},
  { id: 14, nom: "AVEEP", image: "../assets/BDElogo/aveep.png", insta:"https://..."},
  { id: 15, nom: "B2E", image: "../assets/BDElogo/b2e.png", insta:"https://..."},
  { id: 16, nom: "BSM", image: "../assets/BDElogo/bsm.png", insta:"https://..."},
  { id: 17, nom: "CEA", image: "../assets/BDElogo/cea.png", insta:"https://..."},
  { id: 18, nom: "CECDA", image: "../assets/BDElogo/cecda.png", insta:"https://..."},
  { id: 19, nom: "CESIAS", image: "../assets/BDElogo/cesias.png", insta:"https://..."},
  { id: 20, nom: "CéIA", image: "../assets/BDElogo/cia.png", insta:"https://..."},
  { id: 21, nom: "Elu1", image: "../assets/BDElogo/elu1.png", insta:"https://..."},
  { id: 22, nom: "Elu2", image: "../assets/BDElogo/elu2.png", insta:"https://..."},
  { id: 23, nom: "ESN", image: "../assets/BDElogo/esn.png", insta:"https://..."},
  { id: 24, nom: "GEPETO", image: "../assets/BDElogo/gepeto.png", insta:"https://..."},
  { id: 25, nom: "handicapee", image: "../assets/BDElogo/handicapee.png", insta:"https://..."},
  { id: 26, nom: "IPEPS", image: "../assets/BDElogo/ipeps.png", insta:"https://..."},
  { id: 27, nom: "medecine", image: "../assets/BDElogo/medecine.png", insta:"https://..."},
  { id: 28, nom: "Monitorat science", image: "../assets/BDElogo/monitoratscience.png", insta:"https://..."},
  { id: 29, nom: "NASA", image: "../assets/BDElogo/nasa.png", insta:"https://..."},
  { id: 30, nom: "PHARMA", image: "../assets/BDElogo/pharma.png", insta:"https://..."},
  { id: 31, nom: "RSE", image: "../assets/BDElogo/rse.png", insta:"https://..."},
  { id: 32, nom: "SEA", image: "../assets/BDElogo/sea.png", insta:"https://..."},
  { id: 33, nom: "Solimeda", image: "../assets/BDElogo/solimeda.png", insta:"https://..."},
  { id: 34, nom: "STAPS", image: "../assets/BDElogo/staps.png", insta:"https://..."},
  { id: 35, nom: "unilasalle", image: "../assets/BDElogo/unilasalle.png", insta:"https://..."},
  { id: 36, nom: "Monitorat1", image: "../assets/BDElogo/monitorat1.png", insta:"https://..."},
  { id: 37, nom: "Monitorat2", image: "../assets/BDElogo/monitorat2.png", insta:"https://..."},
  { id: 38, nom: "BNA", image: "../assets/BDElogo/bna.png", insta:"https://..."},
];


import Footer from '../components/Footer.vue'
import Carroussel from '@/components/Carroussel.vue'
</script>

<template>
  <div class="scroll-wrapper">
    <section class="intro">
      <h1 class="intro_titre">FAEP</h1>
      <p class="intro_text">Fédération des Associations Étudiantes Picardes</p>
    </section>

    <section class="engagement">
      <h1 class="engagement_titre">FAEP en chiffres</h1>
      
      <div class="engagement_content">
        <FaepCard 
          v-for="item in faepChiffres" 
          :key="item.chiffre"
          :chiffre="item.chiffre"
          :description="item.description"
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
          <h2>Nos Projets</h2>
        </div>
      </div>
    </div>

    <section class="outro">
      <Carroussel />
    </section>
  </div>
  <Footer />
</template>

<style scoped>
.outro {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:#007040;
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
  justify-content: space-around;
  flex-wrap: wrap;

}

.engagement_stat {
  margin-top: 50px;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(0, 107, 62, 0.50);
  border-radius: 30px;
  padding: 20px 40px;
  margin-left: 10%;
  margin-right: 10%;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.horizontal-container {
  display: flex;
  width: 400vw; /* 3 sections de 100vw chacune */
  height: 100vh;
  background-image: url('../assets/colorun.png');
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


.section-1 { background-color: #007040; }
.section-2 { background-color:#007040; }
.section-3 { background-color:#007040; }


.scroll-wrapper {
  overflow-x: hidden; /* Empêche le scroll horizontal moche du navigateur */
}

.horizontal-container {
  display: flex;
  width: 200vw; /* Tes 3 sections */
  height: 100vh;
}

.asso_grid {
  min-width: 200vw; 
  height: 100vh;
  padding: 40px;
  background-color:#007040;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 20px;
  
  /* Ajoute ceci pour empêcher l'étirement des cartes : */
  align-items: flex-start; 
  justify-content: flex-start; 

  overflow-x: visible; 
  padding-top: 2%;
}

/* On force la taille des composants enfants pour qu'ils s'alignent par 3 */
.asso_grid > * {
  /* (Hauteur écran - padding haut/bas - gaps entre les 3 cartes) / 3 */
  height: calc((100vh - 80px - 40px) / 3);
  width: 350px; /* Largeur d'une colonne */
  flex-shrink: 0; /* Empêche les cartes de s'écraser */
}

.horizontal-container {
  display: flex;
  /* On ne met pas de largeur fixe ici, on laisse le contenu dicter la largeur */
  width: fit-content; 
  height: 100vh;
}

.panel {
  width: 100vw; /* Les sections 1 et 3 gardent une largeur pleine */
  height: 100vh;
  flex-shrink: 0; /* Empêche GSAP ou Flex de les rétrécir */
}

.asso_grid {
  /* Supprime le min-width fixe, laisse les cartes pousser la largeur */
  height: 100vh;
  padding: 1.12%; /* Réduit un peu le padding pour gagner de la place */
  background-color: #007040;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 15px;
  flex-shrink: 0; /* Très important pour ne pas être écrasé */
  padding-top: 1.5%;
}

.asso_grid > * {
  /* On enlève 120px pour compenser les paddings (40px haut + 40px bas) et les gaps (2x20px) */
  height: calc((100vh - 120px) / 3); 
  width: 350px;
  flex-shrink: 0;
}

.scroll-wrapper {
  overflow-x: hidden; /* Empêche le scroll horizontal parasite du navigateur */
  width: 100%;

}

.horizontal-container {
  display: flex;
  flex-direction: row;
  width: fit-content; /* Le conteneur s'adapte à la largeur de tes 37 assos */
  height: 100vh;
  will-change: transform;
}

/* On s'assure que la section Outro commence bien APRES l'animation GSAP */
.outro {
  display: flex;             /* Aligne les cartes en ligne */
  gap: 20px;                /* Espace entre les cartes */
  padding: 20px;
  overflow-x: auto;         /* Active le scroll horizontal */
  scroll-behavior: smooth;  /* Rend le défilement fluide */
  height: auto;
  
  /* Propriétés de "Snap" pour un effet carrousel pro */
  scroll-snap-type: x mandatory; 
  
  /* Cache la barre de défilement sur les navigateurs modernes */
  scrollbar-width: none;    /* Firefox */
  -ms-overflow-style: none;  /* IE/Edge */
}

/* Cache la barre de défilement sur Chrome/Safari */
.outro::-webkit-scrollbar {
  display: none;
}

/* On s'assure que les cartes ne rétrécissent pas et s'aimantent au bord */
.outro > * {
  flex: 0 0 auto;           /* Empêche les cartes de s'écraser */
  scroll-snap-align: center; /* La carte s'aimante au centre du conteneur */
}
</style>