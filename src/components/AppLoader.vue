<script>
// Inserisco l'EXPORT
export default {
    name: 'AppLoader',
}
</script>

<!-- TEMPLATE -->
<template></template>


<!-- STYLE -->
<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $bg-color;
}
</style>
