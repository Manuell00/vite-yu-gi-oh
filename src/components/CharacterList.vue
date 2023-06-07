<script>
// Importo lo STORE
import { store } from '../store.js';

// Importo i COMPONENTI
import SingleCharacter from './SingleCharacter.vue'

// Inserisco l'EXPORT
export default {
    name: 'CharacterList',
    components: {
        SingleCharacter
    },

    data() {
        return {
            store
        }
    },

    computed: {
        numberCards() {
            console.log(store.charactersList.length);
            return store.charactersList.length
        }
    }

}
</script>

<!-- TEMPLATE -->
<template>
    <section class="container">
        <div id="len-row">
            <h5> Il numero di carte trovate è : {{ numberCards }}</h5>
        </div>
        <div id="cardList">
            <SingleCharacter v-for="character in store.charactersList" :key="character.id" :details="character" />
        </div>
    </section>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.container {
    color: white;
    border: 50px solid white;

    #len-row {
        width: calc(100% - 10px);
        height: 60px;
        color: white;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 20px;
    }

    #cardList {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>