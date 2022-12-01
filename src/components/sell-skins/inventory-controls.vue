<template >
    <div class="inventory-controls">
        <controls__search @searchValue="searchSkins" class="inventory-controls__search"/>
        <sortByPriceVue @changeSort="changeSort" class="inventory-controls__priceorder"/>
    </div>
</template>
<script>
import controls__search from '../skins-market/controls__search.vue';
import inputVue from '../input.vue';
import sortByPriceVue from './sort-by-price.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "inventory-controls",
    components: {
        controls__search,
        inputVue,
        sortByPriceVue
    },
    methods: {
        ...mapActions([
            'GET_SEACRH_VALUE_TO_VUEX'
        ]),
        searchSkins(value) {
            this.GET_SEACRH_VALUE_TO_VUEX(value)
        },
        changeSort(value) {
            this.$emit('changeSort',value)
        }
    }
}
</script>
<style lang="scss">
.inventory-controls {
    padding-top: 25px;
    display: flex;
    align-items: center;
}
.inventory-controls__priceorder {
    margin-left: auto;
}
</style>