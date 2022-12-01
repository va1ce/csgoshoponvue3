<template>
    <div class="cart-info">
        <div class="cart-info-summary">
            <div class="cart-info-summary-list">
                <div class="cart-info-summary-item">
                    <div class="cart-info-summary-item__title">Предметы</div>
                    <div class="cart-info-summary-item__value">{{ CART.length }}</div>
                </div>
                <div class="cart-info-summary-item summary-total">
                    <div class="cart-info-summary-item__title">Всего:</div>
                    <div class="cart-info-summary-item__value">{{ cartTotalCost }} ₽</div>
                </div>
            </div>
        </div>
        <button class="cart-info__buy-btn">Купить</button>
        <button class="cart-info__clear-btn" @click="deleteAllCart">Очистить корзину</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'cart-info',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        ...mapGetters(['CART']),
        cartTotalCost() {
            let result = []
            if (this.CART.length) {
                for (let item of this.CART) {
                    result.push(item.price);
                }
                let k = result.reduce((acc, number) => parseFloat(acc) + parseFloat(number));
                k = parseFloat(k)
                return k.toFixed(2);
            } 
            else return 0;

        },
    },
    methods: {
        deleteAllCart() {
            this.$emit('deleteAllCart')
        },
    }
}
</script>

<style lang="">
    
</style>