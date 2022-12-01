<template>
    <div class="payment-methods__item" :class="{ 'payment-methods__item--selected': selectMethods == selected }"
        @click="selectPayment">
        <img :src="require('../../assets/images/' + selectOptions.src)" alt="{{selectOptions.type}}" class="payment-methods__item-img">
    </div>
</template>
<script>
export default {
    name: "selectPayment",
    data() {
        return {
            selectMethods: this.selectOptions.type
        }
    },
    props: {
        selectOptions: {
            type: Object,
            default() {
                return {}
            }
        },
        selected: {
            type: String,
            default:""
        },
    },
    methods: {
        selectPayment() {
            this.selectMethods = this.selectOptions.type
            this.$emit('selectMethods' , this.selectMethods)
        }
    }
}
</script>
<style lang="">
    
</style>