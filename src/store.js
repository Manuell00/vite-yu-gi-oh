import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/",
    completeURL: "cardinfo.php?num=20&offset=0",
    filterURL: "https://db.ygoprodeck.com/api/v7/archetypes.php",

    charactersList: [],
    loading: true,  //variabile per loader



});