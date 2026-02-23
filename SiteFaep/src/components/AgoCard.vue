<script setup>
defineProps({
  stat: String,
  descritpion: String
})
</script>

<template>
    <div class="card">  
        <img src="../assets/ago.png" alt="Image de la statistique" class="img_ago" />
        <div class="titre_item">
            <h2>{{ stat }}</h2>
        </div>
        <div class="more_info">
            {{ descritpion }}
        </div>
    </div>
</template>

<style scoped>
.card{
    background-color: #C3F1FE;
    border: 3px solid #00a862;
    border-radius: 30px;
    padding: 1%; /* Un peu plus de padding pour l'équilibre */
    color: #15A995;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow: hidden;
    box-sizing: border-box; /* Très important pour que les 320px incluent le padding */
    height: 50%;
    width: 30%;
}

.titre_item{
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
}

.titre_item h2{
    font-size: 1.4rem;
    margin-bottom: 20px;
    font-weight: 700;
    color: #15A995;
}

.more_info {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    color: #15A995;
    text-align: center;
}
</style>