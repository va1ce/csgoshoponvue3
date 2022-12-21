<template >
    <div class="inventory-controls">
        <ControlsSearch @searchValue="searchSkins" class="inventory-controls__search"/>
        <SortByPrice @changeSort="changeSort" class="inventory-controls__priceorder"/>
    </div>
</template>
<script lang="ts">
import ControlsSearch from '../skins-market/ControlsSearch.vue';
import SortByPrice from './SortByPrice.vue';
import { mapActions} from 'vuex';
export default {
    name: "InventoryControls",
    components: {
        ControlsSearch,
        SortByPrice
    },
    methods: {
        ...mapActions([
            'GET_SEACRH_VALUE_TO_VUEX',
            'GET_SELECTED_OPTION_TO_VUEX'
        ]),
        searchSkins(value: string) {
            this.GET_SEACRH_VALUE_TO_VUEX(value)
        },
        changeSort(value: 'priceAsc' | 'priceDesc') {
          this.GET_SELECTED_OPTION_TO_VUEX(value)
        }
    }
}
</script>
<style lang="scss">
.inventory-controls {
    padding-top: 25px;
    display: flex;
    align-items: center;

    &__priceorder {
      margin-left: auto;
    }
}
</style>