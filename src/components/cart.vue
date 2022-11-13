<template>
    <div class="cart">
        <div class="cart-grid">
            <div class="cart-items-scrollable" v-if="CART.length">
                <cartItem 
                v-for="(cart, index) in CART" 
                :key="cart.id" 
                :cart_item_data="cart" 
                @deleteFromCart="deleteFromCart(index)"
                />
            </div>
            <div class="cart-empty" v-else >
                <div class="cart-text">ВАША КОРЗИНА ПУСТА</div>
            </div>
            <cartInfo
            />
        </div>
    </div>
</template>

<script>
import cartItem from './cart-item.vue';
import cartInfo from './cart-info.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'cart',
    components: {
    cartItem,
    cartInfo,
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
    },
    methods: {
        ...mapActions(['DELETE_FROM_CART']),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
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
.cart-items-scrollable {
    height: 160px; /* высота нашего блока */
    width: 570px;
    overflow-y: scroll;
}
.cart-items-scrollable::-webkit-scrollbar-thumb{
    width: 4px;
    background: rgba(0, 0, 0, .5);
    border-radius: 3px;
}
.cart-items-scrollable::-webkit-scrollbar{
    width: 4px;
}
.cart-items-scrollable::-webkit-scrollbar-track{
    background: rgba(85, 85, 85, .3);
    border-radius: 3px;
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