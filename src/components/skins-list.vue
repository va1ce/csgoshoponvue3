<template>
    <div class="skins-list">
        <skinsListItem
            v-for="item in ITEMS"
            :key="item.id"
            :item_data="item"
            @sendArticle="showChild"
         />
       
    </div>
</template>

<script>
import skinsListItem from './skins-list__item.vue';
import { mapActions, mapGetters, createStore } from 'vuex';

export default {
    name: 'skins-list',
    components: {
        skinsListItem,
    },
    computed: {
        ...mapGetters(["ITEMS"])
    },
    methods: {
        showChild(data) {
            console.log(data)
        },
    },
    methods: {
        ...mapActions(["GET_ITEMS_FROM_API"])
    },
    mounted() {
        this.GET_ITEMS_FROM_API();
    }
}
</script>