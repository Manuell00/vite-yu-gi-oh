<script>
// Importo lo STORE
import { store } from './../store.js';

// Inserisco l'EXPORT
export default {
    name: 'AppFilter',


    // Anche qui inseriamo i data dello store così da poterlo utilizzare
    data() {
        return {
            store
        }
    },
}
</script>

<!-- TEMPLATE -->
<template>
    <div id="select-row">
        <!-- Definisco la SELECT -->
        <!-- Quando succede l'evendo del change della selection, con l'emit andrò dal genitore padre a dirgli "guarda che è successo questo evento", fatto ciò potrò chiamare nel padre un altra funzione per, in questo caso, modificare la visualizzazione dei dati in pagina -->
        <!-- Attraverso il v-model riporto il valore della selection nella variabile filteredArchetype -->
        <select v-model="store.filteredArchetype" @change="$event => $emit('mySelection')">
            <!-- Imposto un value predefinito pari a vuoto "" -->
            <option value="">Seleziona archetipo</option>
            <!-- Inserisco la lista degli archetipi all'interno dell'array filterList -->
            <option v-for="archetype in store.filterList" :key="archetype.archetype_name" :species="archetype"
                :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss' as *;
@use '../styles/partials/_variables.scss' as *;



#select-row {
    background-color: $bg-color;
    widows: 100%;
    height: 100px;
    padding: 10px 0;
    display: flex;
    align-items: center;

    select {
        padding: 8px;
        padding-right: 50px;
        border-radius: 10px;
        margin-left: 10px;
    }
}
</style>