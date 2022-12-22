<template>
    <div class="cart">
        <div class="cart-grid">
            <div class="cart-items-scrollable" v-if="CART.length">
                <CartItem
                v-for="(cart, index) in CART" 
                :key="cart.id"
                :cart_item_data="cart"
                @deleteFromCart="deleteFromCart(cart.id)"
                />
            </div>
            <div class="cart-empty" v-else >
                <div class="cart-text">ВАША КОРЗИНА ПУСТА</div>
            </div>
            <CartInfo @deleteAllCart="deleteAllCart"
            />
        </div>
    </div>
</template>

<script lang="ts">
import CartItem from './CartItem.vue';
import CartInfo from './CartInfo.vue';
import { mapGetters, mapActions } from 'vuex';
import { PropType , defineComponent } from "vue";
export default defineComponent({
    name: 'cart',
    components: {
    CartItem,
    CartInfo,
    },
    computed: {
        ...mapGetters(['CART'])
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'DELETE_ALL_CART'
        ]),
        deleteFromCart(index: string) {
            this.DELETE_FROM_CART(index)
        },
        deleteAllCart() {
            this.DELETE_ALL_CART()
        }
    }
})
</script>

<style lang="scss">
.cart {
    min-height: 150px;
    border-radius: 5px;
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
  &-items-scrollable {
    height: 160px; /* высота нашего блока */
    width: 100%;
    overflow-y: scroll;
  }
  &-items-scrollable::-webkit-scrollbar-thumb{
    width: 4px;
    background: rgba(0, 0, 0, .5);
    border-radius: 3px;
  }
  &-items-scrollable::-webkit-scrollbar {
    width: 4px;
  }
  &-items-scrollable::-webkit-scrollbar-track {
    background: rgba(85, 85, 85, .3);
    border-radius: 3px;
  }
}
.cart-empty {
    align-self: center;
    justify-self: center;
}
.cart-grid {
    display: grid;
    grid-template-columns: 65% 35%;
}
@media (max-width:750px) {
    .cart-grid {
        grid-template-columns: 100%;
    }
    .cart-info {
        padding-top: 30px;
    }
}
@media (max-width: 510px) {
    .cart-items-scrollable {
        display: grid;
        grid-template-columns: 50% 50%;
    }
}
@media (max-width:425px) {
    .cart-items-scrollable {
        grid-template-columns: 100%;
    }
}

</style>