<script setup>
defineProps({
  chiffre: String,
  description: String,
})
</script>


<template>
    <div class="card">

        <h3>{{ chiffre }}</h3>

        <div class="card-body">
            <p>{{ description }}</p>
        </div>

    </div>
</template>

<style scoped>
.card{
    background-color: #212729;
    border-radius: 30px;
    border: 2px solid #025e0a;
    text-align: center;
    width: 40%;
    height: 40%;
    color:#04AD65;
}

.card h3{
    font-size: 2em;
    margin: 0.5em;
}

.card-body{
    padding: 0.5em;
}

</style>

