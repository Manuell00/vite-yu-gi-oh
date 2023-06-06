<script>
// Inserisco l'EXPORT
export default {
    name: 'SingleCharacter',
    props: {
        details: Object
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <!-- Card di esempio -->
    <div class="text-center card">
        <img class="img-fluid mb3" :src="details.image" :alt="details.name">
        <div class="character-container">
            <h4>{{ details.name }}</h4>
            <p>{{ details.archetype }}</p>
        </div>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';
@use '../styles/partials/_variables.scss' as *;


.card {
    height: 400px;
    width: 100%;
    background-color: $bg-color;

    img {
        height: 220px;
        width: 100%;
    }

    .character-container {
        height: 180px;
        width: auto;

        h4 {
            text-transform: uppercase;
            font-weight: 700;
            color: white;
        }

        p {
            color: black;
        }
    }

}
</style>