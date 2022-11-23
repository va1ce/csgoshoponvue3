<template>
    <div class="skins-collection">
        <cart/>
        <controls
        @selectedSort="selectedSort"
        />
        <skinsList
        :selected="selectedOption"
        :selectedCheckboxGroup="selectedCheckboxGroup"
        />
        <pagination/>
    </div>
</template>

<script>
import controls from './controls.vue';
import skinsList from './skins-list.vue';
import pagination from './pagination.vue';
import cart from './cart.vue';

export default {
    name: 'skins-collection',
    components: {
        cart,
        controls,
        skinsList,
        pagination,
    },
    data() {
        return {
            selectedOption: {name: 'Популярность', icons:"", value: 1}
        }
    },
    props: {
        selectedCheckboxGroup: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        selectedSort(obj) {
            this.selectedOption.name = obj.name
            this.selectedOption.icons = obj.icons
            this.selectedOption.value = obj.value
        },
    },
}
</script>

<style>

</style>