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
    <div class="text-center card mb-3">
        <img :src="details.card_images[0].image_url" :alt="details.name">
        <div class="cardCharacter">
            <div class="cardName">
                <h5>{{ details.name }}</h5>
            </div>
            <div>{{ details.archetype }}</div>
        </div>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/partials/_variables.scss' as *;

.card {
    flex-basis: calc((100% / 5) - 10px);


    .cardCharacter {
        background-color: $bg-color;

        .cardName {
            color: white;
            margin: 10px;
            text-transform: uppercase;
            text-align: center;
            height: 90px;
        }
    }



}
</style>