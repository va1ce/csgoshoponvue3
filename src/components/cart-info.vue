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
                    <div class="cart-info-summary-item__value">{{ cartTotalCost }}</div>
                </div>
            </div>
        </div>
        <button class="cart-info__buy-btn">Купить</button>
        <button class="cart-info__clear-btn">Очистить корзину</button>
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
                    console.log(item.price)
                    result.push(item.price.replace(/[^0-9,.]/g, ' '));
                }
                
                result = result.reduce(function (sum, el) {
                    return sum + el
                });
                return result;
            }
            else return 0;

        },
    },
    mounted() {

    }
}
</script>

<style lang="">
    
</style>