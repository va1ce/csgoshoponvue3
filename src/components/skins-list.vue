<template>
    <div class="skins-list">
        <skinsListItem
            v-for="item in ITEMS"
            :key="item.id"
            :item_data="item"
            @addToCart = "addToCart"
         />
       
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
    computed: {
        ...mapGetters(["ITEMS"])
    },
    methods: {
        ...mapActions([
            "GET_ITEMS_FROM_API",
            "ADD_TO_CART"
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        },
    },
    mounted() {
        this.GET_ITEMS_FROM_API();
    }
}
</script>