<template>
    <div class="skins-list">
        <SkinsListItem
            v-for="item in GET_SORT_AND_FILTER_ITEMS"
            :key="item.id"
            :item_data="item"
            @addToCart="addToCart"
            @removeFromCart="removeFromCart"/>
    </div>
    <EmptyList v-if="!GET_SORT_AND_FILTER_ITEMS.length"/>
    <Paginate
      v-model="pages"
      :page-count="PAGE_COUNT"
      :click-handler="changePage"
      :prev-text="'‹'"
      :next-text="'›'"
      :container-class="'pagination__list pagination'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :active-class= "'page-item--active'"
    />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkinsListItem from './SkinsListItem.vue';
import EmptyList from "../EmptyList.vue";
import { mapActions, mapGetters } from 'vuex';
import {IShopItems} from "@/src/Models/shopItem";

export default defineComponent({
    name: 'SkinsList',
    components: {
        SkinsListItem,
        EmptyList
    },
    data() {
        return {
            page: +this.$route.query.page! || 1,
        }
    },
    computed: {
        ...mapGetters([
            "ITEMS",
            "CART",
            "SEARCH_VALUE",
            "GET_SORT_AND_FILTER_ITEMS",
            "PAGE_COUNT"
        ]),
        pages() {
          return +this.$route.query.page || 1
        },
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_FROM_API",
            "ADD_TO_CART",
            "DELETE_FROM_CART",
            "GET_SEACRH_VALUE_TO_VUEX",
            "SET_FILTERED_AND_SORT_ITEMS_TO_VUEX",
            "SET_PAGE_TO_VUEX"
        ]),
        addToCart(data: IShopItems) {
            this.ADD_TO_CART(data)
        },
        removeFromCart(id: string) {
            this.DELETE_FROM_CART(id)
        },
        changePage(page_num: number) {
            this.page = page_num
            this.SET_PAGE_TO_VUEX(this.page)
            if (page_num === 1) {
                this.$router.push(`/market`)
            } else {
                this.$router.push(`/market/?page=${page_num}`)
            }
           
        }
    },
    mounted() {
        this.GET_ITEMS_FROM_API()
            .then((response: any) => {
              if (response.data) {
                this.SET_FILTERED_AND_SORT_ITEMS_TO_VUEX(response.data)
              }
            })
        if (this.SEARCH_VALUE) {
            this.GET_SEACRH_VALUE_TO_VUEX('')
        }
        this.SET_PAGE_TO_VUEX(this.page)
    },
})
</script>

<style lang="scss">
.skins-list {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--layout-grid-min-width, 182px), 1fr));
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
    border-radius: 4px;
    transition: 0.5s linear;
    cursor: pointer;
    &:hover {
        background: var(--main-color);
        color: var(--white-color);
    }
    &--active {
        background: var(--main-color);
        color: var(--white-color);
    }
}
.page-link {
  display: block;
  padding: 10px;
}

</style>