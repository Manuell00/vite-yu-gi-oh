<script>
// Importo lo STORE
import { store } from './../store.js';

// Importo i COMPONENTI
import SingleCharacter from './SingleCharacter.vue'

// Inserisco l'EXPORT
export default {
    name: 'CharacterList',
    components: {
        SingleCharacter
    },

    // Anche qui inseriamo i data dello store così da poterlo utilizzare
    data() {
        return {
            store
        }
    }
}
</script>

<!-- TEMPLATE -->
<template>
    <div class="big-container">
        <div class="row" id="select-row">
            <select class="form-select w-25" aria-label="Default select example">
                <option selected>Alien</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <section class="container">
            <div class="row">
                <div v-for="character in store.charactersList" :key="character.id" class="col-6 col-md-4 col-lg-3 mb-3">
                    <SingleCharacter :details="character" />
                </div>
            </div>
        </section>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;

.big-container {
    background-color: $bg-color;
    height: calc(100vh - 100px);

    #select-row {
        padding: 20px 15%;
    }

    .container {
        height: calc(100vh - 100px);
        background-color: white;
        border: 10px solid white;
    }
}
</style>