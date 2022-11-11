<template>
    <div class="skins-collection">
        <cart/>
        <controls/>
        <skinsList/>
        <pagination/>
    </div>
</template>

<script>
import controls from './controls.vue';
import skinsList from './skins-list.vue';
import pagination from './pagination.vue';
import cart from './cart.vue';

export default {
    name: 'skins-collection',
    components: {
        cart,
        controls,
        skinsList,
        pagination,
    }
}
</script>

<style>

</style>