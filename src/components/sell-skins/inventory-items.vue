<template >
    <div class="inventory-items">
        <inventoryItem v-for="item in filteredItems" :key="item.id" :item_data="item" />
        <div v-if="!filteredItems.length" class="empty-list">
            <h3 class="empty-list__title">Ничего не найдено</h3>
        </div>
    </div>
</template>
<script>
import inventoryItem from './inventory-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "inventory-items",
    components: {
        inventoryItem
    },
    data() {
        return {
            filteredItems: [],
        }
    },
    props: {
        priceSort: {
            type: String,
            default: ""
        },
    },
    computed: {
        ...mapGetters([
            "ITEMS_IN_IVENTORY",
            "SEARCH_VALUE"
        ]),
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_IN_INVENTORY_FROM_API",
            "GET_SEACRH_VALUE_TO_VUEX"
        ]),
        sortItemsBySearchValue(value) {
            this.filteredItems = [...this.ITEMS_IN_IVENTORY]
            if (value) {
                this.filteredItems = this.filteredItems.filter((item) => {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                })
            }
        },
        sortItemsByPrice(value) {
            if (value == "desk") {
                this.filteredItems.sort((a, b) => b.price - a.price);
            }
            else {
                this.filteredItems.sort((a, b) => a.price - b.price);
            }
        }
    },
    watch: {
        SEARCH_VALUE() {
            this.sortItemsBySearchValue(this.SEARCH_VALUE)
        },
        priceSort() {
            this.sortItemsByPrice(this.priceSort)
        }
    },
    mounted() {
        this.GET_ITEMS_IN_INVENTORY_FROM_API()
            .then((response) => {
                if (response.data) {
                    this.sortItemsBySearchValue(this.SEARCH_VALUE)
                    this.sortItemsByPrice(this.priceSort)
                }
            })
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
    grid-template-columns: auto auto auto auto auto auto;
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
@media (max-width:1080px){
    .inventory-items {
        grid-template-columns: auto auto auto auto auto;
}
}
@media (max-width:976px){
    .inventory-items {
        grid-template-columns: auto auto auto auto;
}
}
@media (max-width:510px){
    .inventory-items {
        grid-template-columns: auto auto auto ;
}
}
@media (max-width:425px){
    .inventory-items {
        grid-template-columns: auto auto;
    }
}
</style>