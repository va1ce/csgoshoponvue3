<template>
    <div class="container">
        <div class="skins-market">
            <Sidebar />
            <skinsCollection />
        </div>
    </div>
</template>

<script>
import Sidebar from './sidebar.vue';
import skinsCollection from './skins-collection.vue';

export default {
    name: 'skins-market',
    components: {
        skinsCollection,
        Sidebar,
    },
    props: {},
    data() {
        return {
        }
    },
}
</script>

<style>

</style>