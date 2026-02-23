<script setup>
// On pourrait importer des icônes ici plus tard
</script>

<template>
    <main class="main-content">
        <section class="hero">
            <div class="hero-content">
            <h1>Bienvenue sur le Campus de l'IUT</h1>
            <p>6 filières, une communauté unie et un cadre d'exception pour réussir votre Bachelor Universitaire de Technologie.</p>
            </div>
        </section>

        <main class="container">
            <section id="presentation" class="section-card">
                <h2 class="section-titre">Le cadre d'études</h2>
                <p class="text-center">
                    L’IUT d’Amiens, en lien étroit avec les milieux professionnels, propose une formation universitaire et technologique de pointe. 
                    Notre pédagogie est axée sur le <strong>savoir-agir</strong> et le <strong>savoir-être</strong>.
                </p>
            </section>

            <section id="infrastructures" class="section-full">
                <h2 class="section-titre-campus">Vivre sur le campus</h2>
                <div class="grille-infrastructures">
                    <article class="carte-infra">
                        <div class="icon">📚</div>
                        <h3>Bibliothèques</h3>
                        <p>Accès à la BU centrale et à une bibliothèque de proximité à 400m. Espaces de coworking et ressources numériques 24/7.</p>
                    </article>

                    <article class="carte-infra">
                        <div class="icon">🍴</div>
                        <h3>Restauration</h3>
                        <p>Un Restaurant Universitaire (RU) complet et une cafétéria conviviale pour vos pauses déjeuner à prix étudiant.</p>
                    </article>

                    <article class="carte-infra">
                        <div class="icon">🏃</div>
                        <h3>Sport & Santé</h3>
                        <p>Piscine olympique, musculation et plus de 60 disciplines. L'esprit sain dans un corps sain.</p>
                    </article>
                </div>
            </section>

            <section id="services" class="section-card bde-section">
                <h2 class="section-titre">La Vie Étudiante</h2>
                <p>Les <strong>BDE</strong> (Bureaux des Étudiants) sont le cœur battant du campus. Ils animent votre quotidien :</p>
                <div class="bde-badges">
                    <span class="badge">BDE Infocontact</span>
                    <span class="badge">BDE TC (Techno de Co)</span>
                    <span class="badge">BDE GB (Génie Bio)</span>
                </div>
            </section>

            <section id="acces" class="section-card">
                <h2 class="section-titre">Venir nous voir</h2>
                <div class="bloc-acces">
                    <div class="adresse">
                        <h3>📍 Adresse</h3>
                        <p>Avenue de l'Université, Bâtiment Central<br>80000 Amiens</p>
                    </div>
                    <div class="transports">
                        <h3>🚌 Transports</h3>
                        <ul>
                            <li><strong>Tram T1 :</strong> Campus Centre / Sud</li>
                            <li><strong>Liane 4 :</strong> Faculté des Sciences</li>
                            <li><strong>Vélos :</strong> 15 stations & 500 arceaux</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </main>
</template>

<style scoped>
.main-content {
    background-color: #007040;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.text-center { text-align: center; }

/* --- Hero : Plus chaleureux et moins rigide --- */
.hero {
  /* Dégradé de bleu vers un violet doux pour une ambiance solidaire */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6rem 1rem;
  text-align: center;
  border-radius: 0 0 40px 40px; /* Courbe en bas pour plus de douceur */
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.hero p {
  font-size: 1.3rem;
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.95;
}

/* --- Bouton d'action Association --- */
.btn-primary {
  background: #ff7675; /* Rose corail chaleureux */
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  box-shadow: 0 4px 15px rgba(255, 118, 117, 0.4);
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 1rem;
}

.btn-primary:hover {
  transform: translateY(-3px);
  background: #d63031;
  box-shadow: 0 6px 20px rgba(214, 48, 49, 0.5);
}

/* --- Sections : Style "Cards" flottantes --- */
.section-card {
  background: #ffffff;
  padding: 3rem;
  border-radius: 25px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  margin-bottom: 3rem;
  border: 1px solid #f0f0f0;
}

.section-full {
  padding: 4rem 0;
}

.section-titre {
  text-align: center;
  font-size: 2.2rem;
  color: #2d3436;
  margin-bottom: 2.5rem;
}

.section-titre-campus{
    text-align: center;
    font-size: 2.2rem;
    color: white;
    margin-bottom: 2.5rem;
}

.section-titre::after {
  content: '';
  display: block;
  width: 60px;
  height: 6px;
  background: #a29bfe; /* Violet pastel */
  margin: 12px auto;
  border-radius: 10px;
}

/* --- Grille des missions/actions --- */
.grille-infrastructures {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}

.carte-infra {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.carte-infra:hover {
  transform: translateY(-12px);
  box-shadow: 0 15px 45px rgba(0,0,0,0.1);
}

.carte-infra .icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: #f8f9ff;
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
}

/* --- Badges de l'Association --- */
.bde-section {
  text-align: center;
  background: #fdfdfe;
}

.bde-badges {
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.badge {
  background: #f0f3ff;
  color: #546de5;
  padding: 0.7rem 1.8rem;
  border-radius: 30px;
  font-weight: 700;
  border: 2px solid #e0e7ff;
  transition: 0.3s;
}

.badge:hover {
  background: #546de5;
  color: white;
  cursor: pointer;
}

/* --- Bloc Contact / Accès --- */
.bloc-acces {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: #fafbff;
  padding: 2rem;
  border-radius: 20px;
}

.bloc-acces h3 {
  color: #30336b;
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
  padding-left: 1.8rem;
  position: relative;
  color: #535c68;
}

li::before {
  content: '✨'; /* Plus sympa que la flèche standard */
  position: absolute;
  left: 0;
}

/* --- Responsive --- */
@media (max-width: 768px) {
  .hero { 
    border-radius: 0; 
    padding: 4rem 1rem;
  }
  .hero h1 { font-size: 2.4rem; }
  .bloc-acces { grid-template-columns: 1fr; }
  .section-card { padding: 2rem 1rem; }
}
</style>