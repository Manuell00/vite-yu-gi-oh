<script>
// Importo lo STORE
import { store } from './store.js';
// Importo AXIOS 
import axios from 'axios';

// Importo i COMPONENTI
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharacterList.vue'
import AppFilter from './components/AppFilter.vue'
import AppLoader from './components/AppLoader.vue'


// Inserisco l'EXPORT
export default {
    components: {
        AppHeader,
        CharactersList,
        AppFilter,
        AppLoader
    },

    // Inserisco i dati
    data() {
        return {
            store,
        }
    },

    methods: {
        // THEN mi dice che se va bene la chiamata allora fa quello che scrivo come codice
        // CATCH invece intercetta l'errore e mi permette visualizzarli (ad esempio con un console.log)
        getCharacters() {
            let apiURL = store.apiURL

            axios.get(apiURL).then(res => {
                store.charactersList = res.data.data;
                store.loading = false;
            })
                .catch(err => {
                    console.log(err);
                })
        }
    },

    // CREATED viene utilizzato al posto di mounted perchè svolge l'attività quando viene creata l'app
    created() {
        this.getCharacters()
    }
}
</script>


<!-- TEMPLATE -->
<template>
    <!-- In questo caso visualizzo il componente AppLoader solo quando la variabile store.loading è == true, quando in realtà la pagina è caricata questo diventerà false e quindi non sarà più visualizzato  -->
    <AppLoader v-if="store.loading" />

    <!-- Insrisco l'header -->
    <AppHeader />

    <!-- Definisco il main -->
    <main>
        <section class="main-container">
            <!-- Inserisco una select di ricerca -->
            <AppFilter />
            <!-- Inserisco il contenuto delle mie cards -->
            <CharactersList />
        </section>

    </main>
</template>


<!-- STYLE -->
<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

main {
    background-color: $bg-color;
}
</style>
