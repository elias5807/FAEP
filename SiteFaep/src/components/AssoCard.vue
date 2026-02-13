<script setup>
// On définit les "props" : les données que le parent va envoyer
defineProps({
  title: String,
  image: Image
})
</script>

<template>
    <div class="asso_item">
        <h2>{{ title }}</h2>
        <div class="item_image_placeholder"></div>
    </div>
</template>

<style scoped>
    .asso_item{
        background-color: black;
        border: 20px solid #006b3e;
        width: 320px;
        padding: 25px;
        border-radius: 25px;
        display: flex;
        flex-direction: column;
    }

    .asso_item h2{
        font-size: 1.4rem;
        margin-bottom: 20px;
        font-weight: 700;
        min-height: 3.5rem; /* Aligne les titres sur plusieurs lignes */
        display: flex;
        align-items: center;
    }

</style>