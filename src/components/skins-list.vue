<template>
    <div class="skins-list">
        <skinsListItem v-for="item in filteredItems" :key="item.id" :item_data="item" @addToCart="addToCart" />
    </div>
</template>

<script>
import skinsListItem from './skins-list__item.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'skins-list',
    components: {
        skinsListItem,
    },
    props: {
        selected: {
            type: Object,
            default() {
                return {}
            }
        },
        selectedCheckboxGroup: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            sortedItems: []
        }
    },
    computed: {
        ...mapGetters([
            "ITEMS",
            "CART",
            "SEARCH_VALUE"
        ]),
        filteredItems() {
            this.sortedItems = [...this.ITEMS]
            if (this.selectedCheckboxGroup.length) {
                this.selectedCheckboxGroup.forEach((obj) => {
                    this.sortedItems = this.sortedItems.filter((item) => {
                        if (obj.id == 1) {
                            return item.type.includes("knife")
                        }
                        if (obj.id == 2) {
                            return item.type.includes("machinegun")
                        }
                        if (obj.id == 3) {
                            return item.type.includes("pistol")
                        }
                        if (obj.id == 4) {
                            return item.type.includes("rifle")
                        }
                        if (obj.id == 5) {
                            return item.type.includes("shotgun")
                        }
                        if (obj.id == 6) {
                            return item.type.includes("sniper Rifle")
                        }
                        if (obj.id == 7) {
                            return item.type.includes("gift")
                        }
                        if (obj.id == 8) {
                            return item.type.includes("name tag")
                        }
                        if (obj.id == 9) {
                            return item.type.includes("patch")
                        }
                        if (obj.id == 10) {
                            return item.type.includes("sticker")
                        }
                        if (obj.id == 11) {
                            return item.type.includes("glove")
                        }
                        if (obj.id == 12) {
                            return item.type.includes("case")
                        }
                        if (obj.id == 13) {
                            return item.type.includes("key")
                        }
                        else return false
                })
                })
            }
            if (this.SEARCH_VALUE) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.name.toLowerCase().includes(this.SEARCH_VALUE.toLowerCase())
                })
            }
            if (this.selected.value == 2) {
                this.sortedItems.sort((a, b) => b.price.replace(/[^0-9,.]/g, ' ').trim() - a.price.replace(/[^0-9,.]/g, ' ').trim());
                return this.sortedItems
            }
            if (this.selected.value == 3) {
                this.sortedItems.sort((a, b) => a.price.replace(/[^0-9,.]/g, ' ').trim() - b.price.replace(/[^0-9,.]/g, ' ').trim());
                return this.sortedItems
            }
            if (this.selected.value == 6) {
                this.sortedItems.sort((a, b) => {
                    if (a.float === b.float) {
                        return 0;
                    }
                    if (a.float === '') {
                        return 1;
                    }
                    if (b.float === '') {
                        return -1;
                    }
                    return a.float < b.float ? 1 : -1;
                });
                return this.sortedItems
            }
            if (this.selected.value == 7) {
                this.sortedItems.sort((a, b) => {
                    if (a.float === b.float) {
                        return 0;
                    }
                    if (a.float === '') {
                        return 1;
                    }
                    if (b.float === '') {
                        return -1;
                    }
                    return a.float < b.float ? -1 : 1;
                });
                return this.sortedItems
            }
            return this.sortedItems
            
        }
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_FROM_API",
            "ADD_TO_CART"
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        sortByOptions(selected) {
            this.sortedItems = []
            console.log(selected.name, 'SORT SORT')
            if (selected.value == 2) {
                this.ITEMS.forEach(element => {
                    this.sortedItems.push(element)
                });
                this.sortedItems.sort((a, b) => b.price.replace(/[^0-9,.]/g, ' ').trim() - a.price.replace(/[^0-9,.]/g, ' ').trim());
            }
            if (selected.value == 3) {
                this.ITEMS.forEach(element => {
                    this.sortedItems.push(element)
                });
                this.sortedItems.sort((a, b) => a.price.replace(/[^0-9,.]/g, ' ').trim() - b.price.replace(/[^0-9,.]/g, ' ').trim());
            }
        },
        sortItemsBySearchValue(value) {
            this.sortedItems = [...this.ITEMS]
            if (value) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.name.toLowerCase().includes(value.toLowerCase())
                })
            }
            this.sortedItems = this.ITEMS
        },
    },
    watch: {
        SEARCH_VALUE() {
            this.sortItemsBySearchValue(this.SEARCH_VALUE)
        }
    },
    mounted() {
        this.GET_ITEMS_FROM_API();
    }
}
</script>