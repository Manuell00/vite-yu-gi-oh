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
    }
}
</script>

<!-- TEMPLATE -->
<template>
    <div id="select-row">
        <!-- Definisco la select -->
        <select>
            <option selected>Alien</option>
            <!-- <option v-for="archetype in store.typeList" :key="archetype.archetype_name" :species="archetype"
                    :value="archetype.archetype_name">{{ archetype.archetype_name }}</option> -->
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