<template>
    <button class="item__to-cart" @click="addToCart">
        <span><i v-if="!this.checkItemOnCard" class="fa fa-cart-plus"></i>{{this.checkItemOnCard == true ? " УДАЛИТЬ ИЗ КОРЗИНЫ" : " В КОРЗИНУ"}}</span>
    </button>
</template>

<script>
export default {
    name: "addToCardButton",
    data() {
        return {
            onCard:false
        }
    },
    props: {
        checkItemOnCard: {
            type: Boolean,
            default : false
        }
    },
    methods: {
        addToCart() {
            if (!this.onCard) {
                this.$emit('addToCart');
                this.onCard = true
            }
            else {
                this.$emit('removeFromCart');
                this.onCard = false
            }
            
        }
    },
}
</script>

<style lang="scss">
.item__to-cart {
    transition: 0.2s all;
    position: absolute;
    bottom: 0px;
    z-index: 10;
    width: 100%;
    color: inherit;
    text-align: left;
    font-size: 13px;
    height: 30px;
    font-weight: 600;
    padding-left: 5px;
}
</style>