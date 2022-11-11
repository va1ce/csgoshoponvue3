<template>
    <div class="cart">
        <div class="cart-grid">
            <div class="cart-items-scrollable" v-if="CART.length">
                <cartItem v-for="cart in CART" :key="cart.id" :cart_item_data="cart" />
            </div>
            <div class="cart-empty" v-else >
                <div class="cart-text">ВАША КОРЗИНА ПУСТА</div>
            </div>
            <div class="cart-info">
                <div class="cart-info-summary">
                    <div class="cart-info-summary-list">
                        <div class="cart-info-summary-item">
                            <div class="cart-info-summary-item__title">Предметы</div>
                            <div class="cart-info-summary-item__value">1</div>
                        </div>
                        <div class="cart-info-summary-item summary-total">
                            <div class="cart-info-summary-item__title">Всего:</div>
                            <div class="cart-info-summary-item__value">117.52</div>
                        </div>
                    </div>
                </div>
                <button class="cart-info__buy-btn">Купить</button>
                <button class="cart-info__clear-btn">Очистить корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import cartItem from './cart-item.vue';
import { mapGetters } from 'vuex';
export default {
    name: 'cart',
    components: {
        cartItem,
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        ...mapGetters(['CART'])
    }
}
</script>

<style lang="scss">
.cart {
    min-height: 150px;
    border-radius: 5px;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
}
.cart-empty {
    align-self: center;
    justify-self: center;
}
.cart-grid {
    display: grid;
    grid-template-columns: 65% 35%;
}

.cart-info {
    padding-left: 20px;
}

.cart-info-summary {
    padding: 5px 15px 5px 15px;
}

.cart-info-summary-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    padding-bottom: 10px;
}

.cart-info__buy-btn {
    margin-top: 10px;
    background: var(--main-color);
    color: var(--white-color);
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    text-transform: uppercase;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.2s linear;

    &:hover {
        background-color: #a840ff;
    }
}

.summary-total {
    text-transform: uppercase;
    padding-bottom: 0;
    font-size: 18px;
}

.cart-info__clear-btn {
    margin-top: 10px;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--main-color);
    cursor: pointer;
    transition: all .2s cubic-bezier(.4, 0, .2, 1);
    opacity: .7;
    box-sizing: border-box;

    &:hover {
        opacity: 1;
    }
}
</style>