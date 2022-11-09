<template>
    <div class="skins-list">
        <skinsListItem
            v-for="item in items"
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
    
    methods: {
        showChild(data) {
            console.log(data)
        },
    }
}
</script>