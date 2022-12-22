<template>
    <div class="container">
        <div class="skins-market">
            <Sidebar/>
            <SkinsCollection/>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import SkinsCollection from './SkinsCollection.vue';

export default {
    name: 'skins-market',
    components: {
        SkinsCollection,
        Sidebar,
    }
}
</script>

<style lang="scss">
.skins-market {
    box-shadow: 0 13px 49px 0 #848587;
    display: grid;
    grid-template-columns: 210px auto;
    padding: 15px 0 0 20px;
    min-height: 350px;
    border-radius: 4px;
    position: relative;
}
</style>