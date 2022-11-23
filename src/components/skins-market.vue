<template>
    <div class="container">
        <div class="skins-market">
            <Sidebar 
            @priceSliderValue="priceSliderValue" 
            @floatSliderValue="floatSliderValue"
            @optionsSelect="optionsSelect"
            />
            <skinsCollection :selectedCheckboxGroup= "selectedCheckboxGroup"/>
        </div>
    </div>
</template>

<script>
import Sidebar from './sidebar.vue';
import skinsCollection from './skins-collection.vue';

export default {
    name: 'skins-market',
    components: {
        skinsCollection,
        Sidebar,
    },
    props: {},
    data() {
        return {
            selectedCheckboxGroup: [],
            selectedPrice: {
                gte: "",
                lte: ""
            },
            selectedFloat: {
                gte: "",
                lte: ""
            },
        }
    },
    methods: {
        priceSliderValue(obj) {
            this.selectedPrice.gte = obj.gte
            this.selectedPrice.lte = obj.lte
        },
        floatSliderValue(obj) {
            this.selectedFloat.gte = obj.gte
            this.selectedFloat.lte = obj.lte
        },
        optionsSelect(obj) {
            this.selectedCheckboxGroup = obj
        },
    },
}
</script>

<style>

</style>