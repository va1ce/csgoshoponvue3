<template>
    <div class="logo">
        <router-link :to="'/'" class="logo__item link">csgo-shop</router-link>
    </div>
</template>

<script>
export default {
    name : 'logo',
    components: {
    }
}
</script>

<style lang="scss">
.logo {
    align-items: center;
    display: block;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 1000;
    text-decoration: none;
    color: inherit;
}
</style>