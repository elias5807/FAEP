<template>
  <footer class="faep-footer">
    <h2 class="main-title">FAEP Partout</h2>

    <div class="footer-grid">
        <div class="social-links">
            <h3 class="column-title">Nos Réseaux</h3>
            <div class="item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" class="brand-icon">
                <span class="label">la FAEP</span>
            </div>
            <div class="item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" class="brand-icon">
                <span class="label">FAEP</span>
            </div>
        </div>

        <div class="grid-col center">
            <img src="../assets/weec2.png" alt="Logo FAEP" class="footer-logo">
        </div>
        <div class="grid-col right">
            <h3 class="column-title">Un Problème ?<br>une Question ?</h3>
            <div class="item">
                <div class="mail-circle">
                    <span class="envelope">✉</span>
                </div>
                <a href="mailto:Mesdroits@faep.fr" class="label mail-link">Mesdroits@faep.fr</a>
            </div>
        </div>
    </div>

    <div class="bottom-bar">
      <div class="bottom-bar-button1"><a href="#">Mentions légales</a></div>
      <div class="bottom-bar-button2"><a href="#">Nous contacter</a></div>
    </div>
  </footer>
</template>

<style scoped>
.faep-footer {
  background-color: #003d1e; /* Le vert très foncé de l'image */
  color: #1db954; /* Le vert fluo pour les textes importants */
  font-family: 'Arial Black', 'Arial', sans-serif; /* Pour l'aspect gras et moderne */
  position: relative;
  overflow: hidden;
  border-bottom: 15px solid #003615;
  border-right: 15px solid #003615;
  border-left: 15px solid #003615;
}

/* "FAEP Partout" en haut au centre */
.main-title {
  text-align: center;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 50px;
  color: #1db954; 
  letter-spacing: -2px;
}

.footer-grid {
  display: flex;  
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1300px;
  margin: 0 auto;
}

.social-links{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  text-decoration: none;
}

.brand-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
}

.footer-logo {
  width: 100%;
  height: auto;
  rotate: -90deg;
  margin-top: -70%;
}

.mail-circle {
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.envelope {
  color: #003615;
  font-size: 20px;
  font-weight: bold;
}

.bottom-bar {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  padding-top: 10px;
  font-size: 0.9rem;
  font-weight: 700;
}

.bottom-bar a {
  color: #1db954;
  text-decoration: none;
  background-color: #003615;
  margin-bottom: 0;
}   

.bottom-bar-button1 {
  background-color: #003615;
  padding: 10px 20px;
  border-radius: 5px 45px 5px 5px;
}

.bottom-bar-button2 {
  background-color: #003615;
  padding: 10px 20px;
  border-radius: 45px 5px 5px 5px;
}

/* Responsive pour tablettes et mobiles */
@media (max-width: 900px) {
  .main-title { font-size: 2.5rem; }
  .footer-grid {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
  .right { align-items: center; text-align: center; }
  .grid-col.center { order: -1; } /* Logo passe en haut sur mobile */
}
</style>