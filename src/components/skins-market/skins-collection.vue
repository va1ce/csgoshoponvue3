<template>
    <div class="skins-collection">
        <cart/>
        <controls
        @selectedSort="selectedSort"
        />
        <skinsList
        :selected="selectedOption"
        :selectedCheckboxGroup="selectedCheckboxGroup"
        :selectedPrice="selectedPrice"
        :selectedFloat="selectedFloat"
        />
    </div>
</template>

<script>
import controls from './controls.vue';
import skinsList from './skins-list.vue';
import cart from './cart/cart.vue';

export default {
    name: 'skins-collection',
    components: {
        cart,
        controls,
        skinsList,
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