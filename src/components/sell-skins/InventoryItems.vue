<template >
    <div class="inventory-items">
        <InventoryItem
            v-for="item in GET_SORT_AND_FILTER_ITEMS_IN_INVENTORY"
            :key="item.id"
            :item_data="item" />
        <EmptyList v-if="!GET_SORT_AND_FILTER_ITEMS_IN_INVENTORY.length"/>
    </div>
</template>
<script >
import InventoryItem from './InventoryItem.vue';
import EmptyList from "../EmptyList.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "InventoryItems",
    components: {
        InventoryItem,
        EmptyList
    },
    computed: {
        ...mapGetters([
            "ITEMS_IN_IVENTORY",
            "SEARCH_VALUE",
            "GET_SORT_AND_FILTER_ITEMS_IN_INVENTORY"
        ]),
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_IN_INVENTORY_FROM_API",
            "GET_SEACRH_VALUE_TO_VUEX",
            "SET_FILTERED_AND_SORT_ITEMS_TO_VUEX"
        ]),
    },
    mounted() {
        this.GET_ITEMS_IN_INVENTORY_FROM_API()
        if (this.SEARCH_VALUE) {
            this.GET_SEACRH_VALUE_TO_VUEX('')
        }
    }
}
</script>
<style lang="scss">
.inventory-items {
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--layout-grid-min-width, 120px),1fr));
    height: 435px;
    gap: 5px;
    overflow-y: scroll;
    overflow-block: hidden;
}

.inventory-items::-webkit-scrollbar-thumb {
    width: 4px;
    background: rgba(0, 0, 0, .5);
    border-radius: 3px;
}

.inventory-items::-webkit-scrollbar {
    width: 4px;
}

.inventory-items::-webkit-scrollbar-track {
    background: rgba(85, 85, 85, .3);
    border-radius: 3px;
}
</style>