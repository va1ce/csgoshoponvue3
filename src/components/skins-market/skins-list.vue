<template>
    <div class="skins-list">
        <skinsListItem v-for="item in filteredItems" :key="item.id" :item_data="item" @addToCart="addToCart" @removeFromCart="removeFromCart" />
    </div>
    <div v-if="!filteredItems.length" class="empty-list">
        <h3 class="empty-list__title">Ничего не найдено</h3>
        <h4 class="empty-list__description">Измените фильтры или сбростье их</h4>
    </div>
    <Paginate
    v-model="page"
    :page-count="pageCount"
    :click-handler="changePage"
    :prev-text="'‹'"
    :next-text="'›'"
    :container-class="'pagination__list'"
    :page-class="'page-item'"
    :active-class= "'page-item--active'"
  />
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
        },
        selectedPrice: {
            type: Object,
            default() {
                return {}
            }
        },
        selectedFloat: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            sortedItems: [],
            pagination_items_per_page: 10,
            page: +this.$route.query.page || 1,
            pagination_offset:0,
            pageCount:1
        }
    },
    computed: {
        ...mapGetters([
            "ITEMS",
            "CART",
            "SEARCH_VALUE",
        ]),
        filteredItems() {
            this.sortedItems = [...this.ITEMS]
            if (this.selectedPrice.gte || this.selectedPrice.lte) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.price >= (this.selectedPrice.gte == "" ?  this.selectedPrice.gte = 0 :this.selectedPrice.gte) && item.price <= (this.selectedPrice.lte == "" ?  this.selectedPrice.lte = 99999 :this.selectedPrice.lte)
                });
            }
            if (this.selectedFloat.gte || this.selectedFloat.lte) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.float >= (this.selectedFloat.gte == "" ?  this.selectedFloat.gte = 0 :this.selectedFloat.gte) && item.float <= (this.selectedFloat.lte == "" ?  this.selectedFloat.lte = 99999 :this.selectedFloat.lte)
                });
            }
            if (this.selectedCheckboxGroup.length) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.properties.some(r => this.selectedCheckboxGroup.includes(r))
                });
            } 
            if (this.SEARCH_VALUE) {
                this.sortedItems = this.sortedItems.filter((item) => {
                    return item.name.toLowerCase().includes(this.SEARCH_VALUE.toLowerCase())
                })
            }
            if (this.selected.value == 2) {
                this.sortedItems.sort((a, b) => b.price - a.price);
            }
            if (this.selected.value == 3) {
                this.sortedItems.sort((a, b) => a.price - b.price);
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
            }
            this.pagination_offset = (this.pagination_items_per_page * this.page) - this.pagination_items_per_page
            this.pageCount = Math.ceil(this.sortedItems.length / this.pagination_items_per_page)
            this.sortedItems = this.sortedItems.splice(this.pagination_offset, this.pagination_items_per_page)
            return this.sortedItems
            
        },
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_FROM_API",
            "ADD_TO_CART",
            "DELETE_FROM_CART",
            "GET_SEACRH_VALUE_TO_VUEX"
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
        removeFromCart(id) {
            this.DELETE_FROM_CART(id)
        },
        sortByOptions(selected) {
            this.sortedItems = []
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
        changePage(page_num) {
            this.page = page_num
            this.pagination_offset = (this.pagination_items_per_page * page_num) - this.pagination_items_per_page
            if (page_num === 1) {
                this.$router.push(`/market`)
            } else {
                this.$router.push(`/market/?page=${page_num}`)
            }
           
        }
    },
    watch: {
        SEARCH_VALUE() {
            this.sortItemsBySearchValue(this.SEARCH_VALUE)
        }
    },
    mounted() {
        this.GET_ITEMS_FROM_API();
        if (this.SEARCH_VALUE) {
            this.GET_SEACRH_VALUE_TO_VUEX('')
        }
    }
}
</script>

<style lang="scss">
.skins-list {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
}
.pagination__list {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
}
.page-item {
    list-style-type: none;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
    transition: 0.6s linear;
    &:hover {
        background: var(--main-color);
        color: var(--white-color);
    }
    &--active {
        background: var(--main-color);
        color: var(--white-color);
    }
}
.empty-list {
    width: 100%;
    text-align: center;
    padding: 150px;
    box-sizing: border-box;
    &__description {
        opacity: 0.5;
    }
}
</style>