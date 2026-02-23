<script setup>
import AgoCard from '../components/AgoCard.vue';
import EventAgoCard from '@/components/EventAgoCard.vue';
import BureauCard from '@/components/BureauCard.vue';
import Footer from '@/components/Footer.vue';
</script>
    
<template>
    <article class="presentation">
        <h1>AGORAé</h1>
    </article>
    <article class="stats">
        <div class="card_container">
            <AgoCard stat="Nombre de bénéficiaires" descritpion="Plus de 500 bénéficiaires en 2023" />
            <AgoCard stat="Nombre de repas distribués" descritpion="Plus de 10 000 repas distribués en 2023" />
        </div>
        <div class="card_container">
            <AgoCard stat="Nombre de bénévoles" descritpion="Plus de 50 bénévoles actifs en 2023" />
            <AgoCard stat="Nombre de partenariats" descritpion="Plus de 20 partenariats avec des associations locales en 2023" />
        </div>
    </article>
    <article class="beneficiaire">
        <button>Devenir bénéficiaire</button>
        <div class="beneficiaire_info">
            <p>
                L’AGORAé est une épicerie solidaire gérée par et pour les étudiants. Elle s’organise autour de plusieurs axes : <br>
                Lutte contre la précarité étudiante<br>
                En pleine explosion, la précarité étudiante est de plus en plus préoccupante. Par manque de moyens, certains étudiants et étudiantes limitent leurs dépenses alimentaires voire se privent de repas (en moyenne 3 par semaine, source : FAGE) <br>
                Pour cela, l’association propose une épicerie fixe à Amiens, a laquelle tous les étudiants bénéficiaires de la région picarde peuvent accéder. <br>

                Lutte contre l’isolement social et accès à la culture<br>
                L’AGORAé est également un lieu de vie dans lequel les étudiants peuvent se rencontrer, échanger et participer à des activités multiples, notamment :<br>
                Des ateliers thématiques aussi divers que variés (culinaires, sportifs, culturels…) hebdomadaires<br>
                Le voyage au ski solidaire, journées mais aussi des week-ends culturels organisés permettent de vivre des expériences culturelles enrichissantes à plusieurs.<br>
                Engagement bénévole<br>
                L’épicerie solidaire repose sur des étudiants bénévoles volontaires et motivés soucieux d’aider ceux dans le besoin. C’est une fierté de contribuer à cette entraide étudiante, pilier de notre association.<br>
                Formation étudiante<br>
                Acteurs de la formation étudiante, nous offrons des opportunités de stage chaque année et soutenons les étudiants en tutorant leurs projets ou mémoires/thèses. Nous croyons fermement à l’importance de l’apprentissage pratique et de l’acquisition d’expérience professionnelle pendant les études.<br>
                L’AGORAé d’Amiens s’engage pleinement à soutenir les étudiants picards dans leurs luttes quotidiennes contre la précarité, l’isolement social et les difficultés d’accès à la culture, tout en favorisant leur développement personnel et professionnel.<br>
            </p>
        </div>
    </article>
    <article class="evenements">
        <div class="card_container">
            <EventAgoCard titre="Panier de fruits et légumes" lienUrl="https://example.com" imageUrl="legume.png" />
            <EventAgoCard titre="Ateliers de cuisine" lienUrl="https://example.com" imageUrl="cuisine.jpg" />
        </div>
        <div class="card_container">
            <EventAgoCard titre="Sorties culturelles" lienUrl="https://example.com" imageUrl="louvre.png" />
            <EventAgoCard titre="Distribution de repas" lienUrl="https://example.com" imageUrl="sacha.jpg" />
        </div>
    </article>
    <article class="bureau">
        <h1>Le Bureau de l'AGORAé</h1>
        <div class="bureau-container">
            <BureauCard nom="Alice Dupont" role="Présidente" imageUrl="alice.png" />
            <BureauCard nom="Bob Martin" role="Trésorier" imageUrl="bob.png" />
            <BureauCard nom="Charlie Durand" role="Secrétaire" imageUrl="charlie.png" />
            <BureauCard nom="Diane Leroy" role="Responsable des événements" imageUrl="diane.png" />
        </div>
    </article>
    <article class="contact">
        <div class="contact-container">
            <h2>Contactez-nous</h2>
            <p>Email :
                <a href="mailto:contact@agora-epicerie-solidaire.fr">contact@agora-epicerie-solidaire.fr</a> 
            </p>
            <p>Téléphone : 01 23 45 67 89</p>
            <p>Adresse : 123 Rue de l'Université, 80000 Amiens</p>
            <p>
                Suivez-nous sur 
                <a href="https://www.instagram.com/agoraepicerie" target="_blank">Instagram</a>
            </p>

        </div>
    </article>
    <Footer />
</template>

<style scoped>
.presentation{
    background-color: #237B55;
    padding-top: 15%;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-bottom: -15%;
}

.presentation h1{
    font-size: 16rem;
    margin: 0;              
    line-height: 1;
}

.stats{
    background-color: #237B55;
    padding-top: 2%;
    padding-right: 4%;
    padding-left: 4%;
    height: 130vh;
    background-image: url('../assets/agoraemagasin.png');
    background-size: cover;
    background-position: center;

}

.card_container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2%;
    background-color: rgba(4, 170, 109, 0);
}

.beneficiaire{
    background-color: #237B55;
    padding-right: 6%;
    padding-left: 6%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.beneficiaire button{
    background-color: #C3F1FE;
    border: 3px solid #00a862;
    border-radius: 30px;
    padding: 1% 2%;
    color: #15A995;
    font-size: 1.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.beneficiaire button:hover{
    background-color: #15A995;
    color: white;
    border-color: #15A995;
}

.beneficiaire_info{
    margin-top: 3%;
    background-color: #C3F1FE;
    border: 3px solid #00a862;
    border-radius: 30px;
    padding: 2%;
    color: #15A995;
    font-size: 1.2rem;
    font-weight: 600;
}

.bureau{
    padding-top: 2%;
    background-color: #237B55;
    text-align: center;
}

.bureau h1{
    color: white;
    font-size: 2.5rem;
}

.bureau-container{
    background-color: #237B55;
    padding-right: 6%;
    padding-left: 6%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.contact{
    background-color: #237B55;
    padding-right: 6%;
    padding-left: 6%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-container{
    background-color:#C3F1FE;
    padding: 2%;
    border: 3px solid #00a862;
    border-radius: 30px;
    color: #15A995;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
}

.evenements{
    background-color: #237B55;
    padding-top: 2%;
    padding-right: 4%;
    padding-left: 4%;
    height: 110vh;
}
</style>