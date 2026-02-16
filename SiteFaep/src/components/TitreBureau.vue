<script setup>
// On définit les "props" : les données que le parent va envoyer
defineProps({
  title: String
})
</script>

<template>
    <div class="titre_item">
        <h2>{{ title }}</h2>
    </div>
</template>

<style scoped>
    .titre_item{
        background-color: green;
        border: 4px solid black;
        border-radius: 30px;
        margin-left: 40%;
        margin-right: 40%;
        text-align: center;
    }

    .titre_item h2{
        font-size: 1.4rem;
        margin-bottom: 20px;
        font-weight: 700;
        color: white;
    }
</style>