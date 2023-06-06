<script>
// Inserisco l'EXPORT
export default {
    name: 'AppHeader',
}
</script>

<!-- TEMPLATE -->
<template>
    <header>
        <img src="ygoprodeck_logo.png" alt="Logo Yu-Gi-Oh">
        <h1 class="title">Yu-Gi-Oh Api</h1>
    </header>
</template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/general.scss';


header {
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
        font-size: 40px;
        font-weight: 300;
    }

    img {
        height: 50px;
        width: 50px;
        margin: 0 20px;
    }

}
</style>