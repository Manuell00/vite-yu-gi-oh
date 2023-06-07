import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    charactersList: [],
    loading: true,  //variabile per loader

    // Aggiungiamo 1 proprietà per la searchType
    filterURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    filterList: [],

    // A questo mi aggancerò con il v-model
    filteredArchetype: ""

    // la chiamata per filtrare gli elementi è la seguente : "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=" + filteredArchetype
    // ?num=20&offset=0

});