<script setup>
// Pas de logique spécifique nécessaire pour ce footer statique
</script>

<template>
    <footer class="site-footer">
        <div class="footer-content">
            <img src="../assets/weec2.png" alt="Photo de groupe FAEP" class="footer-group-image" />
        </div>
        
        <div class="footer-actions">
            <a href="#" class="footer-btn btn-legal">Mentions légales</a>
            <a href="#" class="footer-btn btn-contact">Nous contacter</a>
        </div>
    </footer>
</template>

<style scoped>
/* --- Le Footer Principal --- */
.site-footer {
    position: relative;
    background-color: #107c41; /* Vert uni du fond */
    width: auto;
    align-items: flex-start;
    /* Plus de padding pour que le footer moule l'image */
    padding: 0;
    overflow: hidden; /* Coupe tout ce qui dépasse */
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    /* Hauteur minimale arbitraire pour laisser de la place à l'image tournée. 
       Ajuste cette valeur selon la longueur de ton image ! */
    min-height: 100px;
    max-height: 260px; 
    border-right: 6px solid #0d6334; /* Bordure droite plus épaisse */
    border-bottom: 6px solid #0d6334;
    border-left: 6px solid #0d6334;
}

/* --- L'Image du Groupe --- */
.footer-group-image {
    /* La fameuse rotation */
    transform: rotate(-90deg); 
    max-height: 100vw; 
    object-fit: contain;
    z-index: 1; /* Reste sous les boutons */
}

.footer-actions {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
}

.footer-btn {
    position: relative;
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    font-weight: 800;
    font-size: 0.95rem;
    z-index: 1;
}

.btn-legal {
    padding: 0 40px 0 20px; 
}

.btn-legal::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 100%;
    height: 100%;
    background-color: #0d6334;
    transform: skewX(35deg);
    transform-origin: bottom left;
    z-index: -1;
}

.btn-contact {
    padding: 0 20px 0 40px;
}

.btn-contact::before {
    content: '';
    position: absolute;
    top: 0;
    right: -20px;
    width: 100%;
    height: 100%;
    background-color: #0d6334;
    transform: skewX(-35deg);
    transform-origin: bottom right;
    z-index: -1;
}

@media (max-width: 768px) {
    .site-footer {
        min-height: 350px;
    }
    .footer-btn {
        font-size: 0.8rem;
    }
    .btn-legal { padding: 0 30px 0 10px; }
    .btn-contact { padding: 0 10px 0 30px; }
}
</style>