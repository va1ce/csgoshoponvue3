<template>
    <div class="skins-collection">
        <controls/>
        <skinsList/>
        <pagination/>
    </div>
</template>

<script>
import controls from './controls.vue';
import skinsList from './skins-list.vue';
import pagination from './pagination.vue';

export default {
    name: 'skins-collection',
    components: {
        controls,
        skinsList,
        pagination,
    }
}
</script>

<style>

</style>